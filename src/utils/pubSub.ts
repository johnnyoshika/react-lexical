type Callback<T> = (data: T) => void;
type EventMap = Record<string, Array<Callback<any>>>;

class PubSub {
  private events: EventMap;

  constructor() {
    this.events = {};
  }

  subscribe<T>(event: string, callback: Callback<T>) {
    if (!this.events[event]) this.events[event] = [];

    this.events[event].push(callback);
    const unsubscribe = () => {
      this.unsubscribe(event, callback);
    };

    return unsubscribe;
  }

  unsubscribe<T>(event: string, callback: Callback<T>) {
    if (!this.events[event]) return;

    this.events[event] = this.events[event].filter(
      cb => cb !== callback,
    );
  }

  publish<T>(event: string, data: T) {
    if (!this.events[event]) return;

    this.events[event].forEach(callback => callback(data));
  }
}

export const pubSub = new PubSub();
