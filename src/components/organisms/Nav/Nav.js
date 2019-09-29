import React from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import IconButton from 'components/atoms/IconButton/IconButton';
import cardsicon from 'assets/icons/cardsicon.svg';
import acc from 'assets/icons/acc.svg';
import logout from 'assets/icons/logout.svg';
import theme from 'theme/mainTheme.js';

const StyledNav = styled.nav`
  width: 100vw;
  height: 15vh;
  max-height: 100px;
  background-color: ${theme.darkTheme.light2};
  position: absolute;
  top: 0;
  left: 0;
`;
const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  padding: 5px 2% 5px 0;
  margin-right: 2.5%;
`;
const StyledLi = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
`;
const StyledLogo = styled.h1`
  font-weight: bold;
  font-size: 4rem;
  display: block;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  padding-left: 2.5%;
  color: white;
  text-shadow: 2px 2px 5px #000;
`;
const Nav = () => (
  <StyledNav>
    <StyledLogo>LOGO</StyledLogo>
    <StyledList>
      <StyledLi>
        <IconButton as={NavLink} to="/decks" icon={cardsicon} activeClassName="active" />
      </StyledLi>
      <StyledLi>
        <IconButton as={NavLink} to="/account" icon={acc} activeClassName="active" />
      </StyledLi>
      <StyledLi>
        <IconButton as={Link} exact to="/" icon={logout} />
      </StyledLi>
    </StyledList>
  </StyledNav>
);

export default Nav;
