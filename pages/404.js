import React, { Component } from 'react';
import styles from '../css/about.module.css';

class FourOhFour extends Component {

  render() {
    return (
      <div>
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
