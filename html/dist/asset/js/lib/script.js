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

  $("ul.tabs li").click(function () {
    var tab_id = $(this).attr("data-tab");

    $("ul.tabs li").removeClass("current");
    $(".tab-content").removeClass("current");

    $(this).addClass("current");
    $("#" + tab_id).addClass("current");
  });
});
var mySwiper = new Swiper(".swiper-container", {
  loop: false,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var mySwiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  slidesPerGroup: 1,
  spaceBetween: 20,
  loop: false,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
