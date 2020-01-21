(() => {
      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");
      
      const minX = 0;
      const maxX = 800;
      const minY = 0;
      const maxY = 600;

      let ball = {
            x: 100,
            y: 100,
            vx: 0,
            vy: 5,
            radius: 10,
            color: "gray",
            exist: false,
            draw: function() {
                  ctx.beginPath();
                  ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
                  ctx.closePath();
                  ctx.fillStyle = this.color;
                  ctx.fill();
            },
            update: function() {
                  ctx.beginPath();
                  ctx.arc(this.x += this.vx, this.y += this.vy, this.radius, 0, Math.PI*2, true);
                  ctx.closePath();
                  ctx.fillStyle = this.color;
                  ctx.fill();

                  if (ball.x > maxX || ball.y > maxY) {
                       this.x = 100;
                       this.y = 100; 
                       this.exist = false;
                  }
            }
      };

      const clear = () => {
            ctx.clearRect(minX, minY, maxX, maxY);
            ctx.save();
      };

      const init = () => {
            window.requestAnimationFrame(draw);
      };

      const draw = () => {
            clear();
            document.addEventListener("keydown", (e) => {
                  if(e.keyCode == 32) {
                        ball.draw();
                        ball.exist = true;
                  }
            });
            if (ball.exist) {
                  ball.update();
            }

            window.requestAnimationFrame(draw);
      };

      init();

})();