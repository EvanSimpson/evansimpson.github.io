import React, { Component, PropTypes } from 'react';

class ExternalLink extends Component {
  static propTypes = {
    className: PropTypes.string,
    href: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired
  };

  render() {
    return (
      <a className={ this.props.className }
        href={ this.props.href }
        rel={ "noreferrer noopener" }
        target={ "_blank" }>
        { this.props.children }
      </a>
    );
  }
}

export default ExternalLink;
