/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');

var breaks = [];

function visibleLinksWidth() {
  var width = 0;
  $vlinks.children().each(function() {
    width += $(this).outerWidth(true);
  });
  return width;
}

function updateNav() {
  // Rebuild from the complete ordered list on each resize. This keeps the
  // calculation deterministic and bounds the work by the number of links.
  $hlinks.children().appendTo($vlinks);
  $btn.addClass('hidden');
  breaks = [];

  var availableSpace = $nav.width();
  var remainingMoves = $vlinks.children('*:not(.masthead__menu-item--lg)').length;

  while(visibleLinksWidth() > availableSpace && remainingMoves > 0) {
    var $item = $vlinks.children('*:not(.masthead__menu-item--lg)').last();

    $btn.removeClass('hidden');
    availableSpace = $nav.width() - $btn.outerWidth(true) - 30;
    breaks.push(visibleLinksWidth());
    $item.prependTo($hlinks);
    remainingMoves--;
  }

  if($hlinks.children().length < 1) {
    $btn.addClass('hidden');
    $hlinks.addClass('hidden');
  }

  $btn.attr("count", $hlinks.children().length);
}

// Window listeners

$(window).resize(function() {
  updateNav();
});

$btn.on('click', function() {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
});

updateNav();
