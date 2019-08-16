$(document).ready(function(){
  $("form#quiz").submit(function(event){
    event.preventDefault();
    var quantity = $("input:radio[name=quantity]:checked").val();
    var method = $("input:radio[name=method]:checked").val();
    var consistency = $("input:radio[consistency]:checked").val();
    var omelette = $("input:radio[omelette]:checked").val();
    var bird = $("input:radio[bird]:checked").val();
    // if (!quantity || !method || !consistency || !omelette || !bird){
    //   (alert("Please enter a response for each question before submitting")
    // }
    // else{
      if (quantity === "1" ||  method === "scrambled" || consistency === "hard" || (omelette === "denver" && bird === "chicken") || bird === "pheasant"){
        $("#option1").show();
      }
      else if (quantity === "2" || method === "sunnyside" || consistency === "softer" || bird === "ostrich" || omelette === "cheese"){
        $("#option2").show();
      }
      else if (quantity === "3" || method === "poached" || (method === "boiled" && consistency === "soft") || omelette === "florentine" || bird === "duck"){
        $("#option3").show();
      }
      else if (quantity === "6" || method === "scrambled" || consistency === "raw" || omelette === "meat" || bird === "ostrich"){
        $("#option4").show();
      }
      else{
        $("#option5").show();
      }
      $("form#quiz").hide();
      $("#result").show();
   });
 });
