import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, FullSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        My Portfolio
      </SectionTitle>
      <SectionText>
        Hello, I'm a Web Developer since 2019 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      </SectionText>
      <Button onClick={() => window.location = 'https://linkedin.com/'}>Download CV</Button>
    </LeftSection>
  </Section>
);

export default Hero; 