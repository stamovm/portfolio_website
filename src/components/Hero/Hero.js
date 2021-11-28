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
        Marin Stamov
      </SectionTitle>
      <SectionText>A Web Developer</SectionText>
      {/* <Button onClick={() => (window.location = 'https://github.com/stamovm')}>
        Projects
      </Button> */}
    </LeftSection>
    <br />
    <br />
  </Section>
)

export default Hero
