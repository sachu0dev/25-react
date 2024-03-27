// SINGLE SELECTION

import { useState } from "react";
import data from "./data";

// MULTIPLE SELECTION
const Accordian = () => {
  const [selected, setSelected] = useState(null);
  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  return (
    <div className="wrapper flex flex-col mt-[20vh] items-center h-full">
      <button className="mb-4 bg-red-500 p-2 rounded-md text-white font-bold">
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
                  onClick={() => handleSingleSelection(dataItem.id)}
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {selected === dataItem.id ? (
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
