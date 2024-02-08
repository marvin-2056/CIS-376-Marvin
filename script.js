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
          animateIMG(); 
      });
  }

  
  $("img").on('click', function(){
      var text = "YAY you win i'd give you a cookie but I'm too lazy to add that in, anyway click the button to restart!"; 
      console.log("you clicked the img");
      var displayText = $("<p1>").text(text); 
      $("body").append(displayText);
      $('img').stop(); 
  });

  
  $("#resetButton").on('click', function(){
      $("p1").remove();
      animateIMG();
      

  });





});
