/**
 * Ruby-Doc
 *
 * Fixes:
 * 1. Redirects all older ruby versions to the latest
 */
if (!window.location.search.match(/[?&]done-redirect([?&=]|$)/)) {
  var newLocation = window.location.pathname.replace(/(\/[^-]+)-\d+\.\d+\.\d+/, "$1");
  window.location = newLocation + "?done-redirect" + window.location.search.replace(/^\?/,"&") + window.location.hash;
}
