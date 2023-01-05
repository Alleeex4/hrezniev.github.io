$(document).ready(function () {
  $(".slide__one").owlCarousel({
    items: 2,
    loop: true,
    margin: 100,
    merge: true,
    responsive: {
      678: {
        mergeFit: true,
      },
      1000: {
        mergeFit: false,
      },
    },
  });

  $(".slide__two").owlCarousel({
    items: 1,
    loop: true,
  });
});
