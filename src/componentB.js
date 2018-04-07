import React, { PureComponent } from "react";
import { object, array, shape, string, arrayOf, number } from "prop-types";
import ComponentC from "./componentC";
export default class ComponentB extends PureComponent {
  // stating the props required by the compnent to work properly.
  // use this as of your contract.

  // Wrong way
  /* static propTypes = {
  //   values: object
  */

  // Right way
  static propTypes = {
    values: shape({
      name: string,
      someArray: arrayOf(
        shape({
          id: number.isRequired, // if passed props doens't have this id,
          // you will see console warning and thus helps you to identify
          // problem in advance.
          color: string.isRequired,
          value: shape({
            nestedValue: number
          }).isRequired
        })
      ),
      someObject: shape({
        age: number
      }),
      objectContainingArray: shape({
        values: arrayOf(number)
      })
    })
  };

  // use this option as a shield when the user of this component doesn't fullfil your contract
  static defaultProps = {
    values: {} // we are passing an empty object here. We could drill it down for nested properties.
  };

  // now we know that once we get values props which is an object from our parent component,
  render() {
    return (
      <div>
        <ComponentC list={this.props.values.someArray} />
      </div>
    );
  }
}
