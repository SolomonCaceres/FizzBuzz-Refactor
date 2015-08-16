$(document).ready(function() {



function fizzbuzz() {
  for (var i = 1; i <= 101; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
      $("#box").append("FizzBuzz");
    } else if ( i % 3 == 0 ) {
      $("#box").append("Fizz");
    } else if (i % 5 == 0) {
      $("#box").append("Buzz");
    } else {
      $("#box").append(i);
    }
  }
}



$("#input-area .enter-button").click(function(){
	var text=$("#input-area input").val();
	var num = Number(text);
	

if(!text){
	alert("type your number in the box");
}


else if(num){
	alert('yes');
}

});




});