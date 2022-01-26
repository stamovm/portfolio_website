import React from 'react'

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
// import Button from '../../styles/GlobalComponents/Button'

import { LeftSection } from './HeroStyles'

const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle main>Marin Stamov</SectionTitle>
      <SectionText>Web Developer</SectionText>
    </LeftSection>
  </Section>
)

export default Hero
