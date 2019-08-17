$(document).ready(function(){
  $("form#quiz").submit(function(event){
    event.preventDefault();
    var quantity = $("input:radio[name=quantity]:checked").val();
    var method = $("input:radio[name=method]:checked").val();
    var consistency = $("input:radio[name=consistency]:checked").val();
    var omelette = $("input:radio[name=omelette]:checked").val();
    var bird = $("input:radio[name=bird]:checked").val();

      if (quantity === "1" || omelette === "denver" || method === "poached" || bird === "pheasant"){
        $("#option5").show();
      }
      else if (quantity === "2" || omelette === "meat" || omelette === "tamagoyaki" || method === "boiled" || consistency === "hardBoiled"){
        $("#option2").show();
      }
      else if (quantity === "3" || omelette === "florentine" || method === "sunnySideUp" || bird === "chicken" || consistency === "softBoiled" || omelette === "cheese"){
        $("#option3").show();
      }
      else if (quantity === "6" || bird === "ostrich" || method === "scrambled" || consistency === "softer" || bird === "duck" || omelette === "meat"){
        $("#option1").show();
      }
      else if (quantity === "12" || bird === "quail" || consistency === "raw" || method === "overMedium" || omelette === "whites"){
        $("option4").show();
      }
      else {
        alert("error")
      }
      $("#result").show();
      $("#quiz").hide();
    });
  });
