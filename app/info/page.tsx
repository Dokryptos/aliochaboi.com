import Grid from "@/components/ui/grid/index";
import { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#D56745",
};

export default async function InfoPage() {
  return (
    <div className="h-dvh overflow-y-scroll tablet:h-screen w-full font-neueGrotesk bg-principal pt-[86px] font-normal text-[16px]/[21px] tablet:text-[20px]/[26px] ">
      <Grid className="gap-0 tablet:gap-5 select-text">
        <div className="pb-10 col-span-4 pl-5 pr-5 tablet:col-start-1 tablet:col-span-6 laptop:col-span-5">
          <p className="pb-3 ">
            Between France, Canada and Italy, Aliocha Boi grew up moving across
            different countries, cultures, encounters, and landscapes. This
            composite identity nurtured in him a sensitive connection to places
            — their rhythms, lights, and colors — as well as to the people who
            inhabit them. He observes them with an attentive, fascinated
            presence, capturing details and atmospheres, learning to feel their
            essence. To create his images, he immerses himself deeply in his
            subjects, with an attention that is both spontaneous and exacting,
            within a climate of trust and exchange. He shares what nature,
            objects, and living beings reveal when one looks at them with
            sensitivity, patience, and kindness.
            <br />
            <br />
            As a photographer, Aliocha engages with reality, yet what he shows
            is already a memory, gently filtered through emotion. Attention
            selects, memory condenses. And what remains are impressions: a deep
            blue, a golden warmth, a marked texture, a blurred gesture, two
            dominant colors, primary forms, a light, a silence. His images do
            not capture facts; they retain what imprints itself on his memory,
            what lingers and moves him. He conveys what he experienced with
            emotional rather than factual fidelity: atmospheres, endless
            slownesses, accelerated effervescences. He captures gestures,
            rituals, and harmonies woven between human beings and the world,
            sharing sequences of moments that feel almost familiar, as if his
            memories had become our own.
            <br />
            <br />
            He works for several brands (Chanel, Salomon, Longchamp, Lacoste…)
            and for French and international publications (M Le Monde,
            Libération, Regain Magazine…). In 2025, he publishes{" "}
            <a
              className="italic"
              href="https://collapsebooks.com/products/midnight-sun-aliocha-boi?variant=49940622016840"
            >
              Midnight Sun
            </a>{" "}
            with Collapse Books, the result of an immersive residency in the
            heart of the Arctic.
          </p>
          <br />
          Text by Lisa Cadot, 2025
          <br />
          <br />
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
        <div className="col-span-4 tablet:col-span-3 tablet:col-start-7 laptop:grid laptop:grid-cols-6 laptop:w-full tablet:gap-5 laptop:col-span-6 laptop:col-start-7 ">
          <div className="col-span-4 pl-5 pr-5 tablet:pl-0 laptop:col-span-2 laptop:col-start-1">
            <p className="pb-3 laptop:pb-6">Clients (selection)</p>
            <ul className="pb-10">
              <li className="pb-1">Chanel</li>
              <li className="pb-1">Lacoste</li>
              <li className="pb-1">Salomon</li>
              <li className="pb-1">Agnès B</li>
              <li className="pb-1">L’Oréal Paris</li>
              <li className="pb-1">Ruinart</li>
              <li className="pb-1">Ateliers Chaumet</li>
              <li className="pb-1">Paraboot</li>
              <li className="pb-1">Evaneos</li>
              <li className="pb-1">Voyageurs du Monde</li>
              <li className="pb-1">Louis Vuitton</li>
            </ul>
          </div>
          <div className="col-span-4 pl-5 pr-5 tablet:pl-0 laptop:col-span-3 laptop:col-start-3">
            <p className="pb-3 laptop:pb-6">Publications (selection)</p>
            <ul className="pb-5">
              <li className="pb-1">M Le Monde</li>
              <li className="pb-1">T le Temps</li>
              <li className="pb-1">FT Weekend</li>
              <li className="pb-1">FT HTSI</li>
              <li className="pb-1">Society</li>
              <li className="pb-1">Monocle</li>
              <li className="pb-1">Family Style</li>
              <li className="pb-1">iD Magazine</li>
              <li className="pb-1">Numero</li>
              <li className="pb-1">Libération</li>
              <li className="pb-1">Regain Magazine</li>
            </ul>
          </div>
        </div>
      </Grid>
    </div>
  );
}
