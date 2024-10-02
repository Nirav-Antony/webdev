import { useState } from 'react';
import photo1 from '../data/photo1.png';  // Correct import for image
import pool2 from '../data/pool2.png';
import photo3 from '../data/photo3.png';
//import LocationOnIcon from '@mui/icons-material/LocationOn';

const Display = () => {
  // State to control which slider is active
  const [activeSlider, setActiveSlider] = useState<string>('slider1');

  return (
    <><div
      className="relative bg-transparent p-5 shadow-xl mx-auto w-full max-w-2xl">
      <div className="mx-auto flex w-full max-w-md flex-row justify-around">
        <a className='text-amber-500 text-center'>
        <svg width="80px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.72"></g><g id="SVGRepo_iconCarrier"> <g id="System / Wifi_High"> <path id="Vector" d="M8.34277 14.5899C8.80861 14.0903 9.37187 13.6915 9.9978 13.418C10.6237 13.1446 11.2995 13.0025 11.9826 13.0001C12.6656 12.9977 13.3419 13.1353 13.9697 13.4044C14.5975 13.6735 15.1637 14.0683 15.633 14.5646M6.14941 11.5439C6.89476 10.7446 7.79597 10.1066 8.79745 9.66902C9.79893 9.23148 10.8793 9.00389 11.9721 9.00007C13.065 8.99626 14.1466 9.21651 15.1511 9.64704C16.1556 10.0776 17.0617 10.7094 17.8127 11.5035M3.22363 8.81635C4.34165 7.61742 5.69347 6.66028 7.19569 6.00398C8.69791 5.34768 10.3179 5.0058 11.9572 5.00007C13.5966 4.99435 15.2208 5.32472 16.7276 5.97052C18.2344 6.61632 19.5931 7.56458 20.7195 8.75568M12 19.0001C11.4477 19.0001 11 18.5524 11 18.0001C11 17.4478 11.4477 17.0001 12 17.0001C12.5523 17.0001 13 17.4478 13 18.0001C13 18.5524 12.5523 19.0001 12 19.0001Z"
         stroke="#ffae00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g>
        </svg>
         Wifi
        </a>
        <a className='text-amber-500  text-center' >
        <svg width="80px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1 19H2.54405C3.30819 19 4.03284 18.7041 4.52203 18.1923L5.125 17.5615C5.84057 16.8128 7.15943 16.8128 7.875 17.5615C8.59057 18.3101 9.90943 18.3101 10.625 17.5615C11.3406 16.8128 12.6594 16.8128 13.375 17.5615C14.0906 18.3101 15.4094 18.3101 16.125 17.5615C16.8406 16.8128 18.1594 16.8128 18.875 17.5615L19.478 18.1923C19.9672 18.7041 20.6918 19 21.4559 19H23" stroke="#ffae00" stroke-width="2"></path> <path d="M19.4142 5.58579C20.1953 6.36683 20.1953 7.63317 19.4142 8.41421C18.6332 9.19526 17.3668 9.19526 16.5858 8.41421C15.8047 7.63317 15.8047 6.36683 16.5858 5.58579C17.3668 4.80474 18.6332 4.80474 19.4142 5.58579Z" stroke="#ffae00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 7H10L17.5 13.5"
         stroke="#ffae00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M13 10L9.5 13.5" stroke="#ffae00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          Swimming <br/>Pool
        </a>
        <a className='text-amber-500 text-center'>
          <svg height="50px" width="80px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 512 512" fill="#ffae00" stroke="#ffae00" stroke-width="0.00512"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> </style> <g> 
            <path className="st0" d="M502.08,430.441l-80.346-80.338c-3.204-3.228-5.027-6.135-6.232-9.147c-1.043-2.642-1.614-5.436-1.766-8.761 c-0.128-2.883,0.096-6.152,0.666-9.797c0.988-6.401,3.076-13.902,5.718-22.277c3.95-12.592,9.122-27.128,12.92-43.542 c3.783-16.407,6.168-34.789,4.329-54.93c-0.996-10.906-4.048-21.409-8.102-31.319c-6.112-14.857-14.536-28.421-22.735-39.72 c-4.095-5.645-8.151-10.712-11.861-15.058c-3.71-4.344-7.066-7.958-9.853-10.736c-0.892-0.892-2.281-2.386-3.975-4.256 c-2.546-2.811-5.822-6.513-9.718-10.761c-3.91-4.24-8.448-9.066-13.587-14.206c-11.821-11.821-26.846-25.361-44.971-37.832 c-18.126-12.456-39.395-23.868-63.662-31.256c-20.952-6.384-41.494-7.677-60.676-5.573c-28.814,3.156-54.548,13.78-75.7,26.059 C91.363,39.311,74.76,53.3,64.027,64.02c-7.16,7.163-15.74,16.921-24.34,28.911c-12.874,17.98-25.811,40.955-33.324,67.561 c-3.742,13.29-6.115,27.504-6.344,42.362c-0.225,14.848,1.71,30.339,6.493,46.039c7.388,24.276,18.796,45.542,31.256,63.674 c12.467,18.118,26.007,33.151,37.828,44.972c6.854,6.85,13.134,12.632,18.262,17.258c2.558,2.322,4.826,4.345,6.701,6.048 c1.875,1.686,3.361,3.075,4.26,3.975c3.706,3.702,8.902,8.448,15.318,13.66c9.621,7.806,21.928,16.624,35.809,23.996 c6.946,3.686,14.282,7.019,21.928,9.629c7.648,2.618,15.603,4.521,23.778,5.268c20.048,1.823,38.342-0.522,54.696-4.28 c12.267-2.819,23.474-6.417,33.624-9.709c7.609-2.465,14.62-4.746,20.952-6.456c4.746-1.286,9.107-2.224,13.014-2.755 c2.927-0.386,5.593-0.538,8.002-0.45c3.63,0.145,6.633,0.763,9.48,1.96c2.843,1.213,5.622,3.003,8.682,6.055L440.366,512 l71.632-71.633L502.08,430.441z M185.884,405.169c-1.631-0.57-3.261-1.196-4.899-1.871c-11.962-4.891-23.896-12.207-33.874-19.466 c-4.991-3.63-9.512-7.244-13.327-10.504c-3.818-3.26-6.958-6.183-9.126-8.352c-1.538-1.542-3.26-3.124-5.252-4.931 c-2.988-2.706-6.569-5.879-10.625-9.605c-4.047-3.718-8.568-7.966-13.346-12.744c-10.982-10.977-23.353-24.758-34.548-41.028 C49.7,280.39,39.719,261.654,33.354,240.726c-5.192-17.081-6.24-33.616-4.521-49.46c2.574-23.746,11.568-45.975,22.426-64.638 c5.412-9.316,11.275-17.731,16.937-24.959c5.661-7.212,11.126-13.258,15.675-17.804c6.063-6.063,14.768-13.749,25.417-21.378 c15.965-11.459,36.322-22.782,58.824-29.11c11.255-3.173,23.036-5.116,35.17-5.293c12.142-0.184,24.63,1.365,37.442,5.268 c20.928,6.369,39.668,16.35,55.942,27.538c16.274,11.186,30.05,23.562,41.032,34.548c6.372,6.368,11.801,12.262,16.29,17.234 c2.248,2.481,4.256,4.738,6.063,6.729c1.807,1.992,3.389,3.718,4.923,5.252c2.907,2.907,7.115,7.492,11.725,13.17 c6.914,8.513,14.768,19.538,21,31.272c2.931,5.525,5.476,11.194,7.468,16.792L185.884,405.169z M440.373,472.312l-70.428-70.428 c-5.598-5.606-11.926-9.829-18.639-12.472c-5.871-2.337-11.938-3.453-17.873-3.71c-5.2-0.225-10.319,0.185-15.37,0.972 c-8.838,1.38-17.519,3.903-26.372,6.681c-13.258,4.176-26.935,9.01-41.414,12.335c-9.432,2.176-19.177,3.71-29.356,4.119 l188.896-188.888c-0.401,10.095-1.919,19.772-4.071,29.144c-2.482,10.8-5.79,21.177-9.051,31.247 c-2.441,7.556-4.875,14.952-6.866,22.301c-1.478,5.525-2.723,11.026-3.469,16.623c-0.554,4.184-0.836,8.416-0.674,12.72 c0.224,6.425,1.461,13.026,4.144,19.362c2.658,6.329,6.738,12.319,12.062,17.619l70.428,70.429L440.373,472.312z"></path> </g> </g></svg>
          <p>Table<br/>
            Tennis
          </p>
        </a>
        <a className='text-amber-500 text-center'>
        <svg width="80px" height="50px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#ffae00" stroke="#ffae00"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ffae00" d="M480 257.152V192h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64h-96v65.152A448 448 0 0 1 955.52 768H68.48A448 448 0 0 1 480 257.152zM128 704h768a384 384 0 1 0-768 0zM96 832h832a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64z"></path></g></svg>
          cook
        </a>
      </div>
    </div>
      <div className="h-screen w-full overflow-hidden flex items-center justify-center gap-2">
        <div className="relative w-full h-full bg-slate-500">
          {/* Slider Controls */}
          <input
            className="hidden peer/slider1 checkbox"
            type="radio"
            name="slider"
            id="slider1"
            checked={activeSlider === 'slider1'}
            onChange={() => setActiveSlider('slider1')} />
          <input
            className="hidden peer/slider2 checkbox"
            type="radio"
            name="slider"
            id="slider2"
            checked={activeSlider === 'slider2'}
            onChange={() => setActiveSlider('slider2')} />
          <input
            className="hidden peer/slider3 checkbox"
            type="radio"
            name="slider"
            id="slider3"
            checked={activeSlider === 'slider3'}
            onChange={() => setActiveSlider('slider3')} />

          {/* Slider Content */}
          <div
            className={`relative w-[300vw] h-full flex transition-all duration-500 ease-in-out ${activeSlider === 'slider1' ? '-left-0' : activeSlider === 'slider2' ? '-left-[100vw]' : '-left-[200vw]'}`}
          >
            {/* Use inline style for background images */}
            <div className="relative w-full h-full flex" style={{ backgroundImage: `url(${photo1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className="relative w-full h-full flex" style={{ backgroundImage: `url(${pool2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className="relative w-full h-full flex" style={{ backgroundImage: `url(${photo3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          </div>

          {/* Slider Navigation Dots */}
          <div className="absolute w-full flex justify-center gap-2 bottom-12">
            <label
              className={`block w-5 h-5 bg-white cursor-pointer opacity-50 z-10 transition-all duration-300 ease-in-out hover:scale-125 hover:opacity-100 ${activeSlider === 'slider1' ? 'opacity-100 w-10' : ''}`}
              htmlFor="slider1"
            ></label>
            <label
              className={`block w-5 h-5 bg-white cursor-pointer opacity-50 z-10 transition-all duration-300 ease-in-out hover:scale-125 hover:opacity-100 ${activeSlider === 'slider2' ? 'opacity-100 w-10' : ''}`}
              htmlFor="slider2"
            ></label>
            <label
              className={`block w-5 h-5 bg-white cursor-pointer opacity-50 z-10 transition-all duration-300 ease-in-out hover:scale-125 hover:opacity-100 ${activeSlider === 'slider3' ? 'opacity-100 w-10' : ''}`}
              htmlFor="slider3"
            ></label>
          </div>
        </div>
      </div></>
  );
};

export default Display;
