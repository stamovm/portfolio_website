import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { Container, Div1, Div2, NavLink, SocialIcons } from './HeaderStyles'

const Header = () => (
  <Container>
    <Div1>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
    </Div1>
    <Div2>
      <SocialIcons href="https://github.com/stamovm">
        <AiFillGithub size="3rem"></AiFillGithub>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/marinstamov/">
        <AiFillLinkedin size="3rem" color="0077b5"></AiFillLinkedin>
      </SocialIcons>
    </Div2>
  </Container>
)

export default Header
