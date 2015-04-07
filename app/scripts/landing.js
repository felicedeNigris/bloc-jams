  $(document).ready(function() { 
    $('.hero-content h3').click(function(){
      var subText = $(this).text();
       $(this).text(subText + "!");
    });
 
   var onHoverAction = function(event) {
     console.log('Hover action triggered.');
     $(this).animate({'margin-top': '10px'});
   };
 
   var offHoverAction = function(event) {
     console.log('Off-hover action triggered.');
     $(this).animate({'margin-top': '0px'});
   };
 
    $('.selling-points .point').hover(onHoverAction, offHoverAction);
  


$( ".navbar-header" ).click(function() {
  console.log("Image Clicked.");
  $(this).first().fadeOut( "slow", function fadeBackIn() {
    $(".player-header-nav navbar").click(function clickandShow(){
      $(".navbar-header").show();
  });
});
});




  
});//end of $(document) function
