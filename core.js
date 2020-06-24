function toggleDropdown () {
  $(".navitem").slideToggle( 250, function () {
    $(self).toggleClass("visible");
  })
}