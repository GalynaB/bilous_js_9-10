$(function() {
  //============= slider
  $('.jcarousel').jcarousel({
    animation: {
    duration: 900,
    easing: 'linear',
    },
  })
  .jcarouselAutoscroll({
    interval: 6000,
    target: '+=1',
    autostart: true
  });

  //============ navigation
  $('.jcarousel-prev').jcarouselControl({
    target: '-=1'
  });
  $('.jcarousel-next').jcarouselControl({
    target: '+=1'
  });

  //=========== pagination
  $('.jcarousel-pagination').jcarouselPagination({
    item: function(page) {
    return '<a href="#' + page + '">' + page + '</a>';
    }
  });

  //============== select
  $('select').niceSelect();

  //============= checkbox
  var $check = $('.jcheck');
  $check.on('mousedown', function() {
  $(this).toggleClass("active");
  })
});
