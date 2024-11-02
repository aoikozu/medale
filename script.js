body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
}

.game-container {
    width: 300px;
    margin: 0 auto;
    text-align: center;
}

.coin-container {
    position: relative;
    height: 300px;
    border: 1px solid #ccc;
    overflow: hidden;
}

.coin {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: gold;
    border-radius: 50%;
    transition: transform 0.5s ease;
}

#jackpot-notification {
    color: red;
    font-size: 1.2em;
}
