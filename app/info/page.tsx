import Grid from "@/components/ui/grid/index";
import { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#D56745",
};

export default async function InfoPage() {
  return (
    <div className="h-dvh overflow-y-scroll tablet:h-screen w-full font-neueGrotesk bg-principal pt-[86px] font-normal text-[16px]/[21px] tablet:text-[20px]/[26px]">
      <Grid className="gap-0 tablet:gap-5 ">
        <div className="pb-10 col-span-4 pl-5 pr-5 tablet:col-start-1 tablet:col-span-6 laptop:col-span-5">
          <p className="pb-3">
            Aliocha is a Franco-Canadian-Italian photographer based in Paris.
            <br />
            He is inspired by color, intricate details (textures, materials, and
            gestures), and the interaction between humans and their environment.
            <br />
            He works with a range of brands and has been published both in
            France and internationally. He has released his first photography
            book,{" "}
            <a
              className="italic"
              href="https://collapsebooks.com/products/midnight-sun-aliocha-boi?variant=49940622016840"
            >
              Midnight Sun
            </a>
            , with Collapse Books.
          </p>
          <div className="pb-6">
            <p>Represented by So Represent.</p>
            <p>Founder of the podcast Vision(s).</p>
          </div>
          <div>
            <p className="pb-3">Contact</p>
            <p>Personal/editorial</p>
            <a className="underline" href="mailto:aliocha.boi@gmail.com">
              aliocha.boi@gmail.com
            </a>
          </div>
          <br />
          <div>
            <p>Commercial</p>
            <a className="underline" href="mailto:sonia@sorepresent.com">
              sonia@sorepresent.com
            </a>
          </div>
        </div>
        <div className="col-span-4 tablet:col-span-3 tablet:col-start-7 laptop:grid laptop:grid-cols-6 laptop:w-full tablet:gap-5 laptop:col-span-6 laptop:col-start-7">
          <div className="col-span-4 pl-5 pr-5 tablet:pl-0 laptop:col-span-2 laptop:col-start-1">
            <p className="pb-3 laptop:pb-6">Clients (selection)</p>
            <ul className="pb-10">
              <li className="pb-1">Chanel</li>
              <li className="pb-1">Salomon</li>
              <li className="pb-1">Agnès B</li>
              <li className="pb-1">L’Oréal Paris</li>
              <li className="pb-1">Grand Paris</li>
              <li className="pb-1">Ruinart</li>
              <li className="pb-1">Ateliers Chaumet</li>
              <li className="pb-1">Paraboot</li>
              <li className="pb-1">Uber</li>
              <li className="pb-1">Cahu Paris</li>
              <li className="pb-1">Voyageurs du Monde</li>
              <li>Louis Vuitton</li>
            </ul>
          </div>
          <div className="col-span-4 pl-5 pr-5 tablet:pl-0 laptop:col-span-3 laptop:col-start-3">
            <p className="pb-3 laptop:pb-6">Publications (selection)</p>
            <ul className="pb-5">
              <li className="pb-1">M Le Monde</li>
              <li className="pb-1">T le Temps</li>
              <li className="pb-1">FT Weekend</li>
              <li className="pb-1">Beau Magazine</li>
              <li className="pb-1">Monocle</li>
              <li className="pb-1">Fisheye Magazine</li>
              <li className="pb-1">iD Magazine</li>
              <li className="pb-1">Nouvel Obs</li>
              <li className="pb-1">Numero</li>
              <li className="pb-1">Libération</li>
              <li className="pb-1">Original Traveller</li>
              <li className="pb-1">The Good Life</li>
            </ul>
          </div>
        </div>
      </Grid>
    </div>
  );
}
