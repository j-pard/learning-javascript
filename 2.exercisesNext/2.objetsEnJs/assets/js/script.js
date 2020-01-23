(() => {

      const actions = document.getElementById("actions");
      const btns = Array.from(document.querySelectorAll("button"));
      const attackBtn = document.getElementById("attackBtn");
      const townBtn = document.getElementById("goTown");
      const vendorBtn = document.getElementById("goVendor");
      const shopBtn = document.getElementById("goShop");
      const advBtn = document.getElementById("goAdventure");
      const townBtns = document.getElementById("townBtns");

      const cells = Array.from(document.querySelectorAll("table tr td"));

      const pnjSection = document.getElementById("PNJ");
      const shopSection = document.getElementById("shop");
      const centerSection = document.getElementById("center");
      const advSection = document.getElementById("adventure");

      const adventure = {
            positions: ["forest"],
            current: "forest",
            areIn: false
      };

      const vendor = {
            name: "George",
            title: "Le Généreux",
            age: 40,
            hp: "-",
            maxHp: "-",
            image: "./assets/img/vendor.svg",
            items_to_give: [
                  {
                        title: "Epée en plume",
                        gave: false
                  },
                  {
                        title: "Bouclier en mousse",
                        gave: false
                  },
                  {
                        title: "Armure en feuilles",
                        gave: false
                  }
            ],                   
            consolStuff: function() {
                  for(let key in vendor) {
                        console.log(key + ": " + vendor[key]);
                  }
            },
            giveItems: function() {
                  let item = this.items_to_give[Math.floor(Math.random() * (this.items_to_give.length))];
                  if(!item.gave) {
                        item.gave = true;
                        talk(this.name + " " + this.title + ", vous a offert :");
                        talk(`"${item.title}"`);
                        talk("Prenez-en soin !");
                        talk("-");
                  }
                  else if (this.items_to_give[0].gave == true && this.items_to_give[1].gave == true && this.items_to_give[2].gave == true) {
                        talk("Vous êtes prêt à partir à l'aventure !");
                        talk("-");
                        document.getElementById("giveBtn").disabled = true;
                        advBtn.disabled = false;
                  }
                  else {
                        this.giveItems();
                  }
                  
            },
            introduce: function() {
                  document.getElementById("pnjName").textContent = this.name;
                  document.getElementById("pnjTitle").textContent = this.title;
                  document.getElementById("pnjImg").setAttribute("src", this.image);
                  document.getElementById("pnjHP").textContent = `${this.hp} / ${this.maxHp}`;
            }
      };

      const town = {
            areIn: true,
            current: "vendor",
            availablePositions: ["vendor", "shop", "center"]
      };

      const shop = {
            areIn: false,
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
                              console.log(key + ": " + item[key]);
                        }
                        console.log("-----");
                  });
                  talk("Regarde ta console ...");
                  talk("-");
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
            title: "Petit héro fragile",
            level: 1,
            hp: 100,
            maxHp: 100,
            weapon: shop.inventory[0],
            image: "./assets/img/avatar.svg",
            position: "town",
            attack: function() {
                  let totalDegats = (this.level * (this.weapon.physic + this.weapon.magic));
                  talk(`${this.name} attaque avec l'arme "${this.weapon.title} et inflige ${totalDegats} de dégats !`);
            },
            introduce: function() {
                  document.getElementById("avatarName").textContent = this.name;
                  document.getElementById("avatarTitle").textContent = this.title;
                  document.getElementById("avatarImg").setAttribute("src", this.image);
                  document.getElementById("avatarHP").textContent = `${this.hp} / ${this.maxHp}`;
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

       const showHide = (target, status, array) => {
            if(array) {
                  target.forEach(el => {
                        el.style.display = status;
                  });
            }
            else {
                  target.style.display = status;
            }
       };

       // RUNNING ----------------------------------------------------------------------

      vendor.introduce();
      mainCharacter.introduce();

      //Interractions -----
      btns.forEach(btn => {
            btn.addEventListener("click", () => {
                  switch (btn.id) {
                        case "giveBtn":
                              vendor.giveItems();
                              break;
                        case "clear":
                              actions.innerHTML = "<h3>Historique :</h3>";
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
                              break;
                        case "goTown":
                              town.areIn = true;
                              adventure.areIn = false;
                              shop.areIn = false;
                              vendor.areIn = false;
                              town.current = "center";
                              advBtn.disabled = false;
                              break;
                        case "goVendor":
                              vendor.areIn = true;
                              shop.areIn = false;
                              town.current = "vendor";
                              talk("Au croisement d'une ruelle, vous tombez sur un homme étrange.");
                              talk("-");
                              break;
                        case "goShop":
                              vendor.areIn = false;
                              shop.areIn = true;
                              
                              shop.putInCase();
                              town.current = "shop";
                              talk("Vous poussez les portes de l'échoppe.");
                              talk("-");
                              break;
                        case "goAdventure":
                              town.areIn = false;
                              adventure.areIn = true;
                              talk("Vous partez à l'aventure !");
                              talk("-");
                              break;
                  }

            //Positions -----
            if(town.areIn && !adventure.areIn) {
                  showHide(townBtns, "block", false);
                  showHide(pnjSection, "none", false);
                  showHide(shopSection, "none", false);
                  showHide(centerSection, "none", false);
                  showHide(advSection, "none", false);
                  townBtn.textContent = "Bienvenue en ville";
                  townBtn.disabled = true;
                  vendorBtn.disabled = false;
                  shopBtn.disabled = false; 
                  attackBtn.disabled = false;
                  
                  if (town.current == "vendor") {
                        showHide(pnjSection, "flex", false);
                        showHide(shopSection, "none", false);
                        showHide(centerSection, "none", false); 
                        vendorBtn.disabled = true;
                        shopBtn.disabled = false;
                        attackBtn.disabled = true;   
                  }
                  else if (town.current == "shop") {
                        showHide(pnjSection, "none", false);
                        showHide(shopSection, "flex", false);
                        showHide(centerSection, "none", false);
                        vendorBtn.disabled = false;
                        shopBtn.disabled = true;
                        attackBtn.disabled = true;
                  }
                  else if (town.current == "center") {
                        showHide(pnjSection, "none", false);
                        showHide(shopSection, "none", false);
                        showHide(centerSection, "flex", false);
                        vendorBtn.disabled = false;
                        shopBtn.disabled = false;
                        attackBtn.disabled = true;
                  }
            }
            else if(!town.areIn && adventure.areIn) {
                  showHide(townBtns, "none", false);
                  showHide(pnjSection, "none", false);
                  showHide(shopSection, "none", false);
                  showHide(centerSection, "none", false);
                  showHide(advSection, "block", false);
                  townBtn.textContent = "Fuir comme un lâche !";
                  townBtn.disabled = false;
                  advBtn.disabled = true;
                  attackBtn.disabled = false;
            }
            });
      });

      //Effets supplémentaires -----
            //Survol des items du shop
      cells.forEach(cell =>
            cell.addEventListener("mouseover", () => {
                  cell.setAttribute("title",`${shop.inventory[cells.indexOf(cell)].title}`);
                  cell.addEventListener("click", () => {
                        talk(`${shop.inventory[cells.indexOf(cell)].title} -- ${shop.inventory[cells.indexOf(cell)].available ? "disponible" : "non disponible"}`);
                        talk(`Dégats physiques: ${shop.inventory[cells.indexOf(cell)].physic}, Dégats magiques: ${shop.inventory[cells.indexOf(cell)].magic}`);
                        talk(`Niveau minimum: ${shop.inventory[cells.indexOf(cell)].minLevel}`);
                        talk("-");
                  })
      }));      
      
})();