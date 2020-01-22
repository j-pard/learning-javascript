(() => {

      const actions = document.getElementById("actions");
      const btns = Array.from(document.querySelectorAll("button"));
      const cells = Array.from(document.querySelectorAll("table tr td"));

      const vendor = {
            name: "George",
            title: "Le Généreux",
            age: 40,
            items_to_give: ["Epée en plume", "Bouclier en mousse", "Armure en feuilles"],
            giveItem: function() {

            },
            introduce: function() {
                  for(let key in vendor) {
                        console.log(key + ": " + vendor[key]);
                  }
            },
            giveItems: function() {
                  talk(this.name + " " + this.title + ", vous a offert :");
                  talk(`"${this.items_to_give[Math.floor(Math.random() * (this.items_to_give.length))]}"`);
                  talk("Prenez-en soin !");
                  talk("-");
            }
      }

      const shop = {
            inventory: [
                  {
                        title: "Epée en bois",
                        physic: 10,
                        magic: 0,
                        minLevel: 0,
                        available: true,
                        legend: "Même un bébé pourrait s'en servir !",
                        image: "./assets/img/wooden_sword.jpg"
                  },
                  {
                        title: "Marteau de nain",
                        physic: 20,
                        magic: 0,
                        minLevel: 4,
                        available: true,
                        legend: "La tête d'un nain est plus dure que la roche.",
                        image: "./assets/img/hammer.jpg"
                  },
                  {
                        title: "Baguette en If",
                        physic: 0,
                        magic: 20,
                        minLevel: 7,
                        available: true,
                        legend: "Une jambe de dryade contient toujours un reste de pouvoir.",
                        image: "./assets/img/wand.jpg"
                  },
                  {
                        title: "Lame brisée de Narsil",
                        physic: 30,
                        magic: 0,
                        minLevel: 10,
                        available: true,
                        legend: "Epée brisée par la seule force d'un doigt.",
                        image: "./assets/img/narsil.gif"
                  },
                  {
                        title: "Jambe de Wirt",
                        physic: 30,
                        magic: 30,
                        minLevel: 12,
                        available: false,
                        legend: "Cette jambe appartenait autrefois au prophète Wirt.",
                        image: "./assets/img/leg.jpg"
                  }
            ],
            showAll: function() {
                  this.inventory.forEach(item => {
                        for(let key in item) {
                              talk(key + ": " + item[key]);
                        }
                        talk("-");
                  });
            },
            showAvailable: function() {
                  this.inventory.forEach(item => {
                        if(item.available) {
                              talk(item.title + " est disponible.");
                        }
                  });
                  talk("-");
            }, 
            showSuperior: function() {
                  this.inventory.forEach(item => {
                        if(item.minLevel >= 10) {
                              talk("Seul un vrai héro peut manier " + item.title);
                        }
                  });
                  talk("-");
            },
            putInCase: function() {
                  for(let i = 0; i<cells.length; i++) {
                        cells[i].style.backgroundImage = `url(${this.inventory[i].image})`;
                  }
            }
       };

       const mainCharacter = {
            name: "Wood",
            level: 1,
            life: 100,
            weapon: shop.inventory[0],
            attack: function() {
                  let totalDegats = (this.level * (this.weapon.physic + this.weapon.magic));
                  talk(`${this.name} attaque avec l'arme "${this.weapon.title} et inflige ${totalDegats} de dégats !`);
            }
       };

       const talk = (str) => {
            let p = document.createElement("p");
            if(str == "-") {
                  p.textContent = "----------"; 
            }
            else {
                  p.textContent = str;
            }
            actions.appendChild(p);  
            //Toujours scroll jusqu'au dernier
            let allP = document.querySelectorAll("#actions p");
            let lastP = allP[allP.length-1];
            lastP.scrollIntoView();
       };

       // RUNNING ----------------------------------------------------------------------

      shop.putInCase();

      document.getElementById("giveBtn").addEventListener("click", () => {
            vendor.giveItems();
      });

      btns.forEach(btn => {
            btn.addEventListener("click", () => {
                  switch (btn.id) {
                        case "clear":
                              actions.innerHTML = "";
                              break;
                        case "btnShop1":
                              shop.showAll();
                              break;
                        case "btnShop2":
                              shop.showAvailable();
                              break;
                        case "btnShop3":
                              shop.showSuperior();
                              break;
                        case "attackBtn":
                              mainCharacter.attack();
                  }
            });
      });
})();