import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Hola !<br />
        Welcome to My Personal Portfolio
      </SectionTitle>
      <SectionText>
        You have arrived at AstraStream Digital, where we not only specialize in
        digital marketing but also serve as your committed growth allies. Our
        fundamental principles revolve around a robust Unique Selling
        Proposition that flawlessly merges data-based digital marketing
        expertise with tailored coaching tactics, propelling businesses to
        unparalleled revenue peaks.
      </SectionText>
      <Button
        onClick={() =>
          (window.location = "https://www.facebook.com/stephen.louis.3110")
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
