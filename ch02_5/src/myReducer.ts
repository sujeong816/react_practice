export type State = {
  message: string;
  count: number;
};

export type Action =
  | { type: "setMessage"; payload: { message: string } }
  | { type: "increase" };

export const initialState = { message: "hello", count: 0 };

export type DispatchFunc = (action: Action)=>void

export function reducer(state: State, action: Action) {
    switch (action.type) {
        case 'increase':
            return {...state, count: state.count+1}
        case 'setMessage':
            return {...state, message: action.payload.message}
    }
}