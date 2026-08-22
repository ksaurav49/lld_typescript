import { Player } from "./Player";
import { PlayerState } from "./PlayerState";
import { PlayingState } from "./PlayingState";
import { StoppedState } from "./StoppedState";

export class PausedState implements PlayerState {
    private player: Player;

    constructor(player: Player) {
        this.player = player;
    }

    play(): void {
        this.player.setState(new PlayingState(this.player));
    }

    pause(): void {
        throw new Error("Already paused");
    }

    stop(): void {
        this.player.setState(new StoppedState(this.player));
    }
}