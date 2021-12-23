import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
     <SectionTitle>
       Hola !<br/>
       Welcome to My Personal Portfolio
     </SectionTitle>
     <SectionText>
       My Aim is to use my Acquired Knowledge of Programming, to Help
       Companies and also Individuals
        build up thier Businesses to a High level of Standard Through Web Development. 
     </SectionText>
     <Button onClick={() => window.location = 'https://google.com'}>
       Learn More
     </Button>
    </LeftSection>
    </Section>
);

export default Hero;