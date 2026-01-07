export class Player {
    name;
  
    constructor(name) {
      this.name = name;
    }
    
    set setName( newName ) {
      this.name = newName;
    }

    get getName() {
      return this.name;
    }
  }

const Player1 = new Player("Ezra")
console.log(Player1.getName)