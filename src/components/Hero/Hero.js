import React from 'react'

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents'
// import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        N'guude uff'm <br />
        (hessischen) Portfolio
      </SectionTitle>
      <SectionText>
        Der nun folgende Blindtext - iss ned uff hessisch!!!<br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptas odio commodi a omnis iste repellat vero sapiente doloribus. Exercitationem nobis similique nostrum odit eligendi magni molestiae blanditiis sint odio a minima, voluptates qui totam!
      </SectionText>
    </LeftSection>
  </Section>
)

export default Hero
