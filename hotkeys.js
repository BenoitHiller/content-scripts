(function(hotkeys, $, undefined) {
  var LEFT = 37;
  var RIGHT = 39;

  var Z_CODE = 90;
  var X_CODE = 88;
  var C_CODE = 67;

  hotkeys.setHotkeys = function(prevDiv, nextDiv, arrowKeys, randomDiv) {
    arrowKeys = typeof arrowKeys !== 'undefined' ? arrowKeys : true;

    document.onkeydown = function(event) {
      var div;
      if ((arrowKeys && event.keyCode == LEFT)
          || event.keyCode == Z_CODE){
         div = $(prevDiv);
        if (div) div.click();
      } else if ((arrowKeys && event.keyCode == RIGHT) 
          || event.keyCode == C_CODE) {
        div = $(nextDiv);
      } else if (!!randomDiv && event.keyCode == Z_CODE) {
        div = $(randomDiv);
      }

      if (div) {
        div.click();
      }
    };
  }
}(window.hotkeys = window.hotkeys || {}, document.querySelector.bind(document)));
