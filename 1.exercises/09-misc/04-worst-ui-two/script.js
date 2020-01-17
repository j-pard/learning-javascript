/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
      /*
      const buttons = [
            btn1 = document.getElementById("part-one"),
            btn2 = document.getElementById("part-two"),
            btn3 = document.getElementById("part-three"),
            btn4 = document.getElementById("part-four")
      ]

      const values = [
            btn1.getAttribute("data-min"),
            btn2.getAttribute("data-min"),
            btn3.getAttribute("data-min"),
            btn4.getAttribute("data-min")
      ]

      const target = document.getElementById("target");

      for(let i = 0; i<buttons.length; i++) {
            buttons[i].addEventListener("click", () => {
                  values[i]++;
                  if (values[i] > buttons[i].getAttribute("data-max")) {
                        values[i] = buttons[i].getAttribute("data-min");
                  }
      
                  if (i>0 && values[i] <10) {
                        values[i] = "0" + values[i];
                  }

                  buttons[i].textContent = values[i];
                  target.textContent = "+"+ values[0] + values[1] + values[2] + values[3];
            });
      } */

      // ----------------------------------- V2

      /*const buttons = [
            {
                  id: document.getElementById("part-one"),
                  value: document.getElementById("part-one").getAttribute("data-min")
            },
            {
                  id: document.getElementById("part-two"),
                  value: document.getElementById("part-two").getAttribute("data-min")
            },
            {
                  id: document.getElementById("part-three"),
                  value: document.getElementById("part-three").getAttribute("data-min")
            },
            {
                  id: document.getElementById("part-four"),
                  value: document.getElementById("part-four").getAttribute("data-min")
            }
      ]

      buttons.forEach(btn => btn.id.addEventListener("click", () => {
            btn.value++;
            if (btn.value > btn.id.getAttribute("data-max")) {
                  btn.value = btn.id.getAttribute("data-min");
            }

            if (btn.value >= 0 && btn.value <10) {
                  btn.value = "0" + btn.value;
            }

            btn.id.textContent = btn.value;
            target.textContent = "+" + buttons[0].value + buttons[1].value + buttons[2].value + buttons[3].value;
      })
            
      );
      */
     // ----------------------------------- V3 (Thanks Ludo pour les conseils !)

      let initBtn = (arg) => {
            let id = document.getElementById("part-" + arg);
            let value = document.getElementById("part-" + arg).getAttribute("data-min")            
            return {id: id, value: value}
      }

      const buttons = [
            initBtn("one"),
            initBtn("two"),
            initBtn("three"),
            initBtn("four")
      ]

      buttons.forEach(btn => btn.id.addEventListener("click", () => {
            btn.value++;
            if (btn.value > btn.id.getAttribute("data-max")) {
                  btn.value = btn.id.getAttribute("data-min");
            }

            if (btn.value >= 0 && btn.value <10) {
                  btn.value = "0" + btn.value;
            }

            btn.id.textContent = btn.value;
            target.textContent = "+" + buttons[0].value + buttons[1].value + buttons[2].value + buttons[3].value;
            })
            
      );

      // ----------------------------------- V4
      // Boucler la fonction initBtn en fonction du nombre d'élements HTML
})();
