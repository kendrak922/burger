$(function() {
    $(".eatThis").on("click", function(event) {
      const id = $(this).data("id");
      let devourIt = $(this).data("devourIt");
  
      const newDevoured = {
        devoured : devoureIt 
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevoured
      }).then(
        function() {
          console.log("changed status to", devourIt);
          location.reload();
        }
      );
    });
  



$(".submit").on("click", function(event){
event.preventDefault();
const newBurger = $(this).val();
$.ajax("/api/burgers", {
    type: "POST",
    data: newBurger
}).then(
    function(){
        console.log("new burger created");
        location.reload();
    }
 )
});
});