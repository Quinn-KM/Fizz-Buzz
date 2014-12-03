$(document).ready(function()  {

	var maxValue = parseInt(prompt("Please enter the max value to count to."), 10);	

	for(var i= 1 ; i <= maxValue ; i++){
		if(i % 15 === 0){
			$('body').append("FizzBuzz<br>");
		}
		else if(i % 3 === 0){
			$('body').append("Fizz<br>");
		}
		else if(i % 5 === 0){
			$('body').append("Buzz<br>");
		}
		else {
			$('body').append(i+"<br>");
		}
		
	}


});