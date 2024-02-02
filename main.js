let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePointer = document.querySelector("#user-score");
const compScorePointer = document.querySelector("#computer-score");


const genCompChoice = () => {
    // rock paper scissors 
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
    
};

const drawGame = (userChoice)=>{
    console.log(`The Game was Draw Because both chose  ${userChoice}`);
    msg.innerText=`The Game was Draw Because both chose  ${userChoice}`;
    msg.style.backgroundColor = "#081b31";

};

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        // console.log(" Congratulations  You Win !!!");
        userScore++;
        userScorePointer.innerText =userScore;
        msg.innerText = `Congratulations  You Win !!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        // console.log(" You Lose, Better Next Time ");
        compScore++;
        compScorePointer.innerText = compScore; 
        msg.innerText= `Better Next Time ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";


    }
}

const playGame = (userChoice) => {
    
    // console.log("The user select ", userChoice);

    // Generate computer choice

    const compChoice = genCompChoice();
    // console.log("computer choice",compChoice);

    // Check conditions 

    if(userChoice === compChoice){
        drawGame(userChoice);
    } else {
        let userWin = true ;
        if(userChoice === 'rock'){
            // scissors or paper

            userWin = compChoice ==="paper" ? false : true;

        } else if (userChoice === 'paper') {
            // rock or scissors

            userWin = compChoice ==="scissors" ? false : true;

        } else {
            // rock or paper

            userWin = compChoice ==="rock" ? false : true;

        }
        showWinner(userWin,userChoice,compChoice);

    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", ()=> {
        const userChoice = choice.getAttribute("id");
        // console.log("The user select ", userChoice);
        playGame(userChoice);
    });
});