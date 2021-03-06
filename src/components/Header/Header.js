import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiTwotoneMail } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { DiTerminalBadge } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display: 'flex', alignItems: 'center', color: 'white', marginBottom:'20px'}}>
          <DiTerminalBadge size='4rem' /> <Span> Jeff Ronal</Span> 
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      {/* <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li> */}
      <li>
        <Link href="#tech">
          <NavLink>Tech</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://linkedin.com'>
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
      <SocialIcons href='mailto:your@mail.com'>
        <AiTwotoneMail size='3rem' />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
