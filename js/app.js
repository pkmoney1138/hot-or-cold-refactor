$(document).ready(function(){
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});
  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
	var compNum = Math.floor((Math.random() * 100) + 1);
	var userNum;
	//holds absolute value of (user - comp) numb:
	var absoluteNum;
	var counter = 0;
	//run randNum function so comp. number is created and game can begin:
	console.log(compNum);
	//click function. Game begins:
	$('#guessButton').on('click', function(e) {
		e.preventDefault();	
		//function that holds and returns the user's num choice:
		function inputNum() {
			userNum = $('#userGuess').val();
			parseInt(userNum);
			return userNum;
		};
		//function that counts number of user attempts:
		function numOfGuesses() {
			counter++;
			$('#count').html(counter);
		};
		//quick function to be used in if/else so I don't have to write the same stuff over and over again:
		function feedback(message) {
			$('#feedback').text(message)
		};
		function subtractNum(x,y) {
			absoluteNum = Math.abs(x - y);
			return absoluteNum;
		}
		//function that will add user's guessed numbs to the guessList:
		function valOfGuesses(guess) {
			if(isNaN(guess) || guess == ("") || guess <= 0 || guess > 100) {
				$('#guessList').append(""); 
			}
			else {	
				$('#guessList').append('<li>' + guess + '</li>');
			}	
		};
		//function with if/else statement that appends feedback to html:
		function feedbackVal(difference) {
			if(userNum < 1 || userNum > 100) {
				feedback('Please choose a number between 1 and 100');
			}
			else if(isNaN(difference)) {
				feedback('Numbers Only, Please');
			}
			else if(difference >= 50) {
				numOfGuesses()
				feedback('Ice Cold');
			}
			else if(difference >= 30) {
				numOfGuesses()
				feedback('Cold');
			}
			else if(difference >= 20) {
				numOfGuesses()
				feedback('Warm');
			}
			else if(difference >= 10) {
				numOfGuesses()
				feedback('Hot');
			}
			else if(difference >= 1) {
				numOfGuesses()
				feedback('Very Hot');
			}
			else if(difference == 0) {
				numOfGuesses()
				feedback('You Are Correct, Sir!');
			}
		};
		//run inputNum function:
		console.log(inputNum());
		subtractNum(userNum,compNum);
		valOfGuesses(userNum);
		//runs feedback function and passes absoluteNum (abs # result from subtractNum) as its argument:
		feedbackVal(absoluteNum);
		$('#userGuess').val("");
		$('#userGuess').focus();
		//clicking on "new" button starts newGame:
		$('a.new').on('click',function() {
			feedback('New Game!');
			$('#userGuess').val("");
			$('#userGuess').focus();
			$('#guessList > li').remove();
			counter = 0;
			$('#count').html(counter);
			console.log(compNum);
		});
	});	
});	
