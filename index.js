let answer = Math.trunc(Math.random()*20)+1; 
let score = 20;
let highScore=0;

if(localStorage.getItem('highscore')!='undefined'){
    document.querySelector('.highscore').textContent = localStorage.getItem('highscore');
}
else{
    highScore = 0;
    localStorage.setItem('highscore',highScore);
}

document.querySelector('.check').addEventListener('click',function(){
    let guess = document.querySelector('#guess').value;
    
    let messsage = document.querySelector('.message');

    document.querySelector('body').style.backgroundColor = "rgb(153 142 245)";

    if(guess){
        // if(score < 2){
        //     messsage.textContent = "You Lost";
        //     document.querySelector('body').style.backgroundColor = "Red";
        // }
        if(score < 2 && guess!=answer){
            messsage.textContent = "You Lost";
            document.querySelector('.check').style.display = "none";
            document.querySelector('body').style.backgroundColor = "rgb(255, 127, 127)"; 
            score--;
            document.querySelector('.score').textContent = score;           
        }
        else if(guess < 1 || guess > 20){
            
            messsage.textContent = "Wrong Input";
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('body').style.backgroundColor = "rgb(255, 127, 127)";
        }
        else if(guess > answer){
            messsage.textContent = "Too High";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else if(guess < answer){
            messsage.textContent = "Too Low";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            messsage.textContent = "You Won";
            document.querySelector('body').style.backgroundColor = "rgb(44, 255, 44)";
            document.querySelector('.number').textContent = answer;
            document.querySelector('.check').style.display = "none";
            if(highScore < score){
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
                localStorage.setItem('highscore',highScore);
            }

        }
        document.querySelector('#guess').value = "";
    }
    else{
        alert("Please give Input")
    }

});

document.querySelector('.again').addEventListener('click',function(){
    answer = Math.trunc(Math.random()*20)+1; 
    document.querySelector('body').style.backgroundColor = 'rgb(153 142 245)';
    document.querySelector('#guess').value = "";
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.message').textContent = "Start Guessing";
    document.querySelector('.check').style.display = "inline-block";
    // console.log(answer);
    
})