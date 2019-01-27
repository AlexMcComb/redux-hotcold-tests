import { restartGame, makeGuess } from "../actions";

import { gameReducer } from "./index";

describe("gameReducer", () => {
  // Set up some dummy data
  const guess1 = "[1,2]";
  const correctAnswer1 = "2";

  it("Should set the initial state when nothing is passed in", () => {
    const state = gameReducer(undefined, { type: "__UNKNOWN" });
    expect(state).toEqual({
      guesses: [],
      feedback: "Make your guess!",
      auralStatus: "",
      correctAnswer: state.correctAnswer
    });
  });

  it("Should return the current state on an unknown action", () => {
    let currentState = {};
    const state = gameReducer(currentState, { type: "__UNKNOWN" });
    expect(state).toBe(currentState);
  });

  describe("makeGuess", () => {
    it("Should add new guess", () => {
      let state;
      state = gameReducer(state, makeGuess(guess1));
    });
  });

  describe("restartGame", () => {
    it("Should add new guess", () => {
      let state;
      state = gameReducer(state, restartGame(correctAnswer1));
    });
  });
});
