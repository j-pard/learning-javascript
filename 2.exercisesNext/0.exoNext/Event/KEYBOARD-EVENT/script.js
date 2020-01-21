(() => {

      const targets = [
            up = document.getElementById("up"),
            left = document.getElementById("left"),
            central = document.getElementById("center"),
            right = document.getElementById("right"),
            down = document.getElementById("down")
      ];

      const colors = [
            "#f1c40f", "#f39c12", "#e67e22", "#d35400", 
            "#e74c3c", "#c0392b", "#8e44ad", "#9b59b6", 
            "#3498db", "#2980b9"
      ];

      document.addEventListener("keydown", (e) => {
            switch (e.keyCode) {
                  case 48: // 0
                        central.style.backgroundColor = colors[0];
                        break;
                  case 49: // 1
                        central.style.backgroundColor = colors[1];
                        break;
                  case 50: // 2
                        central.style.backgroundColor = colors[2];
                        break;
                  case 51: // 3
                        central.style.backgroundColor = colors[3];
                        break;
                  case 52: // 4
                        central.style.backgroundColor = colors[4];
                        break;
                  case 53: // 5
                        central.style.backgroundColor = colors[5];
                        break;
                  case 54: // 6
                        central.style.backgroundColor = colors[6];
                        break;
                  case 55: // 7
                        central.style.backgroundColor = colors[7];
                        break;
                  case 56: // 8
                        central.style.backgroundColor = colors[8];
                        break;
                  case 57: // 9
                        central.style.backgroundColor = colors[9];
                        break;
                  
                  case 37: // left
                        left.classList.add("highlight");
                        break;
                  case 38: // up
                        up.classList.add("highlight");
                        break;
                  case 39: // right
                        right.classList.add("highlight");
                        break;
                  case 40: // left
                        down.classList.add("highlight");
                        break;
            }
      });

      document.addEventListener("keyup", (e) => {
            switch (e.keyCode) {
                  case 37: // left
                        left.classList.remove("highlight");
                        break;
                  case 38: // up
                        up.classList.remove("highlight");
                        break;
                  case 39: // right
                        right.classList.remove("highlight");
                        break;
                  case 40: // left
                        down.classList.remove("highlight");
                        break;   
            }
      });

})();