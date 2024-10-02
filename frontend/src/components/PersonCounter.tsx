//import { useState } from "react";

interface CounterProps {
  value: number;
  onChange: (newValue: number) => void;
}

const PersonCounter: React.FC<CounterProps> = ({ value, onChange }) => {
  const decrement = () => {
    onChange(value - 1);
  };

  const increment = () => {
    onChange(value + 1);
  };

return (
<div className="w-full max-w-sm relative mt-4">
  <label className="block mb-1 text-sm text-amber-800">
    Add Members
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
 
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffae00" className="absolute w-5 h-5 top-2.5 left-2.5 text-amber-500">
      <path stroke-linecap="round" stroke-linejoin="round" 
      d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
    </svg>
 
    <input
      type="number"
      className="w-full pl-10 h-10 pr-3 py-2 bg-transparent placeholder:text-amber-400 text-amber-700 text-sm border border-amber-200 rounded transition duration-300 ease focus:outline-none focus:border-amber-400 hover:border-amber-400 shadow-sm focus:shadow-md"
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
      Use the + and - buttons to add or remove members.
    </p>    
  </div>
</div>
);
};

export default PersonCounter;