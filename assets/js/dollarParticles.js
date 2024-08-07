const canvas = document.getElementById('dollarCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const dollarSigns = [];
const numDollarSigns = 10;

for (let i = 0; i < numDollarSigns; i++) {
    dollarSigns.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 30 + 10,
        speed: Math.random() * 2 + 1
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00f3ff';
    ctx.font = '5px Arial';
    
    dollarSigns.forEach(sign => {
        ctx.fillText('$', sign.x, sign.y);
        sign.y += sign.speed;
        
        if (sign.y > canvas.height) {
            sign.y = -sign.size;
            sign.x = Math.random() * canvas.width;
        }
    });

    requestAnimationFrame(draw);
}

draw();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
