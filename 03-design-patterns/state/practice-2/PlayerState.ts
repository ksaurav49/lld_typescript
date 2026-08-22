export interface PlayerState {
    play(): void;
    pause(): void;
    stop(): void;
}

// Refactor with State:
// PlayerState interface: play(), pause(), stop()
// Concrete: StoppedState, PlayingState, PausedState
// MediaPlayer context: holds currentState, setState, delegates actions
// Start in Stopped
// No if (status === ...) inside MediaPlayer methods.
// Optional: store trackName: string on MediaPlayer; states log it when playing/pausing.
// Use export / import. Same style as Order (state holds player in constructor, or pass player in each method — pick one, stay consistent).
// Suggested shape:

// practice-2/
//   PlayerState.ts
//   StoppedState.ts
//   PlayingState.ts
//   PausedState.ts
//   MediaPlayer.ts
//   Demo.ts
