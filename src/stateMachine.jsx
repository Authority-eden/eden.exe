import { create } from "zustand";

export const STATES = {
  LOGIN: "LOGIN",
  WELCOME: "WELCOME",
  CONTRACT_1: "CONTRACT_1",
  INSTRUCTIONS: "INSTRUCTIONS",
  AGENT_1: "AGENT_1",
  BAD_ENDING: "BAD_ENDING",
  NORMAL_ENDING: "NORMAL_ENDING",
  SECRET_ENDING: "SECRET_ENDING",
};

const TRANSITIONS = {
  [STATES.LOGIN]: [STATES.WELCOME, STATES.SECRET_ENDING, STATES.AGENT_1],
  [STATES.WELCOME]: [STATES.CONTRACT_1],
  [STATES.CONTRACT_1]: [STATES.INSTRUCTIONS, STATES.BAD_ENDING],
  [STATES.INSTRUCTIONS]: [STATES.AGENT_1],
  [STATES.AGENT_1]: [STATES.NORMAL_ENDING],
  [STATES.NORMAL_ENDING]: [STATES.LOGIN],
  [STATES.BAD_ENDING]: [STATES.LOGIN],
  [STATES.SECRET_ENDING]: [STATES.LOGIN],
};

export const useStateMachine = create((set) => ({
  currentState: STATES.LOGIN,
  changeState: (next) =>
    set((store) => {
      if (TRANSITIONS[store.currentState]?.includes(next)) {
        console.debug(`new application state: ${next}`);
        return { currentState: next };
      } else {
        console.warn(
          `application state cannot transition from ${store.currentState} to ${next}`
        );
        return { currentState: store.currentState };
      }
    }),
}));
