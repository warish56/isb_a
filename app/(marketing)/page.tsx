
import { HeroSection } from "./_homeSections/Hero";
import { LadderA } from "./_homeSections/ladderA";
import { LadderB } from "./_homeSections/ladderB";
import { LadderC } from "./_homeSections/ladderC";
import { LadderD } from "./_homeSections/ladderD";
import { LadderE } from "./_homeSections/ladderE";
import { LadderF } from "./_homeSections/ladderF";
import { LadderG } from "./_homeSections/ladderG";
import { Pricing } from "./_homeSections/Pricing";
import { Faq } from "./_homeSections/Faq";
import { Testimonial } from "./_homeSections/Testimonial";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <LadderA/>
        <LadderB/>
        <LadderC/>
        <LadderD />
        <LadderE />
        <LadderF />
        <LadderG />
        <Pricing />
        <Testimonial />
        <Faq />
      </main>
    </div>
  );
}
