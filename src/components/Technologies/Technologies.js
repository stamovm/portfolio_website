import React from 'react'
import { DiCss3, DiHtml5, DiJavascript, DiReact } from 'react-icons/di'
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
        <DiHtml5 size="3rem" />
        <ListParagraph>HTML</ListParagraph>
      </ListItem>
      <ListItem>
        <DiCss3 size="3rem" />
        <ListParagraph>CSS</ListParagraph>
      </ListItem>
      <ListItem>
        <DiJavascript size="3rem" />
        <ListParagraph>
          JavaScript <br />
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListParagraph>React.js</ListParagraph>
      </ListItem>
    </List>
  </Section>
)

export default Technologies
