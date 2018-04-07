import React from "react";
import { arrayOf, shape, number } from "prop-types";
import { map } from "lodash";

const ComponentC = props => {
  const list = map(props.list, el => {
    return (
      <h3 key={el.id}>
        color: {el.color} --- value: {el.value.nestedValue}
      </h3>
    );
  });

  return <div>{list}</div>;
};

ComponentC.propTypes = {
  list: arrayOf(
    shape({
      id: number.isRequired,
      value: shape({
        nestedValue: number.isRequired
      })
    })
  )
};

ComponentC.defaultProps = {
  list: [] // empty array
};

export default ComponentC;
