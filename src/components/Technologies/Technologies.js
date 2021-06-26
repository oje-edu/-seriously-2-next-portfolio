import React from 'react'
import { DiFirebase, DiNodejsSmall, DiPostgresql, DiReact, DiHtml5, DiCss3, DiZend } from 'react-icons/di'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles'

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologien</SectionTitle>
    <SectionText>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, repellendus ipsa?
      Magni ipsam incidunt nobis mollitia, laudantium rem minus dolores facere at ipsum omnis expedita a cupiditate maxime accusamus dolorem!
    </SectionText>
    <List>
      <ListItem>
        <div>
          <DiHtml5 size='3rem' />
          <DiCss3 size='3rem' />
          <DiReact size='3rem' />
        </div>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Erfahrung mit <br />
            html5
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <div>
          <DiNodejsSmall size='3rem' />
          <DiFirebase size='3rem' />
          <DiPostgresql size='3rem' />
        </div>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Erfahrung mit <br />
            nodejs und Datenbanken
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <div>
          <DiZend size='3rem' />
        </div>
        <ListContainer>
          <ListTitle>Sonstiges</ListTitle>
          <ListParagraph>
            Erfahrung mit <br />
            ...
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
)

export default Technologies
