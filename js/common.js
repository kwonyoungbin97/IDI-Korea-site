$(function () {
  $(".icon-menu ul li   ").click(function () {
    var iconMenu = $(this).index();
    // console.log(iconMenu);
    $("#care-line .items").hide();
    $("#care-line .items").eq(iconMenu).show();
    return false;
  });
  const swiper = new Swiper(".swiper", {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    // Optional parameters

    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
