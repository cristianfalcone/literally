import { scan, runEffects, tap } from '@most/core';
import { newDefaultScheduler, currentTime } from '@most/scheduler';
import { create, event } from 'most-subject';
import { TemplateResult, render } from 'lit-html';
import { initialState, reducer, State } from './reducers';

export interface Action {
  type: string;
}

const [sink, action$] = create<Action>();
const scheduler = newDefaultScheduler();
const dispatch = (action: Action) => event(currentTime(scheduler), action, sink);
const state$ = scan<Action, State>(reducer, initialState, action$);

let snapshot: State;
const bootstrap = (
  template: (state: State) => TemplateResult,
  container: Element | DocumentFragment
) =>
  runEffects(tap<State>(
      state => {
        snapshot = state;
        render(template(state), container);
      },
      state$
    ),
    scheduler
  );

export { dispatch, action$, state$, scheduler, bootstrap, snapshot };
