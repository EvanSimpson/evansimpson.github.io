import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import Helmet from 'react-helmet';
import { config } from 'config';

import ExternalLink from '../components/ExternalLink/ExternalLink';

import photo from '../assets/images/evan.png';
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
          ]}/>
        <div>
          <p>
            I'm a designer and developer whose work is grounded in principles of accesibility, <a href="http://evansimpson.com/inclusive/">inclusion</a>, and human centered design. I have experience working across many different kinds of software systems on cross-functional teams. I've co-authored a self-taught course on web development, developed computer vision software, and written Bluetooth libraries for embedded devices. Outside of work, I'm either hiking, running, reading, or hacking around with sound-reactive lighting.
          </p>
          <div className={ styles.links }>
            <ExternalLink href="https://github.com/EvanSimpson">
              GitHub
            </ExternalLink>
            <ExternalLink href="https://www.linkedin.com/in/evansimpson">
              LinkedIn
            </ExternalLink>
          </div>
        </div>
        <div className={ styles.image }>
          <img src={ photo } alt="Evan Simpson"/>
        </div>
      </div>
    )
  }
}
