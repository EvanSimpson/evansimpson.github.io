import React, { Component } from 'react';

import styles from './ProjectPage.module.css';

class ProjectPage extends Component {
  render() {
    return (
      <article className={ styles.container }>
        <header>
          <h1>
            { this.props.title }
          </h1>
          { this.props.link &&
            <a href={ this.props.link } target="_blank">
              { this.props.linkText }
            </a>
          }
        </header>
        { this.props.children }
      </article>
    );
  }
}

export default ProjectPage;
