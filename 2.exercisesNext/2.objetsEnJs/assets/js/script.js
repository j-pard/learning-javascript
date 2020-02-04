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
      const mobSection = document.getElementById("MOBS");

      const adventure = {
            positions: ["forest"],
            current: "forest",
            areIn: false
      };

      let mob = {};

      const vendor = {
            name: "George",
            title: "Le Généreux",
            age: 40,
            image: "./assets/img/vendor.svg",
            items_to_give: [
                  {
                        title: "Epée en bois",
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
                        available: false,
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

       let mainCharacter = {
            name: "Wood",
            title: "Petit héro fragile",
            level: 1,
            hp: 100,
            maxHp: 100,
            weapon: shop.inventory[0],
            image: "./assets/img/avatar.svg",
            position: "town",
            attack: function() {
                  let dice = (Math.floor(Math.random() * 11) + 1);
                  let totalDegats = 0;
                  if (dice == 10) {
                        let date = new Date;
                        let hours = date.getHours();
                        let mins = date.getMinutes();
                        if (mins < 10) {
                              mins = "0" + mins
                        }
                        talk("Attaque secrète : KELLER !!");
                        talk("Wood absorbe l'espace temps et le renvoie sous forme d'énergie pure :");
                        talk(`L'instant exacte ${hours}H${mins} disparaît de l'histoire.`);
                        totalDegats = parseInt(hours.toString() + mins.toString());
                        talk(`L'ennemi subit ${totalDegats} de dégats temporels.`);
                        talk("-");
                        
                  }
                  else {
                        totalDegats = (this.level * (this.weapon.physic + this.weapon.magic));
                        talk(`${this.name} attaque avec l'arme "${this.weapon.title} et inflige ${totalDegats} de dégats !`);
                        talk("-");
                  }
                  return totalDegats;
            },
            introduce: function() {
                  document.getElementById("avatarName").textContent = this.name;
                  document.getElementById("avatarTitle").textContent = this.title;
                  document.getElementById("avatarImg").setAttribute("src", this.image);
                  document.getElementById("avatarHP").textContent = `${this.hp} / ${this.maxHp}`;
            }
       };

       class Mobs {
            constructor(adjust) { //Adjust est un nombre aléatoire -1, 0, 1 pour ajuste aléatoirement le niveau du mob
                  this.level = parseInt(mainCharacter.level + adjust);
                  this.degats = parseInt(this.level * 10);
                  if(this.degats == 0) {
                        this.degats = 5;
                  }
                  this.maxHp = parseInt(50 + (this.level * 10));
                  this.hp = this.maxHp;

                  if(adjust < 0) {
                        this.name = "Gobelin";
                        this.image = "./assets/img/goblin.png";
                  }
                  else if(adjust > 0) {
                        this.name = "Troll";
                        this.image = "./assets/img/troll.png";
                  }
                  else {
                        this.name = "Orc";
                        this.image = "./assets/img/orc.png";
                  }
            };
            introduce() {
                  document.getElementById("mobName").textContent = this.name;
                  document.getElementById("mobLvl").textContent = `Lvl: ${this.level}`;
                  document.getElementById("mobImg").setAttribute("src", this.image);
                  document.getElementById("mobHp").textContent = `${this.hp} / ${this.maxHp}`;
            }
            attack() {
                  if(this.hp > 0) {
                        talk(`${this.name} attaque le héro et inflige ${this.degats} de dégats !`);
                        talk("-");
                        return this.degats;
                  }
                  else {
                        this.degats = 0;
                        return 0;
                  }
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
            //Always scroll down
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

       const mobGen = () => {
            let adjust = Math.floor(Math.random() * 3);
            adjust -= 1;
            let newMob = new Mobs(adjust);
            newMob.introduce();
            return newMob;
       };

       let startFight = () => {  
            if(mainCharacter.hp > 0) {
                  mob = mobGen();

                  attackBtn.addEventListener("click", () => {
                        mob.hp -= mainCharacter.attack();
                        mob.introduce();
                        mainCharacter.hp -= mob.attack();
                        mainCharacter.introduce();
                        
                        if(mainCharacter.hp > 0 && mob.hp <= 0) {
                              talk("Vous êtes venu à bout du monstre !");
                              talk("Mais combien sont-ils ?! Un nouveau monstre surgit devant vous !");
                              startFight();
                        }
                        else if (mainCharacter.hp <= 0 && mob.hp > 0) {
                              talk("Visiblement, vous n'étiez pas à la hauteur.")
                              talk("-");
                              talk("SHAME ON YOU");
                              town.areIn = true;
                              adventure.areIn = false;
                        } 
                  });
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
                        case "goTown":
                              town.areIn = true;
                              adventure.areIn = false;
                              shop.areIn = false;
                              vendor.areIn = false;
                              town.current = "center";
                              advBtn.disabled = false;
                              talk("La queue entre les jambes, vous retournez au village.");
                              talk("Vous mendiez de l'aide lorsqu'une prêtresse vous rejoins et vous soigne en échange du peu d'honneur qu'il vous restait.")
                              talk("-");
                              mainCharacter.hp = mainCharacter.maxHp;
                              mainCharacter.introduce();
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
                              startFight();
                              break;
                  }

            //Positions -----
            if(town.areIn && !adventure.areIn) {
                  showHide(townBtns, "block", false);
                  showHide(pnjSection, "none", false);
                  showHide(shopSection, "none", false);
                  showHide(centerSection, "none", false);
                  showHide(mobSection, "none", false);
                  townBtn.textContent = "Bienvenue en ville";
                  townBtn.disabled = true;
                  vendorBtn.disabled = false;
                  shopBtn.disabled = false; 
                  attackBtn.disabled = false;


                  showHide(debug, "none", false); // ____________________________DEBUG________________________________
                  
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
                  townBtn.textContent = "Fuir comme un lâche !";
                  townBtn.disabled = false;
                  advBtn.disabled = true;
                  attackBtn.disabled = false;


                  showHide(debug, "block", false); // ____________________________DEBUG________________________________
                  showHide(mobSection, "flex", false); 
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
      

      // DEBUG

      const debug = document.getElementById("debug");
      document.getElementById("addMob").addEventListener("click", () => {
            let adjust = Math.floor(Math.random() * 3);
            adjust -= 1;
            let mob = new Mobs(adjust);
            mob.introduce();
      });
})();