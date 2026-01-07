export class Player {
    name;
    level;
  
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

    info() {
      return `${this.name} has reached Level ${this.level}!`
    }

    levelUp() {
      return this.level+=1
    }
  }

const Player1 = new Player("Ezra", 2);
console.log(Player1.info())
Player1.levelUp()
console.log(Player1.info())
Player1.levelUp()
console.log(Player1.info())