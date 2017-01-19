import React, { Component } from 'react';
import styles from '../css/about.module.css';

import Header from '../components/Header/Header';

import photo from '../assets/images/evan.png';

class About extends Component {

  render() {
    return (
      <div>
        <Header/>
        <div className={ styles.container }>
          <p>
            Evan Simpson is a software developer and designer located in Somerville Massachusetts. He has experience working across the full software stack at companies of all sizes.
          </p>
          <div className={ styles.image }>
            <img src={ photo } alt="Evan Simpson"/>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
