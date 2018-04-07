import React from "react";
import { oneOfType, shape, string } from "prop-types";

const ErrorLoadingComponent = ({ error }) => (
  <div> Error occured: {error} </div>
);

ErrorLoadingComponent.propTypes = {
  error: oneOfType([string, shape({ message: string })])
};

ErrorLoadingComponent.defaultProps = {
  error: ""
};

export default ErrorLoadingComponent;
