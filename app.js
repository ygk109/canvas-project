const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
//moveTo: 마우스 포인터 위치 이동  lineTo: 포인터가 있는 곳으로 부터 x축 y축 이동
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.lineTo(150, 150);
ctx.lineTo(50, 150);
ctx.lineTo(50, 50);
//rect fucntion으로 사각형생성
ctx.rect(150, 150, 100, 100);
ctx.rect(250, 250, 100, 100);
ctx.stroke();

//beginPath로 새로운 레이어에서 작성
ctx.beginPath();
ctx.rect(350, 350, 100, 100);
ctx.fillStyle = "red";
ctx.fill();

ctx.fillRect(250, 550, 100, 200);
ctx.fillRect(450, 550, 100, 200);
ctx.fillRect(250, 550, 200, 20);
ctx.fillRect(375, 650, 50, 100);

ctx.moveTo(250, 550);
ctx.lineTo(400, 450);
ctx.lineTo(550, 550);
ctx.fill();
