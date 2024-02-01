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
  
 
 
  
  
})