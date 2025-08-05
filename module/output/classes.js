class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing!`);
    }
}
const masrafi = new Player("Mashrafi", 40, "Bangladesh");
const sakib = new Player("Sakib", 38, "Bangladesh");
const Players = [];
Players.push(sakib);
Players.push(masrafi);
Players.forEach((player) => player.play());
export {};
//# sourceMappingURL=classes.js.map