(() => {
      const start = document.getElementById("start");
      const timer = document.getElementById("timer");
      const counter = document.getElementById("count");

      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");
      ctx.lineCap = "round";

      let play = false;
      let playInterval;
      let touched = 0;
      
      const minX = 0;
      const maxX = 800;
      const minY = 0;
      const maxY = 600;
      const ballInitY = maxY - 100;

      const boatWidth = 150;
      const boatHeight = 60;

      let boatX = (maxX-boatWidth)/2;
      let boatY = (maxY-boatHeight)-10;
      const vx = 8;

      let ballExist = false;
      let ballX = boatX + boatWidth/2;
      let ballY = ballInitY;
      let ballInt;

      const enemySize = 20;
      const enemyMinX = minX + (boatWidth/2) + 5;
      const enemyMaxX = maxX - (boatWidth/2) - 5;
      const enemyMinY = minY + 2*enemySize;
      const enemyMaxY = (maxY/3) - enemySize;
      let enemyExist = false;
      let enemyPosition = [];

      const drawBoat = (x, y) => {

            // Shell
            ctx.beginPath();
            ctx.moveTo(x,y);
            ctx.lineTo(x+20,y-20);
            ctx.lineTo(x+130,y-20);
            ctx.lineTo(x+150,y);
            ctx.lineTo(x+130,y+20);
            ctx.lineTo(x+20,y+20);
            ctx.lineTo(x,y);
            ctx.fillStyle = "peru";
            ctx.strokeStyle = "sienna"; // Line color
            ctx.lineWidth = 5; 
            ctx.fill();             // In
            ctx.stroke();          // Ext

            // Masts
            ctx.beginPath();
            ctx.moveTo(x+50,y+30);
            ctx.lineTo(x+50,y-30);
            ctx.moveTo(x+100,y+30);
            ctx.lineTo(x+100,y-30);
            ctx.lineWidth = 10;
            ctx.stroke();
      }

      const ballDraw = (x, y) => {
            ballX = boatX + boatWidth/2;
            ctx.beginPath();
            ctx.arc(x, y, 5, 0, Math.PI*2, true);
            ctx.closePath();
            ctx.fillStyle = "red";
            ctx.fill();
            ballExist = true;
      }

      const ballUpdate = () => {
            clear();
            drawBoat(boatX, boatY);
            ctx.beginPath();
            ctx.arc(ballX, ballY-=3, 5, 0, Math.PI*2, true);
            ctx.closePath();
            ctx.fillStyle = "red";
            ctx.fill();
            if (ballY >= maxY || ballY <= minY) {
                  reArm();
                  clear();
                  drawBoat(boatX, boatY);
            }
            checkCollision();
      }

      const drawEnemy = () => {
            if(!enemyExist) {
                  enemyPosition[0] = Math.floor(Math.random() * (enemyMaxX - enemyMinX) + enemyMinX);
                  enemyPosition[1] = Math.floor(Math.random() * (enemyMaxY - enemyMinY) + enemyMinY);
            }

            let x = enemyPosition[0];
            let y = enemyPosition[1];
            ctx.beginPath();
            ctx.arc(x, y, enemySize, 0, Math.PI*2, true);
            ctx.closePath();
            ctx.strokeStyle = "gray";
            ctx.lineWidth = 5; 
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(x-10, y);
            ctx.lineTo(x+10, y);
            ctx.moveTo(x, y-10);
            ctx.lineTo(x, y+10);
            ctx.closePath();
            ctx.strokeStyle = "orange";
            ctx.lineWidth = 5; 
            ctx.stroke();
            enemyExist = true;
            return enemyPosition = [x, y];            
      }

      const clear = () => {
            ctx.fillStyle = "lightblue";
            ctx.fillRect(minX, minY, maxX, maxY);
            drawEnemy();
      }

      const reArm = () => {
            ballY = ballInitY;
            ballExist = false;
            clearInterval(ballInt);
            
      }

      const checkCollision = () => {
            let zoneMaxX = enemyPosition[0]+enemySize;
            let zoneMinX = enemyPosition[0]-enemySize;
            let zoneY = enemyPosition[1]+enemySize;
            if(ballX <= zoneMaxX && ballX >= zoneMinX && ballY <= zoneY) {
                  console.log("Touché !");
                  reArm();
                  enemyExist = false;
                  clear();
                  drawBoat(boatX, boatY);
                  touched++;
                  setScore();
            }
      }

      const setScore = (arg) => {
            if(arg == 0) {
                  touched = 0;
                  counter.textContent = 0;
            }
            else {
                  counter.textContent = touched;
            }
      }

      const init = () => {
            play = true;
            let ms = 0;
            let sec = 0;
            let min = 0;
            setInterval(() => {
                  ms+=10;
                  if(ms == 100) {
                        ms = 0;
                        sec++;
                  }
                  if(sec == 60) {
                        sec = 0;
                        min++;
                  }
                  timer.textContent = min + ":" + sec + ":" + ms;
            }, 100);
            setScore(0);
            clear();
            drawBoat(boatX, boatY);
            drawEnemy(enemyPosition[0], enemyPosition[1]);
      }
      // --------------------------------------------
      // RUNNING

      start.addEventListener("click", () => {
            init();
            start.blur();
      })

      document.addEventListener("keydown", (e) => {
            if(play == true) {
                  if(e.key == "ArrowLeft" || e.key == "ArrowRight") {
                        clear();
                        if(e.key == "ArrowLeft") {
                              boatX -= vx;
                              drawBoat(boatX, boatY);
                        }
                        else if(e.key == "ArrowRight") {
                              boatX += vx;
                              drawBoat(boatX, boatY);
                        }
                        //Limits
                        if(boatX <= minX) {
                              boatX = minX+5;
                        }
                        else if(boatX >= maxX-boatWidth) {
                              boatX = maxX-boatWidth-5;
                        }
                  }
                  if(e.key == " " && !ballExist) {
                        ballDraw(boatX + (boatWidth/2), ballY);
                              ballInt = setInterval(() => {
                                    ballUpdate();
                              }, 5);   
                  }

                  if(touched >= 10) {
                        if(confirm("Victoire ! Voulez-vous rejouer ?")) {
                              document.location.reload();
                        }
                  }
      
            }
            else {

            }
      });
})();