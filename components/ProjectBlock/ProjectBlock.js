import React, { Component } from 'react';

import styles from './ProjectBlock.module.css';

import Lightbox from 'react-images';

class ProjectBlock extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      linkImage: false
    };
  }

  componentDidMount() {
    this.setState({
      linkImage: true
    });
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
              <a href="#" onClick={ (evt) => {
                evt.preventDefault();
                this.setState({isOpen: true})
              } }>
                { this.getImage() }
              </a>
            : this.getImage()
          )}
          <p>
            { this.props.textContent }
          </p>
          { this.props.children }
        </div>
        { this.props.img && isOpen &&
          <Lightbox
            backdropClosesModal
            images={ [{src: this.props.img}] }
            isOpen={ this.state.isOpen }
            currentImage={ 0 }
            onClose={() => this.setState({ isOpen: false })}
            showImageCount={ false }
            width={ 700 }/>
        }
      </div>
    );
  }
}

export default ProjectBlock;
