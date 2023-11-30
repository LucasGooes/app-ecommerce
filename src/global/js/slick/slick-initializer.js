$(document).ready(function () {
  $(".top-bar__text-list").slick({
    waitForAnimate: false,
    autoplay: !0,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    zIndex: 1,
  });

  $(".banner-slider__list").slick({
    waitForAnimate: false,
    autoplay: !0,
    autoplaySpeed: 4500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    zIndex: 1,
  });

  $(".shelf__list-1").slick({
    waitForAnimate: false,
    // autoplay: !0,
    // autoplaySpeed: 4500,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    zIndex: 1,
  });
});
