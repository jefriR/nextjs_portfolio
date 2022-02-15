import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { ContainerExperience, Boxes2Grid, Boxes, Box, BoxNum, BoxText } from './TimeLineStyles'
import { ListMikro, ListItemMikro } from '../Technologies/TechnologiesStyles';
import { TimeLineData } from '../../constants/constants';
import { DiTerminalBadge } from 'react-icons/di';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Works = [
  { number: "2019 - PT Indomarco Prismatama", text: 'Internship ', },
  { number: 5, text: 'Private Projects', },
  // { number: 1900, text: 'Github Followers', },
  // { number: 5000, text: 'Github Stars', }
];

const Activities = [
  { number: "2019 - PT Indomarco Prismatama", text: 'Internship ', },
  { number: 5, text: 'Private Projects', },
  // { number: 1900, text: 'Github Followers', },
  // { number: 5000, text: 'Github Stars', }
];

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id='about'>
      <SectionTitle>About Me </SectionTitle>
      <SectionDivider />
      <SectionText>
      Scene Graduated in 2020 from Bina Nusantara University with Software Engineering's interest. , now I work in PT Indomarco Prismatama as Backoffice Team. My main jobs is created system for data transform from any resource to main database and  monitoring it. 
      I created Monitoring webs for monitoring all my systems.
      </SectionText>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode key={index} final={index === TOTAL_CAROUSEL_COUNT -1}>
              <CarouselItem index={index} id={`carousel__item-${index}`} 
                            active={activeItem} onClick={(e) => handleClick(e, index)}>
                <CarouselItemTitle>
                  {item.year}
                  <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fill-opacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop
                          offset="0.79478"
                          stop-color="white"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                </CarouselItemTitle>
                <CarouselItemText> {item.text} </CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => (
          <CarouselButton key={index} index={index} active={activeItem} 
                          onClick={(e) => handleClick(e, index)} type='button'>
            <CarouselButtonDot active={activeItem} />
          </CarouselButton>
        ))}
      </CarouselButtons>
      
     
      <ContainerExperience>
        <h1>Work Experience <SectionDivider /></h1>
        <Boxes2Grid>
        <Box>
          <BoxNum>2019 - Internship at PT XYZ Program</BoxNum>
          <BoxText><DiTerminalBadge size='2rem'/>Lorem ipsum dolor sit amet, consectetur </BoxText>
        </Box>
        <Box>
          <BoxNum BoxNum>2020 - Full Stack at PT XYZ Program</BoxNum>
          <BoxText><DiTerminalBadge size='2rem'/>Lorem ipsum dolor sit amet, consectetur </BoxText>
        </Box>
        <Box>
          <BoxNum BoxNum>2021 - Front End as PT Lorem ipsum</BoxNum>
          <BoxText><DiTerminalBadge size='2rem'/>Lorem ipsum dolor sit amet, consectetur </BoxText>
        </Box>
        </Boxes2Grid>
      </ContainerExperience>
    </Section>
  );
};

export default Timeline;
