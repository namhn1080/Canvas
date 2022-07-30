let draw = document.getElementById("myCanvas");
let pen = draw.getContext("2d");
const width = draw.width;
const height = draw.height;
let ballPost1 = 0;
let ballPost2 = 0;
let ballPost3 = 0;
const fps = 60;
let startFrameTime = Date.now();
function gameloop() {
    pen.clearRect(0, 0, width, height);

    //face
    pen.beginPath();
    pen.arc(width / 2, height / 2, 200, 0, Math.PI * 2)
    pen.stroke();
    pen.fillStyle = "#f8d108"
    pen.fill();
    // line eyes
    pen.beginPath();
    pen.moveTo(width / 2 + 198, height / 2 - 30);
    pen.lineTo(width / 2 - 198, height / 2 - 30);
    pen.stroke();

    pen.beginPath();
    pen.moveTo(width / 2 + 195, height / 2 + 50);
    pen.lineTo(width / 2 - 195, height / 2 + 50);
    pen.stroke();



    var grd = pen.createRadialGradient(100, 50, 5, 90, 60, 100);
    grd.addColorStop(0, "black");
    grd.addColorStop(1, "black");

    // Fill with gradient
    pen.fillStyle = grd;
    pen.fillRect(width / 2 + 120, height / 2 - 30, 80, 80);

    var grd = pen.createRadialGradient(100, 50, 5, 90, 60, 100);
    grd.addColorStop(0, "black");
    grd.addColorStop(1, "black");

    // Fill with gradient
    pen.fillStyle = grd;
    pen.fillRect(width / 2 - 200, height / 2 - 30, 80, 80);

    var grd = pen.createRadialGradient(100, 50, 5, 90, 60, 100);
    grd.addColorStop(0, "black");
    grd.addColorStop(1, "black");

    // Fill with gradient
    pen.fillStyle = grd;
    pen.fillRect(width / 2 - 20, height / 2 - 30, 80, 80);

    //eyes



    pen.beginPath();
    pen.arc(width / 2 - 71, height / 2, 70, 0, Math.PI * 2)
    pen.stroke();
    pen.fillStyle = "#707272"
    pen.fill();


    pen.beginPath();
    pen.arc(width / 2 + 71, height / 2, 70, 0, Math.PI * 2)
    pen.stroke();
    pen.fillStyle = "#707272"
    pen.fill();


    //bentrongmat

    pen.beginPath();
    pen.arc(width / 2 + 70, height / 2, 58, 0, Math.PI * 2)
    pen.stroke();
    pen.fillStyle = "#fbfdf7"
    pen.fill();



    pen.beginPath();
    pen.arc(width / 2 - 70, height / 2, 58, 0, Math.PI * 2)
    pen.stroke();
    pen.fillStyle = "#fbfdf7"
    pen.fill();

    //trongmat


    pen.beginPath();
    pen.arc(width / 2 + 70, height / 2, 35, 0, Math.PI * 2)
    pen.stroke();
    pen.fillStyle = "#563211"
    pen.fill();


    pen.beginPath();
    pen.arc(width / 2 - 70, height / 2, 35, 0, Math.PI * 2)
    pen.stroke();
    pen.fillStyle = "#563211"
    pen.fill();

    //trongmatthu2

    pen.beginPath();
    pen.arc(width / 2 + 70, height / 2, ballPost1, 0, Math.PI * 2)
    pen.stroke();
    pen.fillStyle = "#060807"
    pen.fill();



    pen.beginPath();
    pen.arc(width / 2 - 70, height / 2, ballPost1, 0, Math.PI * 2)
    pen.stroke();
    pen.fillStyle = "#060807"
    pen.fill();

    //bongcuamat
    pen.beginPath()
    pen.arc(width / 2 + 55, height / 2 - 15, ballPost2, 0, Math.PI * 2)
    pen.stroke();
    pen.fillStyle = "#f8f7f9"
    pen.fill();

    pen.beginPath()
    pen.arc(width / 2 - 80, height / 2 - 15, ballPost2, 0, Math.PI * 2)
    pen.stroke();
    pen.fillStyle = "#f8f7f9"
    pen.fill();


    pen.beginPath();
    pen.moveTo(width / 2, height / 2 - 240);
    pen.lineTo(width / 2, height / 2 - 180);
    pen.stroke();

    pen.beginPath();
    pen.moveTo(width / 2 - 5, height / 2 - 240);
    pen.lineTo(width / 2 - 5, height / 2 - 170);
    pen.stroke();

    pen.beginPath();
    pen.moveTo(width / 2 + 5, height / 2 - 210);
    pen.lineTo(width / 2 + 5, height / 2 - 170);
    pen.stroke();

    pen.beginPath();
    pen.moveTo(width / 2 + 10, height / 2 - 230);
    pen.lineTo(width / 2 + 10, height / 2 - 170);
    pen.stroke();

    pen.beginPath();
    pen.moveTo(width / 2 + 15, height / 2 - 230);
    pen.lineTo(width / 2 + 10, height / 2 - 170);
    pen.stroke();

    pen.beginPath();
    pen.moveTo(width / 2 - 10, height / 2 - 230);
    pen.lineTo(width / 2 - 5, height / 2 - 170);
    pen.stroke();

    pen.beginPath();
    pen.moveTo(width / 2 - 15, height / 2 - 230);
    pen.lineTo(width / 2 - 10, height / 2 - 170);
    pen.stroke();

    pen.beginPath();
    pen.moveTo(width / 2 - 20, height / 2 - 230);
    pen.lineTo(width / 2 - 10, height / 2 - 170);
    pen.stroke();

    pen.beginPath();
    pen.moveTo(width / 2 - 25, height / 2 - 230);
    pen.lineTo(width / 2 - 15, height / 2 - 170);
    pen.stroke();

    pen.beginPath();
    pen.moveTo(width / 2 + 20, height / 2 - 230);
    pen.lineTo(width / 2 + 15, height / 2 - 170);
    pen.stroke();

    pen.beginPath();
    pen.moveTo(width / 2 + 25, height / 2 - 230);
    pen.lineTo(width / 2 + 15, height / 2 - 170);
    pen.stroke();



    //
    // Create gradient
    if (ballPost3 >= 100) {
        pen.beginPath();
        pen.arc(width / 2 - 71, height / 2, 70, Math.PI * 1, Math.PI * 2)
        pen.stroke();
        pen.fillStyle = "#f8d108"
        pen.fill();


        pen.beginPath();
        pen.arc(width / 2 + 71, height / 2, 70, Math.PI * 1, Math.PI * 2)
        pen.stroke();
        pen.fillStyle = "#f8d108"
        pen.fill();
    }else{
        ballPost3++;
    }
   


    if (ballPost1 >= 0) {
        ballPost1 += 5
    }
    if (ballPost1 == 30) {
        ballPost1 -= 30
    }


    if (ballPost2 >= 0) {
        ballPost2 += 1
    }
    if (ballPost2 == 5) {
        ballPost2 -= 5
    }
    let currentFrameTime = Date.now();
    let deltaTime = currentFrameTime - startFrameTime;
    let actualFPS = parseInt(1000 / deltaTime);
    pen.beginPath();
    pen.fillStyle = "black";
    pen.font = "10pt Arial";
    pen.fillText("FPS: " + actualFPS, 30, 30);
    startFrameTime = currentFrameTime;




}


setInterval(gameloop, 1000 / fps)



