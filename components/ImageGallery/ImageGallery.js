import React, { Component, PropTypes } from 'react';

import styles from './ImageGallery.module.css';

let Lightbox;

class ImageGallery extends Component {

  static propTypes = {
    images: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      photoIndex: 0,
      lightbox: false
    };
  }

  componentWillMount() {
    if (typeof window != 'undefined') {
      Lightbox = require('react-image-lightbox');
      this.setState({
        lightbox: true
      });
    }
  }

  getLightBox() {
    if ( this.state.lightbox ) {
      let { images } = this.props;
      let { photoIndex } = this.state;
      return (
        <Lightbox
          mainSrc={images[photoIndex].src}
          imageCaption={images[photoIndex].desc}
          nextSrc={images[(photoIndex + 1) % images.length].src}
          prevSrc={
            images[(photoIndex + images.length - 1) % images.length].src
          }
          onCloseRequest={() => this.setState({ isOpen: false })}
          onMovePrevRequest={() => this.setState({
              photoIndex: (photoIndex + images.length - 1) % images.length,
          })}
          onMoveNextRequest={() => this.setState({
              photoIndex: (photoIndex + 1) % images.length,
          })}
        />
      );
    } else {
      return false;
    }
  }

  getImages() {
    return this.props.images.map((image, index) => {
      return (
        <a href="#"
          key={ "image-" + index }
          onClick={() =>
            this.setState({
              isOpen: true,
              photoIndex: index
            })
          }>
          <img { ...image }/>
        </a>
      );
    });
  }

  render() {
    let { isOpen } = this.state;
    return (
      <div className={ styles.container }>
        { this.getImages() }
        { isOpen && this.getLightBox() }
      </div>
    );
  }
}

export default ImageGallery;
