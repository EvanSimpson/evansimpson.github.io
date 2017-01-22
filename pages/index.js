import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import Helmet from 'react-helmet';
import { config } from 'config';

import styles from '../css/home.module.css';

export default class Index extends React.Component {
  render () {
    return (
      <div className={ styles.container }>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "About Evan Simpson"},
            {"name": "keywords", "content": "software, developer, contractor, freelance, designer"},
          ]}
        />
      </div>
    )
  }
}
