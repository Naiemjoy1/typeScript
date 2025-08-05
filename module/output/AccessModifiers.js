class Player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing!`);
    }
}
const masrafi = new Player("Mashrafi", 40, "Bangladesh");
const sakib = new Player("Sakib", 38, "Bangladesh");
sakib.age = 44;
console.log(sakib.age);
sakib.name = "kkh";
console.log(sakib.name);
sakib.country = "USA";
console.log(sakib.country);
const Players = [];
Players.push(sakib);
Players.push(masrafi);
Players.forEach((player) => player.play());
export {};
//# sourceMappingURL=AccessModifiers.js.map