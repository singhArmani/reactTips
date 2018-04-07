import React from "react";
import ComponentB from "./componentB";

const someArbitraryObj = {
  name: "object has no name",
  someArray: [
    {
      id: 1,
      color: "red",
      value: {
        nestedValue: 20
      }
    },
    {
      id: 2,
      color: "yellow",
      value: {
        nestedValue: 13
      }
    }
  ],
  someObject: {
    age: 20
  },
  objectContainingArray: {
    values: [1, 3, 4]
  }
};

export default class ComponentA extends React.PureComponent {
  state = {
    values: someArbitraryObj
  };

  render() {
    return (
      <div>
        <ComponentB values={someArbitraryObj} />
        {/* more components */}
      </div>
    );
  }
}
