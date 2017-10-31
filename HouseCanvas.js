let btnClear = document.getElementById('btnClear');

let canvas = document.getElementById('canvas'); 
let ctx= canvas.getContext("2d");

if (ctx) {
    btnClear.addEventListener('click', clear); 
    draw(); 
} 

function draw() {
    ctx.fillStyle = "blue"; //yellow rectangle that fills canvas 
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
    
    ctx.fillStyle = "rgba(0, 255, 0, 0.5)";
    ctx.fillRect(0, 300, 750, 550);
    
    ctx.fillStyle = "red";
    ctx.fillRect(50, 200, 225, 200);
    
    ctx.fillStyle = "purple";
    ctx.fillRect(70, 275, 80, 125);
    
    ctx.strokeStyle = "black";
    ctx.lineWidth = "4";
    ctx.strokeRect(175, 260, 80, 75);
    
    ctx.fillStyle = "white";
    ctx.fillRect(175, 260, 80, 75);
    
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = "4";
    
    ctx.moveTo(175, 295);
    ctx.lineTo(255, 295);
    ctx.moveTo(215, 260);
    ctx.lineTo(215, 335);
    ctx.stroke();
    ctx.closePath();
    
    ctx.strokeStyle = "black";
    ctx.fillStyle = "brown";
    ctx.lineWidth = "4";    
    
    ctx.beginPath();
    ctx.moveTo(170, 90);
    ctx.lineTo(30, 200);
    ctx.lineTo(290, 200);
    ctx.lineTo(170, 90);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    ctx.fillStyle = "darkBrown";
    ctx.fillRect(500, 150, 100, 250);
    
    ctx.beginPath();
    ctx.fillStyle = "green"; 
    ctx.strokeStyle = "green";
    ctx.arc(490, 110, 50, 0, Math.PI * 2);
    ctx.fill(); 
    ctx.stroke();
    
    ctx.beginPath();
    ctx.fillStyle = "green"; 
    ctx.strokeStyle = "green";
    ctx.arc(520, 160, 50, 0, Math.PI * 2); 
    ctx.fill(); 
    ctx.stroke();
    
    ctx.beginPath();
    ctx.fillStyle = "green"; 
    ctx.strokeStyle = "green";
    ctx.arc(590, 165, 50, 0, Math.PI * 2);
    ctx.fill(); 
    ctx.stroke();
    
    ctx.beginPath();
    ctx.fillStyle = "green"; 
    ctx.strokeStyle = "green";
    ctx.arc(600, 110, 50, 0, Math.PI * 2);
    ctx.fill(); 
    ctx.stroke();
    
    ctx.beginPath();
    ctx.fillStyle = "green"; 
    ctx.strokeStyle = "green";
    ctx.arc(550, 70, 50, 0, Math.PI * 2);
    ctx.fill(); 
    ctx.stroke();
    
    ctx.beginPath();
    ctx.fillStyle = "white"; 
    ctx.strokeStyle = "white";
    ctx.arc(350, 70, 40, 0, Math.PI * 2); 
    ctx.fill(); 
    ctx.stroke();
    
    ctx.beginPath();
    ctx.fillStyle = "white"; 
    ctx.strokeStyle = "white";
    ctx.arc(300, 80, 40, 0, Math.PI * 2);  
    ctx.fill(); 
    ctx.stroke();
    
    ctx.beginPath();
    ctx.fillStyle = "white"; 
    ctx.strokeStyle = "white";
    ctx.arc(400, 65, 40, 0, Math.PI * 2);
    ctx.fill(); 
    ctx.stroke();
    
    ctx.stroke();
    
    
} 

function clear() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}