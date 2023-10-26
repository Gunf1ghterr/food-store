import React, { useEffect, useState } from "react";

function useLogger(value: any) {
  useEffect(() => {
    console.log(value);
  }, [value]);
}

function useImport(init: any) {
  const [value, setValue] = useState(init);

  const onChange = function (event: any) {
    setValue(event.target.value);
  };
  return {
    value,
    onChange,
  };
}

function Test() {
  const input = useImport("");
  useLogger(input.value);

  return (
    <div className="container pt-3">
      <input type="text" {...input} />
      <hr />
      <h1>{input.value}</h1>
    </div>
  );
}

export default Test;
