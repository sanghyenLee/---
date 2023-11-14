$(document).ready(function () {
  $(".bold").hover(function () {
    timer = setTimeout(function () {
      $("header").not(":animated").css({ overflow: "visible" });
      $(".bold").not(":animated").css({ color: "black" });
      $(".HeaderMain").not(":animated").css({ background: "#ffffff" });
      $(".headerlogoh").not(":animated").css({ opacity: "1" });
      $(".sitemaph").not(":animated").css({ opacity: "1" });
    }, 100);
  });

  $(".menufloat").mouseleave(function () {
    // $(".listbox").slideUp(500), $(".menubk").slideUp(500);
    timer = setTimeout(function () {
      $("header").not(":animated").css({ overflow: "hidden" });
      $(".bold").not(":animated").css({ color: "#ffffff" });
      $(".HeaderMain").not(":animated").css({ background: "" });
      $(".headerlogoh").not(":animated").css({ opacity: "0" });
      $(".sitemaph").not(":animated").css({ opacity: "0" });
    }, 100);
  });

  $(".sitemaph").click(function () {
    timer = setTimeout(function () {
      $("header").not(":animated").css({ overflow: "visible" });
      $(".bold").not(":animated").css({ color: "black" });
      $(".HeaderMain").not(":animated").css({ background: "#ffffff" });
      $(".headerlogoh").not(":animated").css({ opacity: "1" });
      $(".sitemaph").not(":animated").css({ opacity: "1" });
    }, 100);
  });
});
