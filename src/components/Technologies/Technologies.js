import React from 'react'

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiChakraui,
} from 'react-icons/si'
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import {
  List,
  ListItem,
  ListParagraph,
  // ListTitle,
  // ListContainer,
} from './TechnologiesStyles'

const Technologies = () => (
  <>
    <Section id="about">
      <SectionDivider />
      <SectionTitle>About me</SectionTitle>
      <SectionText>
        My main focus in web developement is the MERN stack. I have a Master
        Degree in Computer Science (University of Nevada, Reno). Also, I have
        experience working as IT System Administrator, with both Windows and
        Linux systems.
      </SectionText>
    </Section>

    <Section id="tech">
      <SectionDivider />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        These are some of the technologies that I have expirience with:
      </SectionText>

      <List>
        <ListItem>
          <SiHtml5 size="3rem" color="e54c25" />
          <ListParagraph>HTML</ListParagraph>
        </ListItem>
        <ListItem>
          <SiCss3 size="3rem" color="016db4" />
          <ListParagraph>CSS</ListParagraph>
        </ListItem>
        <ListItem>
          <SiJavascript size="3rem" color="yellow" />
          <ListParagraph>JavaScript</ListParagraph>
        </ListItem>
        <ListItem>
          <SiReact size="3rem" color="68c8e5" />
          <ListParagraph>React.js</ListParagraph>
        </ListItem>
        <ListItem>
          <SiNextdotjs size="3rem" />
          <ListParagraph>Next.js</ListParagraph>
        </ListItem>
        <ListItem>
          <SiChakraui size="3rem" color="44c8c1" />
          <ListParagraph>Chackra-ui</ListParagraph>
        </ListItem>
      </List>
    </Section>
  </>
)

export default Technologies
