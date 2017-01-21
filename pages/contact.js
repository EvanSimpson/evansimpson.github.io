import React, { Component } from 'react';
import styles from '../css/contact.module.css';

class About extends Component {

  render() {
    return (
      <div>
        <div className={ styles.container }>
          <p>Say hello at</p>
          <p>me @ this domain</p>
        </div>
      </div>
    );
  }
}

export default About;
