const dropCoinButton = document.getElementById('drop-coin');
const coinsContainer = document.getElementById('coins');
const scoreDisplay = document.getElementById('score');
let score = 0;

dropCoinButton.addEventListener('click', () => {
    dropCoin();
    lottery(); // メダル投入時に抽選を行う
});

function dropCoin() {
    const coin = document.createElement('div');
    coin.classList.add('coin');
    coinsContainer.appendChild(coin);
    
    let position = 0;
    const dropInterval = setInterval(() => {
        position += 2; // 落ちる速さ
        coin.style.transform = `translateY(${position}px)`;
        
        if (position >= 300) { // 落ち切ったとき
            clearInterval(dropInterval);
            score += 10; // スコアを追加

            // jp機能を追加
            if (Math.random() < 0.1) { // 10%の確率でボーナス
                score += 50; // ボーナススコア
                alert('jpメダルを取得！スコア +50');
            }

            scoreDisplay.textContent = score;
            coin.remove(); // メダルを削除
        }
    }, 50); // 落ちる間隔
}

function lottery() {
    const lotteryResults = ["当たり", "外れ", "再抽選"];
    const result = lotteryResults[Math.floor(Math.random() * lotteryResults.length)];
    alert(`抽選結果: ${result}`);
}
