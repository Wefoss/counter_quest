import React from "react";

const CounterBtn = ({ swith, toggleBtn }) => {
  return (
    <button onClick={() => toggleBtn(swith ? "add" : "del")}>
       {swith ? 'addCounter' : 'minusCounter'}
    </button>
  );
};

export default CounterBtn;
