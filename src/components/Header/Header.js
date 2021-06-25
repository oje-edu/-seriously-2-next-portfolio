import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai'
import { GiEmberShot } from 'react-icons/Gi'

import { Container, Span, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles'

const Header = () => (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{ display: 'flex', alignItems: 'center', color: 'whitesmoke', marginBottom: '20px' }}>
          {/* TODO: FLIP second ICON */}
          <GiEmberShot size='3rem' /> <Span>Portfolio</Span> <GiEmberShot size='2rem' />
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projekte</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Technologien</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>Über</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/oje-edu' target='_blank' rel='noopener noreferrer'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://linkedin.com/in/thorsten-oje' target='_blank' rel='noopener noreferrer'>
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://twitter.com/0berfoerster' target='_blank' rel='noopener noreferrer'>
        <AiOutlineTwitter size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://instagram.com/0berfoerster' target='_blank' rel='noopener noreferrer'>
        <AiFillInstagram size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.youtube.com/channel/UC-p7KMht2kokesM0O9Q5tyg' target='_blank' rel='noopener noreferrer'>
        <AiFillYoutube size='3rem' />
      </SocialIcons>
    </Div3>
  </Container>
)

export default Header
