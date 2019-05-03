import * as React from "react";
import TestRenderer from "react-test-renderer";
import { createContextIO } from "..";

describe("createContextIO", () => {
  it("works", () => {
    const Store = createContextIO(1);
    TestRenderer.create(
      <Store.Provider>
        <div />
      </Store.Provider>
    );
    expect(Store.read()).toBe(1);
  });

  it("useContext", () => {
    const Store = createContextIO(1);

    const App = () => {
      const count = React.useContext(Store);

      return <div>{count}</div>;
    };
    const testRenderer = TestRenderer.create(<App />);
    expect(testRenderer.toJSON()).toMatchInlineSnapshot(`
      <div>
        1
      </div>
    `);
  });
});
