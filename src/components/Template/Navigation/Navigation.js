import React, {useContext, useEffect, useState} from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';
import {Context} from "../../Tools/Translate/Wrapper";

const Navigation = () => {
  const [state, setState] = useState({ activeClass: 'top' });
  const context = useContext(Context);
  const scrollHandler = () => {
    let activeClass = 'stick';
    if (window.scrollY <= 30) {
      activeClass = 'top';
    }
    setState({ activeClass });
  };
  const getLang = (code) => {
    switch (code) {
      case 'ru':
        return 'Ру';
      case 'ua':
        return 'Укр';
      case 'en':
      case 'es':
      default:
        return code;
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    }
  });

  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className={`mcnavbar ${state.activeClass}`}>
      <Link to="/">.Blog-Tree</Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav className="mcnav">
          <NavDropdown title={getLang(context.locale)} id="nav-dropdown" onSelect={context.selectLanguage}>
            <NavDropdown.Item eventKey="en">{getLang('en')}</NavDropdown.Item>
            <NavDropdown.Item eventKey="es">{getLang('es')}</NavDropdown.Item>
            <NavDropdown.Item eventKey="ru">{getLang('ru')}</NavDropdown.Item>
            <NavDropdown.Item eventKey="ua">{getLang('ua')}</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
