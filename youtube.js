/*
 * YouTube
 *
 * Fixes:
 * 1. Selects the player by default so that space will pause instead of scroll.
 */

;(function($) {
  function focusPlayer(_) {
    var player = $(".html5-video-player");
    if (player) {
      player.focus();
    }
  }
  focusPlayer();

  var observer = new MutationObserver(focusPlayer);

  var content = $("#content");
  observer.observe(content, {"childList":true}); 

}(document.querySelector.bind(document)));
