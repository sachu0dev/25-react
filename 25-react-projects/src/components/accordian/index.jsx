// SINGLE SELECTION

import { useState } from "react";
import data from "./data";

// MULTIPLE SELECTION
const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  function handleMultiSelection(getCurrentId) {
    let tempMultiple = [...multiple];
    const findIndexOfCurrentId = tempMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) {
      tempMultiple.push(getCurrentId);
    } else {
      tempMultiple.splice(findIndexOfCurrentId, 1);
    }

    setMultiple(tempMultiple);
  }

  return (
    <div className="wrapper flex flex-col mt-[20vh] items-center h-full">
      <button
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        className="mb-4 bg-red-500 p-2 rounded-md text-white font-bold"
      >
        Enable Multi Selection
      </button>
      <div className="accordian w-[40vw] flex flex-col justify-center items-center">
        {data && data.length > 0 ? (
          data.map((dataItem) => {
            return (
              <div
                className="item flex flex-col w-full justify-between mb-4"
                key={dataItem.id}
              >
                <div
                  className="title flex w-full justify-between text-2xl p-4 bg-blue-700 text-white"
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {selected === dataItem.id ||
                multiple.indexOf(dataItem.id) !== -1 ? (
                  <div className="p-4 text-xl text-white bg-blue-800">
                    {dataItem.answer}
                  </div>
                ) : null}
              </div>
            );
          })
        ) : (
          <div>no data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
