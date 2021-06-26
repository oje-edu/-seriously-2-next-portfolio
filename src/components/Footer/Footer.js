import React from 'react'
import { AiFillInstagram, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai'

import { SocialIcons } from '../Header/HeaderStyles'
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles'

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Anrufen</LinkTitle>
          <LinkItem href='tel:110'>110</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>eMail</LinkTitle>
          <LinkItem href='mailto:info(at)yo(dot)me'>info(at)yo(dot)me</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Geht ned, gibts ned!</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://twitter.com/0berfoerster' target='_blank' rel='noopener noreferrer'>
            <AiOutlineTwitter size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://instagram.com/0berfoerster' target='_blank' rel='noopener noreferrer'>
            <AiFillInstagram size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://www.youtube.com/channel/UC-p7KMht2kokesM0O9Q5tyg' target='_blank' rel='noopener noreferrer'>
            <AiFillYoutube size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  )
}

export default Footer
