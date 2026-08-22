import { Player } from "./Player";

const player = new Player();
player.play();
player.pause();
player.play();
player.stop();


const bad = new Player();
try {
  bad.pause();
} catch (e) {
  console.error(e);
}