(() => {

      const who = document.getElementById("who");
      const what = document.getElementById("what");
      const care = document.getElementById("care");

      let vendor = {
            name: "George",
            job: "vendor",
            age: 40,
            items_to_give: ["Epée en bois", "Bouclier en mousse", "Armure en feuilles"],
            giveItem: function() {

            },
            introduce: function() {
                  for(let key in vendor) {
                        console.log(key + ": " + vendor[key]);
                  }
            },
            giveItems: function() {
                  who.textContent = this.name + ", " + this.job + ", vous a offert :";
                  what.textContent = `"${this.items_to_give[Math.floor(Math.random() * (this.items_to_give.length))]}"`;
                  care.textContent = "Prenez-en soin !";
            }
      }


      vendor.introduce();

      document.getElementById("giveBtn").addEventListener("click", () => {
            vendor.giveItems();
      });
})();