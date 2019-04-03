import * as React from 'react';

const { useState } = React;

export function createContextIO<T = any>(initialState: T) {
  const Context: any = React.createContext<T>(initialState);

  const NativeProvider = Context.Provider;
  Context.Provider = ({ children }: React.Props<any>) => {
    const [state, setState] = useState<T>(initialState);

    Context.write = setState;
    Context.read = () => state;

    return React.createElement(NativeProvider, { value: state }, children);
  };

  Context.write = Context.read = () => {
    throw new Error('ContextIO not mount');
  };

  return Context;
}
