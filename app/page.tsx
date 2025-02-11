import Home from "@/components/home";
import Intro from "@/components/intro";
import Navbar from "@/components/layouts/navbar";

export default async function HomePage() {
  return (
    <>
      <Intro />
      <Navbar />
      <Home />
    </>
  );
}
