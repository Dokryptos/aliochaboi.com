import Home from "@/components/home";
import Intro from "@/components/intro";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <>
      <Intro />
      <Suspense>
        <Home />
      </Suspense>
    </>
  );
}
