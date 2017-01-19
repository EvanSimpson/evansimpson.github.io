import React, { Component } from 'react';
import styles from '../css/about.module.css';

import Header from '../components/Header/Header';

class FourOhFour extends Component {

  render() {
    return (
      <div>
        <Header/>
        <div className={ styles.container }>
          <p>
            Looks like this page doesn't exist!
          </p>
        </div>
      </div>
    );
  }
}

export default FourOhFour;
