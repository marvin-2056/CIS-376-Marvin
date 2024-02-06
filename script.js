$(document).ready(function(){
  
  
  $("img").draggable( 
  {
      stop: function() {
    


    let dogeLeft = $("img").position().left;
    
    if (dogeLeft> 300) {


      console.log("we are past 300");
      $('p').text("we are past 300");    
    }
    else{

      console.log("we are not past 300");
      $('p').text("we are not past 300");   

    }
    }
  });  



  $(document).ready(function(){
    animateIMG();
});

function makeNewPosition(){


    var h = $(window).height() - 50;
    var w = $(window).width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];    

}

function animateIMG(){
    var newq = makeNewPosition();
    $('img').animate({ top: newq[0], left: newq[1] }, function(){
      animateIMG();        
    });

};
  
 
 
  
  
})