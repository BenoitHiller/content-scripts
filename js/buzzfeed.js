/**
 * Buzzfeed
 *
 * Fixes:
 * 1. Download the full titles for rectangular article previews and display
 *    them in the tooltip.
 */

(function() {
var titleRegex = /id="post-title"\s*>(.*)(?!<\/h1)/;
var unescapeDiv = $('<div />');

function unescapeHtml(text) {
  return unescapeDiv.html(text).text();
}

function getFullTitle(link, callback) {
  var key = "buzzfeed-cache " + link;
  chrome.storage.local.get(key, function(items) {
    if (items.hasOwnProperty(key)) {
      callback(items[key]);
    } else {
      $.get(link).done(function(page) {
        var match = titleRegex.exec(page);
        if (match) {
          var title = unescapeHtml(match[1]);
          chrome.storage.local.set({key: title});
          callback(title);
        }
      });
    }
  });
}

$(".hot-block__list .list__li > a, .HotHead > .abtrack > a").each(function(i, element) {
  var wrapped = $(element);
  getFullTitle(wrapped.attr("href"), function(text) {
    wrapped.attr("title", text);
  });
});

$(document).keydown(function(event) {
  if (event.which === 66 && event.altKey) {
    var results = $(".quiz_result_area");
    if (results.length) {
      results.css("display", "block");
      $(results.children()[0]).css("display", "block");
      $(".quiz_result").each(function() {
        var div = $(this);
        div.css("display","block");
        div.find("img.result_img").each(function() {
          var result_image = $(this);
          result_image.attr("src", result_image.attr("data:src"));
        });
      });  
    }
  }
});
})();
