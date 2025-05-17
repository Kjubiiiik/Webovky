const canvas = document.getElementById("canvas");

canvas.width = 900;
canvas.height = 900;
document.body.appendChild(canvas);


const ctx = canvas.getContext("2d");

ctx.font = "40px Arial";
ctx.fillStyle = "grey"
ctx.fillText("/24",canvas.width/2-30,30);

ctx.beginPath();
ctx.arc(canvas.width/2, canvas.height/2, 400, 0, 2 * Math.PI);
ctx.stroke();



ctx.lineWidth =7,5;

ctx.save();
ctx.translate(canvas.width/2, canvas.height/2)
ctx.strokeStyle="black";
for (let i = 0; i < 4; i++) {
    ctx.beginPath();
    ctx.moveTo(0,-400);
    ctx.lineTo(0,-300);
    ctx.stroke();
    ctx.rotate(Math.PI/2);
}
ctx.restore();


ctx.save();

ctx.font = "20px Arial";
ctx.fillStyle = "red"
ctx.fillText("/27",canvas.width/7,canvas.height/6);

ctx.translate(canvas.width/2, canvas.height/2)
ctx.strokeStyle="red";
for (let i = 0; i < 8; i++) {
    ctx.beginPath();
    ctx.moveTo(0,-400);
    ctx.lineTo(0,-325);
    if (i != 0 && i != 2 && i !=4 && i !=6) {
        ctx.stroke();
    }

    
    ctx.rotate(Math.PI/4);
}
ctx.restore();

ctx.font = "20px Arial";
ctx.fillStyle = "black"
ctx.fillText("/25",15,canvas.height/2+10);
ctx.save();
ctx.translate(canvas.width/2, canvas.height/2)
ctx.strokeStyle="blue";
for (let i = 0; i < 16; i++) {
    ctx.beginPath();
    ctx.moveTo(0,-400);
    ctx.lineTo(0,-350);
    if (i%2 != 0) {
        ctx.stroke();
    }

    ctx.rotate(Math.PI/8);
}
ctx.restore();

ctx.save();
ctx.translate(canvas.width/2, canvas.height/2)
ctx.strokeStyle="green";
for (let i = 0; i < 32; i++) {
    ctx.beginPath();
    ctx.moveTo(0,-400);
    ctx.lineTo(0,-375);
    if (i%2 != 0) {
        ctx.stroke();
    }

    ctx.rotate(Math.PI/16);
}