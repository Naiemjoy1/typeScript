class Player {
  constructor(
    private name: string,
    public age: number,
    readonly country: string
  ) {}

  play() {
    console.log(`${this.name} from ${this.country} is playing!`);
  }
}

const masrafi = new Player("Mashrafi", 40, "Bangladesh");
const sakib = new Player("Sakib", 38, "Bangladesh");

sakib.age = 44;
console.log(sakib.age);

const Players: Player[] = [];

Players.push(sakib);
Players.push(masrafi);

Players.forEach((player) => player.play());
