import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: "Personal Skills", text: `Team work <br/> Communication`},
  { number: 1000, text: 'Students', },
  { number: 1900, text: 'Github Followers', },
  // { number: 5000, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section >
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) =>(
        <Box key='index'>
          <BoxNum>{card.number}</BoxNum>
          {/* {(card.text).foreach((
            <BoxText>test</BoxText>
          ))} */}

          {/* {for(desc in card.text) {

          }} */}

          <BoxText>{card.text}</BoxText>
          {/* <BoxText>"card.text"</BoxText> */}
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
