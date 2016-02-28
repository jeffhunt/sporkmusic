$(document).ready(function() {
  var mob_button = $("#mobile-menu-button");
  var mob_menu = $("#mobile-menu");

  mob_button.click(function() {
    mob_menu.toggle();
    if (mob_menu.css("display") == "block") {
      mob_button.removeClass("mobile-menu-open");
      mob_button.addClass("mobile-menu-close");
    } else {
      mob_button.addClass("mobile-menu-open");
      mob_button.removeClass("mobile-menu-close");
    }
  });
});
