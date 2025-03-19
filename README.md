<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rock Paper Scissor Game</title>
    <link rel="stylesheet" href="style.css">
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
