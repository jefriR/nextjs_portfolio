import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, FullSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        Jefri Ronaldo's Portfolio
      </SectionTitle>
      <SectionText>
        Hello, I'm a Web Developer since 2019 - Graduated 2020 from Bina Nusantara University in Computer Science Department with Software Engineering's interest.
      </SectionText>
      <Button onClick={() => window.location = 'https://linkedin.com/'}>Download CV</Button>
    </LeftSection>
  </Section>
);

export default Hero; 