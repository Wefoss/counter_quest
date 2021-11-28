import React from "react";

const CounterInputRange = ({change, val}) => {
   return (
    <input
      type="number"
      onChange={change}
      value={val}
    />
  );
};

export default CounterInputRange;
