export interface Stream<T> {
  run: RunStream<T>;
}

export type RunStream<T> = (sink: Sink<T>, scheduler: Scheduler) => Disposable;

export interface Sink<T> {
  event(time: Time, value: T): void;
  end(time: Time): void;
  error(time: Time, err: Error): void;
}

export interface Scheduler {
  currentTime(): Time;
  scheduleTask(
    offset: Offset,
    delay: Delay,
    period: Period,
    task: Task
  ): ScheduledTask;
  relative(offset: Offset): Scheduler;
  cancel(task: ScheduledTask): void;
  cancelAll(predicate: (task: ScheduledTask) => boolean): void;
}

// A resource that can be disposed
export interface Disposable {
  dispose(): void;
}

// An instant in time
export type Time = number;

// Relative offset between two clocks / schedulers
export type Offset = number;

// Delay time offset
export type Delay = number;

// Span of time between time instants
export type Period = number;

export interface Task {
  run(time: Time): void;
  error(time: Time, e: Error): void;
  dispose(): void;
}

export interface ScheduledTask {
  task: Task;
  run(): void;
  error(err: Error): void;
  dispose(): void;
}

export const newStream = <T>(run: RunStream<T>): Stream<T> => ({ run });

const event$ = newStream<boolean>(() => {
  return {
    dispose: () => {},
  };
});
