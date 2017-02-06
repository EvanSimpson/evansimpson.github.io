import React, { Component, PropTypes } from 'react';

class ExternalLink extends Component {
  static propTypes = {
    className: PropTypes.string,
    href: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
    target: PropTypes.string
  };

  trackClick(callback) {
    if (typeof ga != 'undefined') {
      let fieldObject = {
        hitType: 'event',
        eventCategory: 'Outbound',
        eventAction: 'Click',
        eventLabel: this.props.href
      };
      if ( callback ) {
        // https://github.com/react-ga/react-ga/blob/master/src/index.js#L454
        var safetyCallbackCalled = false;
        var safetyCallback = function () {
          safetyCallbackCalled = true;
          callback();
        };
        var t = setTimeout(safetyCallback, 250);
        var clearableCallbackForGA = function () {
          clearTimeout(t);
          if (!safetyCallbackCalled) {
            callback();
          }
        };
        fieldObject.hitCallback = clearableCallbackForGA;
      }
      ga('send', fieldObject);
    }
  }

  onLinkClick(e) {
    e.preventDefault();
    var normalClick = !( //https://github.com/react-ga/react-ga/pull/91/files
      e.ctrlKey ||
      e.shiftKey ||
      e.metaKey ||
      e.button === 1
    );
    if ( this.props.target !== "_blank" && normalClick ) {
      this.trackClick(() => {
        window.location.href = this.props.href;
      });
    } else {
      this.trackClick();
      // https://mathiasbynens.github.io/rel-noopener/
      // TODO use iFrame method to securely open in Safari
      // https://github.com/danielstjules/blankshield/blob/master/blankshield.js#L161
      var otherWindow = window.open();
      otherWindow.opener = null;
      otherWindow.location = this.props.href;
    }
  }

  render() {
    return (
      <a className={ this.props.className }
        href={ this.props.href }
        onClick={ (e) => {this.onLinkClick(e)} }>
        { this.props.children }
      </a>
    );
  }
}

export default ExternalLink;
