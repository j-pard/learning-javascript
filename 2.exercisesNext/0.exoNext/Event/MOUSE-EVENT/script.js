(() => {

      const primaryColor = "white";
      const secondaryColor = "aqua";
      const body = document.getElementById("body");
      const cards = Array.from(document.getElementsByClassName("hoverMe"));
      const cursorX = document.getElementById("cursorX");
      const cursorY = document.getElementById("cursorY");
      
      body.style.backgroundColor = primaryColor;

      cards.forEach(card => {
            card.addEventListener("mouseover", () => {
                  card.style.backgroundColor = primaryColor;
            });
      });
      
      document.getElementById("reset").addEventListener("click", () => {
            cards.forEach(card => {
                  card.style.backgroundColor = secondaryColor;
            });
      });

      document.addEventListener("mousemove", (event) => {
            cursorX.textContent = `X: ${event.clientX}`;
            cursorY.textContent = `Y: ${event.clientY}`;
      });
      
})();