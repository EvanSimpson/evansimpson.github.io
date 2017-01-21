import React, { Component } from 'react';

import styles from './SkipToContent.module.css';

class SkipToContent extends Component {
  render() {
    return (
      <a href="#main" className={ styles.link }>
        Skip To Content
      </a>
    );
  }
}

export default SkipToContent;
