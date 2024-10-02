import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState<number>(0);

  const decrement = () => {
    setValue((prevValue) => prevValue - 1);
  };

  const increment = () => {
    setValue((prevValue) => prevValue + 1);
  };

  return (
    
      <div className="pd-10 custom-number-input h-6 w-32">
        <div className="flex flex-row h-10 w-full rounded-lg shadow-lg relative bg-transparent">
          <button
            onClick={decrement}
            className="bg-gray-200 hover:bg-gray-300 h-full w-20 rounded-5 cursor-pointer outline-none"
          >
            <span className="m-auto text-2xl font-thin">−</span>
          </button>
          <input
            type="number"
            className="outline-none focus:outline-none text-center w-full bg-gray-200 font-semibold text-md hover:text-black focus:text-black md:text-base cursor-default flex items-center text-gray-700"
            name="custom-input-number"
            value={value}
            readOnly
          />
          <button
            onClick={increment}
            className="bg-gray-200 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
          >
            <span className="m-auto text-2xl font-thin">+</span>
          </button>
        </div>
      </div>
  );
}; 

export default Counter;
