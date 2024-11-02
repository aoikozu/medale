const dropButton = document.getElementById('drop-button');
const message = document.getElementById('message');
const pusherArea = document.getElementById('pusher-area');

dropButton.addEventListener('click', () => {
    dropCoin();
});

function dropCoin() {
    const coin = document.createElement('img');
    coin.src = 'assets/coin.png';
    coin.style.position = 'absolute';
    coin.style.left = Math.random() * 100 + '%';
    coin.style.transition = 'top 2s';
    coin.style.top = '0';
    pusherArea.appendChild(coin);

    setTimeout(() => {
        coin.style.top = '150px'; // メダルが落ちる位置
        checkJackpot();
    }, 100);
}

function checkJackpot() {
    if (Math.random() < 0.1) { // 10%の確率でジャックポット
        message.textContent = 'ジャックポット！';
        // ジャックポットのアニメーションや効果音を追加
    } else {
        message.textContent = 'メダルが落ちました。';
    }
}
