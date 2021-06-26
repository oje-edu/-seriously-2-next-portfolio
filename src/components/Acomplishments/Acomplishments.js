import React from 'react'

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents'
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles'

const data = [
  { number: 2, text: 'Open Source Projete' },
  { number: 0, text: 'Pull Requests', },
  { number: 0, text: 'Github Followers', },
  { number: 0, text: 'Github Stars', }
]

const Acomplishments = () => (
  <Section>
    <SectionTitle>Persönliche Highlights</SectionTitle>
    <Boxes>
      {data.map((card, i) => (
        <Box key={i}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
)

export default Acomplishments
