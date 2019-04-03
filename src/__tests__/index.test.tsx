import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { createContextIO } from '..';

describe('createContextIO', () => {
  it('works', () => {
    const Store = createContextIO(1);
    TestRenderer.create(
      <Store.Provider>
        <div />
      </Store.Provider>,
    );
    expect(Store.read()).toBe(1);
  });
});
