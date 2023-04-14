type StateType = {
  count: number;
  step: number;
};

export type ActionType =
  | { type: "increaseCount" }
  | { type: "decreaseCount" }
  | { type: "setStep"; payload: { step: number } };

export const initialState: StateType = { count: 0, step: 1 };

export function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case "increaseCount":
      return { ...state, count: state.count + state.step };
    case "decreaseCount":
      return { ...state, count: state.count - state.step };
    case "setStep":
      return { ...state, step: action.payload.step };
  }
}
