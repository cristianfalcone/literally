import { html } from "lit-html";
import { decrement, increment } from "../actions";
import { State } from "../reducers";

export const app = ({ count }: State) => html`
  <button type="button" @click=${decrement}>-</button>
  ${count}
  <button type="button" @click=${increment}>+</button>
`;
