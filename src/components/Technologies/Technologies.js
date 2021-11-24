import React from 'react'
import {
  DiCss3,
  DiFirebase,
  DiHtml5,
  DiJavascript,
  DiReact,
  DiZend,
} from 'react-icons/di'
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles'

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      These are some of the technologies that I have worked with:
    </SectionText>
    <List>
      <ListItem>
        <ListParagraph>
          Experience with:
          <br />
          <DiHtml5 /> HTML,
          <DiCss3 /> CSS,
          <DiJavascript /> JavaScript, <br />
          <DiReact /> React.js
        </ListParagraph>
      </ListItem>
    </List>
  </Section>
)

export default Technologies
