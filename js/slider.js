 $('.single-item').slick({
      infinite: false,
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
  ]
});