import React, { Component } from 'react';

import ExternalLink from '../ExternalLink/ExternalLink';

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
            <ExternalLink href={ this.props.link }>
              { this.props.linkText }
            </ExternalLink>
          }
        </header>
        { this.props.children }
      </article>
    );
  }
}

export default ProjectPage;
