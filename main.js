canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d"); 

ctx.beginPath();
ctx.strokeStyle= "red";
ctx.lineWidth=4;
ctx.arc(300, 200, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "green";
ctx.lineWidth=4;
ctx.arc(400, 200, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "blue";
ctx.lineWidth=4;
ctx.arc(500, 200, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "yellow";
ctx.lineWidth=4;
ctx.arc(350, 250, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "black";
ctx.lineWidth=4;
ctx.arc(450, 250, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "purple";
ctx.lineWidth=4;
ctx.rect(200, 120, 400, 200);
ctx.stroke();