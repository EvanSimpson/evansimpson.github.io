import React, { Component, PropTypes } from 'react';
import styles from './WorkBlock.module.css';

class WorkBlock extends Component {
  static propTypes = {
    img: PropTypes.string,
    imgAlt: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string,
    linkText: PropTypes.string
  };

  render() {
    return (
      <section className={ styles.container }>
        { this.props.img &&
          <img className={ styles.image }
            src={ this.props.img }
            alt={ this.props.imgAlt }/>
        }
        <div className={ styles.textBlock }>
          <h3 className={ styles.title }>{ this.props.title }</h3>
          <p>{ this.props.description }</p>
          { this.props.linkText &&
            <a href={ this.props.link }>{ this.props.linkText }</a>
          }
        </div>
      </section>
    );
  }
}

export default WorkBlock;
