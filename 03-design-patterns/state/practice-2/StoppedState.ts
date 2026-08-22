import { Player } from "./Player";
import { PlayerState } from "./PlayerState";
import { PlayingState } from "./PlayingState";

export class StoppedState implements PlayerState {
    private player: Player;

    constructor(player: Player) {
        this.player = player;
    }

    play(): void {
        this.player.setState(new PlayingState(this.player));
    }

    pause(): void {
        throw new Error("Cannot pause a stopped player");
    }

    stop(): void {
        throw new Error("Player is already stopped");
    }
}