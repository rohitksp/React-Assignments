import React, { useState, useEffect } from "react";

const Pagination = ({ dataPerPage, totalData, onPaginationChange }) => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const value = dataPerPage * counter;
    onPaginationChange(value - dataPerPage, value);
  }, [counter]);

  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (Math.ceil(totalData / dataPerPage) === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };

  return (
    <div>
      <button onClick={() => onButtonClick("prev")}>Preview</button>
      <button onClick={() => onButtonClick("next")}>Next</button>
    </div>
  );
};

export default Pagination;
