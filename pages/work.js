import React, { Component } from 'react';
import styles from '../css/work.module.css';

import Header from '../components/Header/Header';
import WorkBlock from '../components/WorkBlock/WorkBlock';

import resumeData from '../resume.json';

class Work extends Component {

  buildWorkBlocks() {
    let blocks = [];
    for (var i=0; i<resumeData.work.length; i++) {
      blocks.push(<WorkBlock { ...resumeData.work[i] } key={ i }/>);
    }
    return blocks;
  }

  render() {
    return (
      <div>
        <Header/>
        <div className={ styles.container }>
          { this.buildWorkBlocks() }
        </div>
      </div>
    );
  }
}

export default Work;
