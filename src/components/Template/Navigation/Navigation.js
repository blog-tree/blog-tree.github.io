import React, {/*useContext, */useEffect, useState} from 'react';
import {Navbar, Nav/*, NavDropdown*/, Container} from 'react-bootstrap';
import './Navigation.css';
// import {Context} from "../../Tools/Translate/Wrapper";

const Navigation = () => {
  const [state, setState] = useState({ activeClass: 'top' });
  // const context = useContext(Context);

  const scrollHandler = () => {
    let activeClass = 'stick';
    if (window.scrollY <= 30) {
      activeClass = 'top';
    }
    setState({ activeClass });
  };

  // const getLang = (code) => {
  //   switch (code) {
  //     case 'ru':
  //       return 'Ру';
  //     case 'ua':
  //       return 'Укр';
  //     case 'en':
  //     case 'es':
  //     default:
  //       return code;
  //   }
  // }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    }
  });

  return (
    <Navbar fixed="top" className={`mcnavbar ${state.activeClass}`}>
      <Container>
        <Navbar.Brand href="/">.Blog-Tree</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/*<Nav className="me-auto">*/}
          {/*  <FormControl*/}
          {/*    placeholder="Search"*/}
          {/*  />*/}
          {/*</Nav>*/}
          <Nav className="mr-auto"/>
          <Nav className="mcnav">
            {/*<NavDropdown title={getLang(context.locale)} id="nav-dropdown" onSelect={context.selectLanguage}>
              <NavDropdown.Item eventKey="en">{getLang('en')}</NavDropdown.Item>
              <NavDropdown.Item eventKey="es">{getLang('es')}</NavDropdown.Item>
              <NavDropdown.Item eventKey="ru">{getLang('ru')}</NavDropdown.Item>
              <NavDropdown.Item eventKey="ua">{getLang('ua')}</NavDropdown.Item>
            </NavDropdown>*/}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
