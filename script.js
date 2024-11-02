const dropCoinButton = document.getElementById('drop-coin');
const coinsContainer = document.getElementById('coins');
const medalsDisplay = document.getElementById('medals');
const jackpotNotification = document.getElementById('jackpot-notification');

let medalCount = 10; // 初期メダル枚数
let jackpotThreshold = 20; // ジャックポット発生のためのメダル枚数
let jackpotCount = 0; // 現在のジャックポットメダル数

dropCoinButton.addEventListener('click', () => {
    if (medalCount > 0) {
        dropCoin();
        medalCount--;
        medalsDisplay.textContent = medalCount;
        checkJackpot();
    } else {
        alert('メダルがありません！');
    }
});

function dropCoin() {
    const coin = document.createElement('div');
    coin.classList.add('coin');
    coinsContainer.appendChild(coin);
    
    // ランダムな位置で落下させる
    const startPosition = Math.random() * (coinsContainer.clientWidth - 20);
    coin.style.left = `${startPosition}px`;
    
    // メダルの落下
    setTimeout(() => {
        coin.style.transform = `translateY(${coinsContainer.clientHeight}px)`;
        setTimeout(() => {
            coin.remove();
            jackpotCount++;
        }, 1000); // 落下後にメダルを削除
    }, 50); // 短い遅延を追加
}

function checkJackpot() {
    if (jackpotCount >= jackpotThreshold) {
        jackpotNotification.textContent = 'ジャックポット発生！メダルをゲット！';
        // ジャックポット発生後の処理
        medalCount += 5; // ジャックポットでメダルを追加
        medalsDisplay.textContent = medalCount;
        jackpotCount = 0; // ジャックポット数をリセット
        setTimeout(() => {
            jackpotNotification.textContent = '';
        }, 3000); // 3秒後に通知を消す
    }
}

// 抽選機能（海物語風）
function lottery() {
    const lotteryResults = ["当たり", "外れ", "再抽選"];
    const result = lotteryResults[Math.floor(Math.random() * lotteryResults.length)];
    alert(`抽選結果: ${result}`);
}

// メダル投入時に抽選を行う
dropCoinButton.addEventListener('click', () => {
    lottery();
});
