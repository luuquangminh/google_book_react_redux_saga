import React from 'react';
import { Navbar, NavItem } from 'react-materialize';
import styles from './header.css';
class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Navbar className={styles.Nav} brand="Google Books" left>
          <NavItem href="/" ><h1>Books</h1></NavItem>
          <NavItem href="/abouts"><h1>Abouts</h1></NavItem>
        </Navbar>
      </div>
    );
  }
}

export default Header;
