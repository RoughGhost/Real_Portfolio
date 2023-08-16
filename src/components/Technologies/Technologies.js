import React from "react";
import { DiFirebase, DiMailchimp, DiReact, DiZend } from "react-icons/di";
import { BiLogoDigitalocean, BiMessageAltDetail } from "react-icons/bi";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Throughout my journey in the dynamic realm of digital marketing, I've had
      the privilege of harnessing an array of cutting-edge technologies to
      amplify brand presence, engage audiences, and drive tangible results.
      These technologies have been instrumental in shaping impactful campaigns,
      optimizing strategies, and unleashing the full potential of digital
      platforms. Here's a glimpse into the tech tapestry I've woven:
    </SectionText>
    <List>
      <ListItem>
        <BiMessageAltDetail size="3rem" />
        <ListContainer>
          <ListTitle>Digital Marketing</ListTitle>
          <ListParagraph>
            I am an experienced Digital Marketer
            <br /> with expertise in SEO, social media, pay-per-click
            advertising, user experience optimization, content creation, and
            integration of emerging technologies. I am passionate about
            innovation and committed to collaborating with you to achieve
            unparalleled success in your digital journey.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>Marketing Coach</ListTitle>
          <ListParagraph>
            With a rich and diverse background as a Marketing Coach <br /> I
            bring a wealth of experience to guide businesses towards their
            growth aspirations. Over 2 years, I've empowered entrepreneurs and
            teams to unravel the intricacies of marketing, helping them craft
            resonant brand stories, devise impactful campaigns, and unlock the
            true potential of their digital presence.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
