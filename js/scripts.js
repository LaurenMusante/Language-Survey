$(document).ready(function(){
  $("form#quiz").submit(function(event){
    event.preventDefault();
    var quantity = $("input:radio[name=quantity]:checked").val();
    var method = $("input:radio[name=method]:checked").val();
    var consistency = $("input:radio[consistency]:checked").val();
    var omelette = $("input:radio[omelette]:checked").val();
    var bird = $("input:radio[bird]:checked").val();

      if (quantity === "1" || omelette === "denver"){
        $("#option5").show();
      }
      else if (quantity === "2" || omelette === "meat" || consistency === "hard"){
        $("#option2").show();
      }
      else if (quantity === "3" || omelette === "florentine" || bird === "chicken"){
        $("#option3").show();
      }
      else if (quantity === "6" || bird === "ostrich" || consistency === "softer" || omelette === "meat"){
        $("#option3").show();
      }
      else if (quantity === "A dozen" || bird === "quail"){
        $("option4").show();
      }
      else {
        $("#option1").show();
      }
      $("#result").show();
      $("#quiz").hide();
    });
  });
