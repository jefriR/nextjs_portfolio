import React from 'react';
import { DiCodeigniter, DiReact, DiDatabase, DiBootstrap, DiPython,  DiHtml5, DiJavascript, DiJqueryLogo,  } from 'react-icons/di';
import { SiGo, SiOracle} from 'react-icons/si'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, ListMikro, ListItemMikro } from './TechnologiesStyles';
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
            {/* <br/> <DiBootstrap />  Bootstrap V.4
            <br/> <IoAlertCircleSharp /> Sweet Alert V.2 & V.3 */}
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCodeigniter size='3rem' />
        <ListContainer>
          <ListTitle>Back End</ListTitle>
          <ListParagraph>
            Daily used with<br/>Laravel and Express.js
            {/* <br/> <DiBootstrap />  Laravel
            <br/> <DiBootstrap />  Python V.3 & Flask 
            <br/> <DiBootstrap />  Express.js 
            <br/> <DiBootstrap />  Golang 
            <br/> <DiBootstrap />  Rest Full API  */}
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size='3rem' />
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            Experience with<br/>SQl and Oracle
            {/* <br/> <DiBootstrap />  Create Procedure & Job Oracle */}
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <ListMikro>
    
      <ListItemMikro><DiHtml5 />  HTML/CSS</ListItemMikro>
      <ListItemMikro><DiJavascript />  Javascript</ListItemMikro>
      <ListItemMikro><DiJqueryLogo /> Jquery</ListItemMikro>
      <ListItemMikro><DiBootstrap />  Bootstrap</ListItemMikro>
      <ListItemMikro><DiPython />  Python/Flask</ListItemMikro>
      <ListItemMikro><SiGo />  Golang</ListItemMikro>
    </ListMikro>
  </Section>
);

export default Technologies;
