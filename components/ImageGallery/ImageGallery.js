import React, { Component, PropTypes } from 'react';

import styles from './ImageGallery.module.css';

import Lightbox from 'react-images';

class ImageGallery extends Component {

  static propTypes = {
    images: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      photoIndex: 0
    };
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
    let { isOpen, photoIndex } = this.state;
    let { images } = this.props;
    return (
      <div className={ styles.container }>
        { this.getImages() }
        { isOpen &&
          <Lightbox
            backdropClosesModal
            images={ images }
            isOpen={ this.state.isOpen }
            currentImage={ photoIndex }
            onClickPrev={ () => this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
            }) }
            onClickNext={ () => this.setState({
                photoIndex: (photoIndex + 1) % images.length,
            }) }
            onClose={() => this.setState({ isOpen: false })}
            width={ 700 }/>
        }
      </div>
    );
  }
}

export default ImageGallery;
