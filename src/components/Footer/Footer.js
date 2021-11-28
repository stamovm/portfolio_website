import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

import { SocialIcons } from '../Header/HeaderStyles'
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles'

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:contact@mstamov.com">
            contact@mstamov.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialContainer>
        <SocialIcons href="https://github.com/stamovm">
          <AiFillGithub size="3rem"></AiFillGithub>
        </SocialIcons>
        <SocialIcons href="https://linkedin.com">
          <AiFillLinkedin size="3rem"></AiFillLinkedin>
        </SocialIcons>
      </SocialContainer>
    </FooterWrapper>
  )
}

export default Footer
