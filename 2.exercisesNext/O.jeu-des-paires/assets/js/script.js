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

      const CHAT = document.getElementById("chat");
      const REPLAYBTN = document.getElementById("replayBtn");
      const COUNTCLICK = document.getElementById("countClick");
      const CHRONO = document.getElementById("chrono");

      let usedPositions = [];
      let activeCards = 0;     
      let validation = []; 
      const cardDuration = 220;
      let validated = [];
      let countClick = 0;

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
            REPLAYBTN.style.visibility = "hidden";
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
      };

      const clickCounter = () => {
            countClick++;
            COUNTCLICK.textContent = countClick;
      };

      // Chrono
      let chronoID = 0;
      let chronoStarted = false;

      const chrono = () => {
            chronoStarted = true;
            let sec = 0;
            let min = 0;
            let hr = 0;
            chronoID = setInterval(() => {
                  sec++;
                  if(sec >= 60) {
                        sec = 0;
                        min++;
                  }
                  if(min >= 60) {
                        min = 0;
                        hr++;
                  }
                  if(sec < 10)
                        sec = "0" + sec;
                  if(min < 10) 
                        min = "0" + parseInt(min);
                  CHRONO.textContent = hr  + ":" + min + ":" + sec;
            }, 1000);
      };
        
      // RUNNING 

      genCards();
      POSITIONS.forEach(card => {
            card.addEventListener("click", () => {
                  if(!chronoStarted) {
                        chrono();
                  }
                  if(activeCards >= 2) {
                        resetCards();
                  }
                  else {
                        clickCounter();
                        activeCards++;
                        returnCard(card);
                        if(!validation.length) {
                              validation.push(card); 
                        }
                        else if(validation.length > 0) {
                              if (validation[0].id != card.id) {
                                    validation.push(card);
                                    if (validation[0].textContent == validation[1].textContent) {
                                          CHAT.textContent = "Félicitations, vous avez trouvé une paire !";
                                          validation[0].classList.add("validated");
                                          validation[1].classList.add("validated");
                                          validated.push(validation[0], validation[1]);
                                          setTimeout(() => {
                                                resetCards();
                                          }, 1000);
                                          setTimeout(() => {
                                                CHAT.textContent = "";
                                          }, 3000);

                                          if(validated.length == POSITIONS.length) {
                                                REPLAYBTN.style.visibility = "visible";
                                                clearInterval(chronoID);
                                                setTimeout(() => { //Timeout is present here to prevent erase him by previous textContent
                                                      CHAT.textContent = "Vous avez gagné !";
                                                }, 3000);
                                                REPLAYBTN.addEventListener("click", () => {
                                                      window.location.reload();
                                                })
                                          }
                                    }
                                    else {
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