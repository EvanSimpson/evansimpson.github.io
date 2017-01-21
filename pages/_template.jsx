import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import '../css/default';
import '../css/markdown-styles'
import styles from '../css/template.module.css';

import Header from '../components/Header/Header';
import SkipToContent from '../components/SkipToContent/SkipToContent';

import { rhythm } from '../utils/typography'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div className={ styles.page }>
        <SkipToContent/>
        <Header/>
        <main className={ styles.contentContainer } id="main">
          {this.props.children}
        </main>
      </div>
    )
  },
})
