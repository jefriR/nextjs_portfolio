import React from 'react';
import { DiFirebase, DiReact, DiDatabase, DiBootstrap } from 'react-icons/di';
import {IoAlertCircleSharp} from 'react-icons/io5'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import Button from '../../styles/GlobalComponents/Button';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionTitle>Technologies</SectionTitle>
    <SectionDivider/>
    <SectionText> 
      I really like all things about Web Developer, from Frontend, Backend, Database and others. But for now I use PHP and Javascript more often.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front End</ListTitle>
          <ListParagraph>
            Daily used with <br/>React.js & Next.js.
            <br/> <DiBootstrap />  Bootstrap V.4
            <br/> <IoAlertCircleSharp /> Sweet Alert V.2 & V.3
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>Back End</ListTitle>
          <ListParagraph>
            Daily used with<br/>PHP and Node.js
            <br/> <DiBootstrap />  Laravel
            <br/> <DiBootstrap />  Python V.3 & Flask 
            <br/> <DiBootstrap />  Express.js 
            <br/> <DiBootstrap />  Golang 
            <br/> <DiBootstrap />  Rest Full API 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size='3rem' />
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            Experience with<br/>SQl and Oracle
            <br/> <DiBootstrap />  Create Procedure & Job Oracle
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <Button position='center' onClick={() => window.location = 'https://linkedin.com/'}>See More...</Button>
  </Section>
);

export default Technologies;
