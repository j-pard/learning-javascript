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
      let activeCards = 0;     
      let validation = []; 
      const cardDuration = 220;

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
                  document.querySelector(`#${this.position}`).setAttribute("secondary-background", this.image);
                  document.querySelector(`#${this.position}`).style.backgroundImage = `url(./assets/img/back.jpg)`;
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

      const resetCards = () => {
            activeCards = 0;
            validation = [];
            POSITIONS.forEach(card => {
                  if(!card.classList.contains("validated")) {
                        card.classList.remove("returned");
                        setTimeout(() => {
                              card.style.backgroundImage = "url('./assets/img/back.jpg')";
                        }, cardDuration);
                  }
            });
      };

      const returnCard =(card) => {
            card.classList.toggle("returned");
            setTimeout(() => {
                  card.style.backgroundImage = `url(${card.getAttribute("secondary-background")}`;
            }, cardDuration);
      }

      genCards();

      POSITIONS.forEach(card => {
            card.addEventListener("click", () => {
                  if(activeCards >= 2) {
                        resetCards();
                  }
                  else {
                        activeCards++;
                        returnCard(card);
                        if(!validation.length) {
                              validation.push(card); 
                              console.log("Was empty and you add : " + validation[0].id);
                        }
                        else if(validation.length > 0) {
                              console.log("Validation contains : " + validation[0].id + " and you want to add : " + card.id)
                              if (validation[0].id != card.id) {
                                    validation.push(card);
                                    console.log(card.id + " was added.");
                                    if (validation[0].textContent == validation[1].textContent) {
                                          console.log("Cards paired, congrats !");
                                          validation[0].classList.add("validated");
                                          validation[1].classList.add("validated");
                                          setTimeout(() => {
                                                resetCards();
                                          }, 1000);
                                    }
                                    else {
                                          console.log("Not paired cards");
                                          setTimeout(() => {
                                                resetCards();
                                          }, 2000);
                                    }
                              } 
                              else {
                                    resetCards();
                              }
                              
                        }
                  }
            });
            
      });

})();