import { useState } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtily(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtily(hex.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtily(256);
    const g = randomColorUtily(256);
    const b = randomColorUtily(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  return (
    <div
      className="h-full  w-full  flex justify-center items-center flex-col"
      style={{
        background: color,
      }}
    >
      <h1 className="text-white text-[5rem] mb-10 py-2 px-12 bg-black">
        Genrated Color : {color}
      </h1>
      <div>
        <button
          className="text-xl p-4 bg-red-600 m-4 text-white font-bold w-[20vw]"
          onClick={() => setTypeOfColor("hex")}
        >
          Create HEX Color
        </button>
        <button
          className="text-xl p-4 bg-green-600 m-4 text-white font-bold w-[20vw]"
          onClick={() => setTypeOfColor("rgb")}
        >
          Create RGB Color
        </button>
        <button
          className="text-xl p-4 bg-blue-600 m-4 text-white font-bold w-[20vw]"
          onClick={
            typeOfColor === "hex"
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }
        >
          Generate Random Color
        </button>
      </div>
    </div>
  );
};

export default RandomColor;
