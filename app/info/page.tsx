import Grid from "@/components/ui/grid/index";
import { Viewport } from "next";
import { getInfo } from "@/sanity/queries";

export async function generateViewport(): Promise<Viewport> {
  const info = await getInfo();
  return { themeColor: info.themeColor };
}

// Reconnait la syntaxe [texte](lien) dans un texte brut et la transforme
// en <a> cliquable, sans jamais interpreter de HTML tape dans le CMS.
const LINK_SYNTAX = /\[([^\]]+)\]\((https?:\/\/[^\s)]+|mailto:[^\s)]+|tel:[^\s)]+)\)/g;

function renderTextWithLinks(text: string) {
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  LINK_SYNTAX.lastIndex = 0;
  while ((match = LINK_SYNTAX.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const [, label, href] = match;
    nodes.push(
      <a
        key={`link-${key++}`}
        className="underline"
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {label}
      </a>
    );
    lastIndex = LINK_SYNTAX.lastIndex;
  }
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }
  return nodes;
}

export default async function InfoPage() {
  const info = await getInfo();

  const { bio, clients, publications } = info;

  return (
    <div className="h-dvh overflow-y-scroll tablet:h-screen w-full font-neueGrotesk bg-[var(--color-principal)] pt-[86px] font-normal text-[16px]/[21px] tablet:text-[20px]/[26px] ">
      <Grid className="gap-0 tablet:gap-5 select-text">
        <div className="pb-10 col-span-4 pl-5 pr-5 tablet:col-start-1 tablet:col-span-6 laptop:col-span-5 whitespace-pre-line">
          {renderTextWithLinks(bio)}
        </div>
        <div className="col-span-4 tablet:col-span-3 tablet:col-start-7 laptop:grid laptop:grid-cols-6 laptop:w-full tablet:gap-5 laptop:col-span-6 laptop:col-start-7 ">
          <div className="col-span-4 pl-5 pr-5 tablet:pl-0 laptop:col-span-2 laptop:col-start-1">
            <p className="pb-3 laptop:pb-6">Clients (selection)</p>
            <ul className="pb-10">
              {clients.map((client, index) => (
                <li key={`${index}-${client}`} className="pb-1">
                  {client}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-4 pl-5 pr-5 tablet:pl-0 laptop:col-span-3 laptop:col-start-3">
            <p className="pb-3 laptop:pb-6">Publications (selection)</p>
            <ul className="pb-5">
              {publications.map((publication, index) => (
                <li key={`${index}-${publication}`} className="pb-1">
                  {publication}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Grid>
    </div>
  );
}
