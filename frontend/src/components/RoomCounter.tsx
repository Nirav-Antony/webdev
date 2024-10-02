//import { useState } from "react";

interface CounterProps {
    value: number;
    onChange: (newValue: number) => void;
  }
  
  const RoomCounter: React.FC<CounterProps> = ({ value, onChange }) => {
    const decrement = () => {
      onChange(value - 1);
    };
  
    const increment = () => {
      onChange(value + 1);
    };
  
  return (
  <div className="w-full max-w-sm relative mt-4">
    <label className="block mb-1 text-sm text-amber-800">
      Number of Rooms
    </label>
    <div className="relative">
      <button
        className="absolute h-8 w-8 right-10 top-1 my-auto px-2 flex items-center bg-slate-800 rounded hover:bg-slate-700"
        type="button"
        onClick={decrement}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffae00" className="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
        </svg>
      </button>
   
      <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 182 192" stroke-width="1.7" stroke="#ffae00" className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-500"> 
      <path stroke-linecap="round" stroke-linejoin="round"
       d="M189.386,156.13h-14.317c-1.381,0-2.5-1.119-2.5-2.5v-18.441H20.503v18.441 c0,1.381-1.119,2.5-2.5,2.5H2.5c-1.381,0-2.5-1.119-2.5-2.5V38.255c0-1.381,1.119-2.5,2.5-2.5h15.503c1.381,0,2.5,1.119,2.5,2.5 v34.288c1.851-1.272,4.089-2.018,6.5-2.018h30.995c6.341,0,11.5,5.159,11.5,11.5v3.336c0,2.41-0.745,4.649-2.018,6.5h105.088V69.075 c0-1.381,1.119-2.5,2.5-2.5h14.317c1.381,0,2.5,1.119,2.5,2.5v84.556C191.886,155.011,190.767,156.13,189.386,156.13z M177.568,151.13h9.317V71.575h-9.317V151.13z M5,151.13h10.503V40.755H5V151.13z M20.503,130.189h152.065v-8.829H20.503V130.189z M20.503,116.36h152.065V96.862H20.503V116.36z M27.003,91.862h30.995c3.584,0,6.5-2.916,6.5-6.5v-3.336c0-3.584-2.916-6.5-6.5-6.5 H27.003c-3.584,0-6.5,2.916-6.5,6.5v3.336C20.503,88.946,23.419,91.862,27.003,91.862z">
        </path>
    </svg>

      <input
        type="number"
        className="w-full pl-10 h-10 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-amber-700 text-sm border border-slate-200 rounded transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
        name="custom-input-number"
        value={value}
        readOnly
      />
      <button
        className="absolute h-8 w-8 right-1 top-1 my-auto px-2 flex items-center bg-slate-800 rounded hover:bg-slate-700"
        type="button"
        onClick={increment}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffae00" className="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
      <p className="flex items-center mt-2 text-xs text-amber-500">
        Use the + and - buttons to add or remove rooms.
      </p>    
    </div>
  </div>
  );
  };
  
  export default RoomCounter;