import { Player } from "./classes/players.js";

const masrafi = new Player("Mashrafi", 40, "Bangladesh");
const sakib = new Player("Sakib", 38, "Bangladesh");

sakib.age = 44;
console.log(sakib.age);

const Players: Player[] = [];

Players.push(sakib);
Players.push(masrafi);

Players.forEach((player) => player.play());
