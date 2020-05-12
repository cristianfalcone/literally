import { dispatch } from "..";

export enum CounterActionTypes {
  Increment = "increment",
  Decrement = "decrement",
}

export const increment = () =>
  dispatch({
    type: CounterActionTypes.Increment,
  });

export const decrement = () =>
  dispatch({
    type: CounterActionTypes.Decrement,
  });
