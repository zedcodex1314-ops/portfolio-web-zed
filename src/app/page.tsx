import {
  Contact,
  Education,
  Experience,
  Hero,
  Projects,
  Skills,
} from "@/components/sections";

export default async function Home() {
  return (
    <div className="bg-[#0a0a0f]">
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}
