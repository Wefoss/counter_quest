import React from "react";

const CounterInputRange = ({change}) => {

  return (
    <input
      type="number"
      onChange={change}
      placeholder="Counter input range"
    />
  );
};

export default CounterInputRange;
