import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Header.module.css';

class Header extends Component {
  render() {
    return (
      <div className={ styles.container }>
        <header className={ styles.header }>
          <Link to='/'>
            <h1>
              Evan Simpson
            </h1>
          </Link>
          <p>
            Designer/Developer
          </p>
        </header>
        <nav className={ styles.nav }>
          <ul>
            <li>
              <Link to={'/work/'}>
                Work
              </Link>
            </li>
            <li>
              <Link to={'/about/'}>
                About
              </Link>
            </li>
            <li>
              <Link to={'/contact/'}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
