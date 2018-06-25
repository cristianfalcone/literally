import { html } from 'lit-html/lib/lit-extended';
import { decrement, increment } from '../actions';
import { State } from '../reducers';

export const app = ({count}: State) => html`
  <button type="button" on-click=${decrement}>-</button>
  ${count}
  <button type="button" on-click=${increment}>+</button>
`;
