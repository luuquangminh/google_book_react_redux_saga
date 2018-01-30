import React from 'react';
import { Navbar, NavItem } from 'react-materialize';
import A from './A';
import Img from './Img';
import styles from './header.css';
import Banner from './book.png';
class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <A href="https://twitter.com/mxstbr">
          <Img src={Banner} alt="react-boilerplate - Logo" />
        </A>
        <Navbar className={styles.Nav} brand="Google Books" left>
          <NavItem href="/" ><h1>Books</h1></NavItem>
          <NavItem href="/abouts"><h1>Abouts</h1></NavItem>
        </Navbar>
      </div>
    );
  }
}

export default Header;
