import React, { Component } from 'react';

import styles from './ProjectBlock.module.css';

let Lightbox;

class ProjectBlock extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      linkImage: false,
      lightbox: false
    };
  }

  componentDidMount() {
    if ( typeof window != indefined ) {
      Lightbox = require('react-image-lightbox');
      this.setState({
        lightbox: true,
        linkImage: true
      });
    }
  }

  getLightBox() {
    if ( this.state.lightbox ) {
      return (
        <Lightbox
          mainSrc={ this.props.img }
          onCloseRequest={() => this.setState({ isOpen: false })}
        />
      );
    } else {
      return false;
    }
  }

  getImage() {
    return <img src={ this.props.img } alt={ this.props.imgAlt }/>;
  }

  render() {
    const { isOpen, linkImage } = this.state;
    return (
      <div className={ styles.container }>
        { this.props.title &&
          <h3>
            { this.props.title }
          </h3>
        }
        <div className={ styles.flowContainer }>
          { this.props.img && (linkImage ?
              <a href="#" onClick={ () => this.setState({isOpen: true}) }>
                { this.getImage() }
              </a>
            : this.getImage()
          )}
          <p>
            { this.props.textContent }
          </p>
          { this.props.children }
        </div>
        { this.props.img && isOpen && this.getLightBox() }
      </div>
    );
  }
}

export default ProjectBlock;
