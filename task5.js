export class Player {
    name;
    level;
    xp = 0;
  
    constructor(name, level) {
      this.name = name;
      this.level = level;
    }
    
    set setName( newName ) {
      this.name = newName;
    }
    get getName() {
      return this.name;
    }

    set setLevel( newLevel ) {
      this.level = newLevel;
    }
    get getLevel() {
      return this.level;
    }

    set setXp( newXp ) {
      this.xp = newXp;
    }
    get getXp() {
      return this.xp;
    }

    info() {
      return `${this.name} has reached Level ${this.level}!`
    }

    levelUp() {
      return this.level += 1
    }

    gainXp(amount) {
      this.xp += amount;

      while (this.xp >= (this.level * 10)) {
        this.xp -= (this.level * 10);
        this.levelUp();
        console.log(this.info());
      }
    }
  }

const Player1 = new Player("Ezra", 1);
console.log(Player1.info())
Player1.gainXp(1000)
console.log(Player1.info())