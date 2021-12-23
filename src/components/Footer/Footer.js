import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href="tel:+234-91-5055-6281">+234-91-5055-6281</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href="mailto:elitestephenlouis@gmail.com">elitestephenlouis@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
      <CompanyContainer>
        <Slogan> Shoot for the Stars, Aim for the Moon</Slogan>
      </CompanyContainer>
      <SocialContainer>
      <SocialIcons>
       <AiFillGithub size="3rem"/>
       </SocialIcons>
     <SocialIcons>
       <AiFillLinkedin size="3rem"/>
       </SocialIcons>
     <SocialIcons>
       <AiFillInstagram size="3rem"/>
       </SocialIcons>
       </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
