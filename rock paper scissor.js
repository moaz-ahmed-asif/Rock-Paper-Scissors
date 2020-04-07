function game(){
	let pScore = 0;
	let cScore = 0;
	function startGame(){
		playButton = document.querySelector(".intro button");
		introScreen = document.querySelector(".intro");
		match = document.querySelector(".match");
		score = document.querySelector(".score");
		
		playButton.addEventListener("click",()=>{
			introScreen.classList.add("fadeOut");
			match.classList.add("fadeIn");
			score.classList.add("fadeIn");
		},false);
	}
	function playMatch(){
		options = document.querySelectorAll(".options button");
		playerHand = document.querySelector(".playerHand");
		computerHand = document.querySelector(".computerHand");
		
		compOptions = ["rock","paper","scissors"];
		for(option of options){
			option.addEventListener("click",function(){
				compChoice = compOptions[Math.floor(Math.random()*3)];
				compareHands(this.textContent,compChoice);
				
				playerHand.src = `./images/${this.textContent}.png`;
				computerHand.src = `./images/${compChoice}.png`;
			},false);
		};
	}
	function updateScore(){
		playerScore = document.querySelector(".playerScore p");
		computerScore = document.querySelector(".computerScore p");
		playerScore.textContent = pScore;
		computerScore.textContent = cScore;
	}
	function compareHands(playerChoice,compChoice){
		winner = document.querySelector(".winner");
		if(playerChoice===compChoice){
			winner.textContent = "It's a tie !";
			return;
		}
		if(playerChoice==="rock"){
			if(compChoice==="scissors"){
				winner.textContent = "Player Wins !";
				pScore++;
				updateScore();
				return;
			}else{
				winner.textContent = "Computer Wins !";
				cScore++;
				updateScore();
				return;
			}
		}
		if(playerChoice==="paper"){
			if(compChoice==="rock"){
				winner.textContent = "Player Wins !";
				pScore++;
				updateScore();
				return;
			}else{
				winner.textContent = "Computer Wins !";
				cScore++;
				updateScore();
				return;
			}
		}
		if(playerChoice==="scissors"){
			if(compChoice==="paper"){
				winner.textContent = "Player Wins !";
				pScore++;
				updateScore();
				return;
			}else{
				winner.textContent = "Computer Wins !";
				cScore++;
				updateScore();
				return;
			}
		}
	}
startGame();
playMatch();
}


window.addEventListener("load", game, false);