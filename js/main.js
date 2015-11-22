$(document).ready(function() {

  var roi = new CountUp("roi", 4, 16, 0, 2.5, {  
    useEasing: true,
    suffix: '<sup>th</sup>'
  });

  var waypointroi = new Waypoint({
    element: document.getElementById('roi'),
    handler: function(direction) {
      roi.start();
    },
    offset: '90%'
  });
  var salaries = new CountUp("salaries", 10, 28, 0, 2.5, {  
    useEasing: true,
    suffix: '<sup>%</sup>'
  });

  var waypointsalaries = new Waypoint({
    element: document.getElementById('salaries'),
    handler: function(direction) {
      salaries.start();
    },
    offset: '90%'
  });
  var payback = new CountUp("payback", 10, 50, 0, 2.5, {  
    useEasing: true,
  });

  var waypointpayback = new Waypoint({
    element: document.getElementById('payback'),
    handler: function(direction) {
      payback.start();
    },
    offset: '90%'
  });



  $('#box-2').on("mouseover", function() {
  	console.log($(this).closest('.square-content'));
  	$('.dialogBox').addClass('activated');

  });
  $('#box-2').on("mouseout", function() {
  	$('.dialogBox').removeClass('activated');
  });

});
