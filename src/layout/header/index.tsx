import React from 'react';
import { Container, Logo, Medias, MenuLink, Nav } from './style';
import Github from '../../components/svg/Github';
import Instagram from '../../components/svg/Instagram';
import Linkedin from '../../components/svg/Linkedin';
import { useLang } from '../../context/lang';

export default function Header() {
  const currentPage = window.location.pathname;
  const { dataContent } = useLang();

  return (
    <Container>
      <Logo> {'<Lucas />'} </Logo>
      {dataContent && (
        <Nav>
          <ul>
            <li>
              <MenuLink
                href="/"
                className={currentPage === '/' ? 'active' : ''}
              >
                {dataContent.menu.home}
              </MenuLink>
            </li>
            <li>
              <MenuLink
                href="/about"
                className={currentPage === '/about' ? 'active' : ''}
              >
                {dataContent.menu.about}
              </MenuLink>
            </li>
            <li>
              <MenuLink
                href="/jobs"
                className={currentPage === '/jobs' ? 'active' : ''}
              >
                {dataContent.menu.jobs}
              </MenuLink>
            </li>
          </ul>
        </Nav>
      )}
      <Medias>
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <Linkedin />
          </a>
        </li>
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <Github />
          </a>
        </li>
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <Instagram />
          </a>
        </li>
      </Medias>
    </Container>
  );
}
