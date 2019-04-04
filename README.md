# react-context-io

Naive implementation of [rfcs#89](https://github.com/reactjs/rfcs/pull/89).

## Installation

```bash
$ npm i react-context-io
```

Or

```bash
$ yarn add react-context-io
```

## Usage

```js
import React, { useContext } from 'react';
import { createContextIO } from 'react-context-io';


const CountStore = createContextIO(0);

const Result = () => {
  const count = useContext(CountStore);
  return <div>{count}</div>;
};

const AddButton = () => (
  <button onClick={() => CountStore.write(count => count + 1)}>+</button>
);

const Counter = () => (
  <CountStore.Provider>
    <Result />
    <AddButton />
  </CountStore.Provider>
);
```

[Live demo](https://codesandbox.io/s/8n9r3kk79j)

## License

[MIT](LICENSE)
