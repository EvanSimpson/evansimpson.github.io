import React, { Component } from 'react';
import styles from '../css/contact.module.css';

import Header from '../components/Header/Header';

class About extends Component {

  render() {
    return (
      <div>
        <Header/>
        <div className={ styles.container }>
          <p>Say hello at</p>
          <p>me @ this domain</p>
        </div>
      </div>
    );
  }
}

export default About;
