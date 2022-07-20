$(document).ready(function() {
   
    setInterval(changecolors, 4000);
  
  
  var counter = 0;
  //animation below is to dynamicaly change colorsof the body of the web page//
  function changecolors() {
          var colors = ["MediumSlateBlue", "MediumAquamarine", "Gold", "pink"];
          
          if (counter < colors.length) {
              $("body" ).css("background-color", colors[counter], 1000);
              $("#call" ).css("background-color", colors[counter], 1000);
              counter++;
          } else {
              counter = 0;
          }
      }
      changecolors();
  
  });
  
  $(document).ready(function(){
    $("#idcard").css("center-block")   
});
