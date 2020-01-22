(() => {
      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");
      
      const minX = 0;
      const maxX = 800;
      const minY = 0;
      const maxY = 600;

      const baseWidth = 100;
      const baseHeight = 30;

      let base = {
            width: baseWidth,
            height: baseHeight,
            x: (maxX - baseWidth)/2,
            y: (maxY - (baseHeight + 20)),
            vx : 0.025,
            vy: 0,
            color: "gray",
            draw: function() {
                  ctx.fillStyle = this.color,
                  ctx.fillRect(this.x, this.y, this.width, this.height);
            },
            move: function(direction) {
                  clear("base");
                  if(direction == 37) { //LEFT
                        this.x -= this.vx;
                        this.draw();
                  }
                  else if(direction == 39) { //RIGHT
                        this.x += this.vx;
                        this.draw()
                  }

                  //LIMITS
                  if (this.x < minX) {
                        this.x = minX;
                  }
                  else if (this.x > (maxX - this.width)) {
                        this.x = (maxX - this.width);
                  }
            },

      };

      let ball = {
            x: base.x + (base.width/2),
            y: base.y - 30,
            vx: 0,
            vy: -15,
            radius: 10,
            color: "red",
            exist: false,
            draw: function() {
                  ctx.beginPath();
                  ctx.arc(staticX, this.y, this.radius, 0, Math.PI*2, true);
                  ctx.closePath();
                  ctx.fillStyle = this.color;
                  ctx.fill();
            },
            update: function() {
                  ctx.beginPath();
                  ctx.arc(staticX, this.y += this.vy, this.radius, 0, Math.PI*2, true);
                  ctx.closePath();
                  ctx.fillStyle = this.color;
                  ctx.fill();

                  if (ball.x > maxX || ball.y > maxY || ball.x < minX || ball.y < minY) {
                       this.x = base.x + baseWidth/2;
                       this.y = maxY - 50; 
                       this.exist = false;
                  }
            }
      }; 

      let checkPosition = () => {
            return base.x + base.width/2;
      };

      const clear = (zone) => {
            ctx.fillStyle = "white";
            if(zone == "base") {
                  ctx.fillRect(base.x - 100, base.y, base.x + base.width + 100, base.y + base.height);
            }
            else {
                  ctx.fillRect(minX, minY, maxX, maxY);
            }

      };

      base.draw();
      setInterval(() => {
            clear();
            base.draw();
            // Interractions
            document.addEventListener("keydown", (e) => {
                  if(e.keyCode == 37 || e.keyCode == 39) {
                        base.move(e.keyCode);
                  }
                  if(e.keyCode == 32 && !ball.exist) { //FIRE
                        staticX = checkPosition();
                        ball.draw();
                        ball.exist = true;
                  }
            });
            if (ball.exist) {
                  ball.update();
            }
      }, 20);

})();