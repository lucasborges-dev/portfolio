import React from 'react';
import { Container, Logo, MenuLink, Nav } from './style';

import { useLang } from '../../context/lang';
import MediasComp from '../../components/Medias';

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
                to="/"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {dataContent.menu.home}
              </MenuLink>
            </li>
            <li>
              <MenuLink
                to="/about"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {dataContent.menu.about}
              </MenuLink>
            </li>
            <li>
              <MenuLink
                to="/jobs"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {dataContent.menu.jobs}
              </MenuLink>
            </li>
          </ul>
        </Nav>
      )}
      <MediasComp direction="column" />
    </Container>
  );
}
