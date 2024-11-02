const dropButton = document.getElementById('drop-button');
const message = document.getElementById('message');
const jackpotCount = document.getElementById('jackpot-count');
let jackpotPoints = 0;

dropButton.addEventListener('click', () => {
    dropCoin();
});

function dropCoin() {
    const coin = document.createElement('img');
    coin.src = 'assets/coin.png';
    coin.classList.add('coin');
    coin.style.left = Math.random() * 90 + '%';
    document.getElementById('pusher-area').appendChild(coin);
    
    // メダルが落ちるアニメーション
    setTimeout(() => {
        coin.style.top = '150px'; 
        checkPayout();
    }, 100);
}

function checkPayout() {
    const payoutChance = Math.random();
    if (payoutChance < 0.05) {
        jackpotPoints += 100;  // ジャックポット獲得
        message.textContent = "ジャックポット発生！";
        jackpotCount.textContent = jackpotPoints;
        playSound('jackpot');
    } else {
        message.textContent = "メダルが落ちました。";
        playSound('drop');
    }
    startLottery();
}

function startLottery() {
    const lotteryChance = Math.random();
    if (lotteryChance < 0.1) {
        const ball = document.createElement('img');
        ball.src = 'assets/ball.png';
        ball.classList.add('lottery-ball');
        document.getElementById('lottery-area').appendChild(ball);
        message.textContent = "抽選ボールが登場！";
        playSound('ball');
    }
}

function playSound(type) {
    const sounds = {
        drop: new Audio('assets/sounds/drop.mp3'),
        jackpot: new Audio('assets/sounds/jackpot.mp3'),
        ball: new Audio('assets/sounds/ball.mp3')
    };
    sounds[type].play();
}
