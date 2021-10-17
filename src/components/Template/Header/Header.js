import React from 'react';
import Navigation from '../Navigation/Navigation'

class Header extends React.Component {
  render() {
    return (
      <header className="header-container">
        <Navigation />
      </header>
    );
  }
}

export default Header;
