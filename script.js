const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Oyun değişkenleri
const player = {
    x: 100,
    y: 100,
    width: 32,
    height: 32,
    speed: 5,
};

const enemies = [];

const levels = [
    {
        // Level 1
        map: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ],
    },
    // ... (Diğer level'lar)
];

let currentLevel = 0;

// Oyun döngüsü
function gameLoop() {
    // Arka planı temizle
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Haritayı çiz
    drawMap(levels[currentLevel].map);

    // Oyuncuyu çiz
    drawPlayer(player);

    // Düşmanları çiz
    drawEnemies(enemies);

    // Oyuncu hareketlerini kontrol et
    handlePlayerInput();

    // Düşman hareketlerini kontrol et
    handleEnemyAI();

    // Çarpışmaları kontrol et
    checkCollisions();

    // Oyun döngüsünü tekrar başlat
    requestAnimationFrame(gameLoop);
}

// Oyun fonksiyonları
function drawMap(map) {
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] === 1) {
                ctx.fillStyle = "black";
                ctx.fillRect(j * 32, i * 32, 32, 32);
            }
        }
    }
}

function drawPlayer(player) {
    ctx.fillStyle = "red";
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function drawEnemies(enemies) {
    for (let i = 0; i < enemies.length; i++) {
        ctx.fillStyle = "
