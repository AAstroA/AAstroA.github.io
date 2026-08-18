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

function updateNav() {
  // Use one consistent dropdown menu at every viewport width. Keep the brand
  // visible and move every page link into the dropdown.
  $vlinks.children('*:not(.masthead__menu-item--lg)').appendTo($hlinks);

  if($hlinks.children().length > 0) {
    $btn.removeClass('hidden');
  } else {
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
