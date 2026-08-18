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

function updateNav() {

  var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;
  var movedItem = false;

  // The visible list is overflowing the nav
  if($vlinks.width() > availableSpace) {

    var $item = $vlinks.children('*:not(.masthead__menu-item--lg)').last();

    // At very narrow widths the fixed brand can be wider than the available
    // space. Stop here when there is no movable link instead of recursing
    // forever on an unchanged navigation layout.
    if(!$item.length) {
      $btn.removeClass('hidden');
      $btn.attr("count", breaks.length);
      return;
    }

    // Record the width of the list
    breaks.push($vlinks.width());

    // Move item to the hidden list
    $item.prependTo($hlinks);
    movedItem = true;

    // Show the dropdown btn
    if($btn.hasClass('hidden')) {
      $btn.removeClass('hidden');
    }

  // The visible list is not overflowing
  } else {

    // There is space for another item in the nav
    if(availableSpace > breaks[breaks.length-1]) {

      // Move the item to the visible list
      $hlinks.children().first().appendTo($vlinks);
      breaks.pop();
    }

    // Hide the dropdown btn if hidden list is empty
    if(breaks.length < 1) {
      $btn.addClass('hidden');
      $hlinks.addClass('hidden');
    }
  }

  // Keep counter updated
  $btn.attr("count", breaks.length);

  // Recur if the visible list is still overflowing the nav
  if(movedItem && $vlinks.width() > availableSpace) {
    updateNav();
  }

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
