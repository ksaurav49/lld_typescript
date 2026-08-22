import { PausedState } from "./PausedState";
import { Player } from "./Player";
import { PlayerState } from "./PlayerState";
import { StoppedState } from "./StoppedState";

export class PlayingState implements PlayerState {
    private player: Player;

    constructor(player: Player) {
        this.player = player;
    }

    play(): void {
        throw new Error("Already playing");
    }

    pause(): void {
        this.player.setState(new PausedState(this.player));
    }

    stop(): void {
        this.player.setState(new StoppedState(this.player));
    }
}