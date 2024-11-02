const dropCoinButton = document.getElementById('drop-coin');
const coinsContainer = document.getElementById('coins');
const scoreDisplay = document.getElementById('score');
let score = 0;

dropCoinButton.addEventListener('click', dropCoin);

function dropCoin() {
    const coin = document.createElement('div');
    coin.classList.add('coin');
    coinsContainer.appendChild(coin);
    
    // メダルを下に落とす
    let position = 0;
    const dropInterval = setInterval(() => {
        position += 2; // 落ちる速さ
        coin.style.transform = `translateY(${position}px)`;
        
        if (position >= 300) { // 落ち切ったとき
            clearInterval(dropInterval);
            score += 10; // スコアを追加
            scoreDisplay.textContent = score;
            coin.remove(); // メダルを削除
        }
    }, 50); // 落ちる間隔
}
