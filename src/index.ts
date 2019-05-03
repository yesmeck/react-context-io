import * as React from 'react';

const { useState } = React;

export interface ContextIO<T> {
  Provider: any;
  Consumer: React.Consumer<T>;
  displayName?: string;
  write: React.Dispatch<React.SetStateAction<T>>;
  read: () => T;
}

export function createContextIO<T = any>(initialState: T) {
  const Context: ContextIO<T> = React.createContext(initialState) as any;

  const NativeProvider: React.Provider<T> = Context.Provider as any;
  Context.Provider = (({ children }: React.Props<any>) => {
    const [state, setState] = useState<T>(initialState);

    Context.write = setState;
    Context.read = () => state;

    return React.createElement(NativeProvider, { value: state }, children);
  }) as any;

  Context.write = Context.read = () => {
    throw new Error('ContextIO not mount');
  };

  return Context;
}
