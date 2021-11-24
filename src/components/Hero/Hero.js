import React from 'react'

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My personal Portfolio
      </SectionTitle>
      <SectionText>My name is Marin and I am a Web Developer</SectionText>
      <Button onClick={() => (window.location = 'https://github.com/stamovm')}>
        Projects
      </Button>
    </LeftSection>
  </Section>
)

export default Hero
