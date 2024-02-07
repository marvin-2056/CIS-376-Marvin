$(document).ready(function(){

  $("img").draggable(); 

    containment: "#imageContainer"
        scroll: false;

  animateIMG(); 

  
  function makeNewPosition(){
      var h = $(window).height() - 50;
      var w = $(window).width() - 50;
      var nh = Math.floor(Math.random() * h);
      var nw = Math.floor(Math.random() * w);
      return [nh,nw];    
  }

  // Function to animate the image
  function animateIMG(){
      var newq = makeNewPosition();
      $('img').animate({ top: newq[0], left: newq[1] }, 900, function(){
          animateIMG(); // Recursive call to keep animating the image        
      });
  }

  
  $("img").on('click', function(){
      var text = "YAY you win i'd give you a cookie but I'm too lazy to add that in, anyway click the button to restart!"; // Text to display
      var displayText = $("<p1>").text(text); 
      $("body").append(displayText);
      $('img').stop(); // Stop the animation
  });

  // Add a reset button to restart the animation
  $("#resetButton").on('click', function(){
      $("p1").remove();
      animateIMG();
      

  });





});
