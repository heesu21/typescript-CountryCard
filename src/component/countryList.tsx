import React from "react";

function CountryList({ props }) {
  return;
  <div>
    {props.map((country) => {
      return <div>{country}</div>;
    })}
    ;
  </div>;
}

export default CountryList;
