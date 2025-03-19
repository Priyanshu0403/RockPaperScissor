<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rock Paper Scissor Game</title>
    <style>
        *{
    margin: 0;
    padding: 0;
    text-align: center;
}
h1{
    background-color: #081b31;
    color: white;
    height: 5rem;
    line-height: 5rem;/* can be used to make the text vertically center */
}
.choice{
    border-radius: 50%;
    /* display: flex;
    justify-content: center;
    align-items: center; */
}
.choice:hover{
    
    cursor: pointer;
    background-color:#081b31;
    color: white;
}
.choice p{
    font-size: 200px;
    border-radius: 50%;
}
.choices{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    margin-top: 3rem;
}

.score-board{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    margin-top: 3rem;
    gap: 5rem;
}

#user-score,#comp-score{
    font-size: 5rem;
}
.msg-conatiner{
    margin-top: 4rem;
}

#msg{
    background-color: #081b31;
    color: white;
    font-size: 2rem;
    display: inline;
    padding: 1rem;
    border-radius: 5rem;
}
    </style>
</head>
<body>
    <h1>Rock Paper Scissor</h1>
    <div class="choices" >
        <div class="choice" id="rock">
            <p>✊</p>
            <h3>Rock</h3>
        </div>
        <div class="choice" id="paper">
            <p>✋</p>
            <h3>Paper</h3>
        </div>
        <div class="choice" id="Scissor">
            <p>✌️</p>
            <h3>Scissor</h3>
        </div>
    </div>

    <div class="score-board">
        <div class="score">
            <p id="user-score">0</p>
            <p>You</p>
        </div>
        <div class="score">
            <p id="comp-score">0</p>
            <p>Computer</p>
        </div>
    </div>
    <div class="msg-conatiner">
        <p id="msg">Play your move</p>
    </div>
    <script src="script.js"></script>
</body>
</html>
