(() => {
      const POSITIONS = [
            CARD1 = document.getElementById("card1"),
            CARD2 = document.getElementById("card2"),
            CARD3 = document.getElementById("card3"),
            CARD4 = document.getElementById("card4"),
            CARD5 = document.getElementById("card5"),
            CARD6 = document.getElementById("card6"),
            CARD7 = document.getElementById("card7"),
            CARD8 = document.getElementById("card8"),
            CARD9 = document.getElementById("card9"),
            CARD10 = document.getElementById("card10"),
            CARD11 = document.getElementById("card11"),
            CARD12 = document.getElementById("card12"),
            CARD13 = document.getElementById("card13"),
            CARD14 = document.getElementById("card14")
      ];

      let usedPositions = [];
      

      const MODELS = [
            {
                  name: "Ane Hihan",
                  image: "./assets/img/anehihan.jpg"
            },
            {
                  name: "Chat Minou",
                  image: "./assets/img/chatminou.jpg"
            },
            {
                  name: "Chien Toutou",
                  image: "./assets/img/chientoutou.jpg"
            },
            {
                  name: "Lama Crachat",
                  image: "./assets/img/lamacrachat.jpg"
            },
            {
                  name: "Lapins Crottes",
                  image: "./assets/img/lapinscrottes.jpg"
            },
            {
                  name: "Lionne Graou",
                  image: "./assets/img/lionnegraou.jpg"
            },
            {
                  name: "Baby Ours",
                  image: "./assets/img/oursbaby.jpg"
            }
      ];

      class Cards {
            constructor(name, image, position) {
                  this.name = name;
                  this.image = image;
                  this.position = position;
            }

            init() {
                  document.querySelector(`#${this.position} h3`).textContent = this.name;
                  document.querySelector(`#${this.position}`).style.backgroundImage = `url(${this.image})`;
            }
      };

      const genPosition = () => {
            let index = Math.floor(Math.random() * POSITIONS.length);
            if(usedPositions.includes(index)) {
                  return genPosition();
            }
            else if(!usedPositions.includes(index)) {
                  usedPositions.push(index);
                  return index;
            }
      };

      const genCards = () => {
            let j = 0;
            for(let i=0; i<POSITIONS.length; i++) {
                  if (i >= MODELS.length) {
                        let card = new Cards(MODELS[j].name, MODELS[j].image, POSITIONS[genPosition()].id);
                        card.init();
                        j++;
                  }
                  else {
                        let card = new Cards(MODELS[i].name, MODELS[i].image, POSITIONS[genPosition()].id);
                        card.init();
                  }
            }
      };

      genCards();


      // DEBUG
      document.getElementById("RUN").addEventListener("click", () => {
            
      });
})();