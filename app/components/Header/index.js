import React from 'react';
import { Navbar, NavItem } from 'react-materialize';
import {
  Link,
} from 'react-router-dom';
import A from './A';
import Img from './Img';
import styles from './header.css';
import Banner from './book.png';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Img src={Banner} alt="react-boilerplate - Logo" />
        <Navbar className={styles.Nav} brand="Google Books" left>
          <li><Link to="/"><h1>Books</h1></Link></li>
          <li><Link to="/collections"><h1>collections</h1></Link></li>
          <li><Link to="/abouts"><h1>Abouts</h1></Link></li>
        </Navbar>
      </div>
    );
  }
}

export default Header;
