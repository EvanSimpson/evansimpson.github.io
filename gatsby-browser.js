exports.onRouteUpdate = (state, page, pages) => {
  if (typeof ga != 'undefined') {
    ga('send', 'pageview', {page: state.path});
  }
};
