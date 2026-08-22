import { PausedState } from "./PausedState";
import { PlayerState } from "./PlayerState";
import { PlayingState } from "./PlayingState";
import { StoppedState } from "./StoppedState";

export class Player {
    private currentState: PlayerState;

    constructor() {
        this.currentState = new StoppedState(this);
    }

    setState(state: PlayerState): void {
        this.currentState = state;
    }

    play() {
        this.currentState.play();
    }

    pause() {
        this.currentState.pause();
    }

    stop() {
        this.currentState.stop();
    }
}