import { State } from "./types"

let state: State = {
  cwd: "/"
}

export function getState() {
  return state
}

export function updateState(newState: Partial<State>) {
  state = { ...state, ...newState }
}