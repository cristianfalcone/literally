import { CounterActionTypes } from "../actions";

export interface State {
  count: number;
}

export const initialState: State = {
  count: 0,
};

export const reducer = (
  state: State = initialState,
  action: { type: CounterActionTypes }
): State => {
  switch (action.type) {
    case CounterActionTypes.Increment: {
      return { count: state.count + 1 };
    }
    case CounterActionTypes.Decrement: {
      return { count: state.count - 1 };
    }
    default: {
      return state;
    }
  }
};
