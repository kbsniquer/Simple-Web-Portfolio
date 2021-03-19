// Adjust the scrolling offset
function scrollToTargetAdjusted(id) {
  document.getElementById(id).scrollIntoView(false);
}

$(window).scroll(function () {
  $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250);
});
