import { Link } from "react-router-dom";


const Hero = () => {
    return (
      <div className=" bg-gradient-to-t from-cyan-300 to-sky-500 flex flex-row place-content-center">
            <Link to="/sign-in" className="py-4 text-xl cursor-pointer text-align: center px-8 text-slate-50 tracking-wide hover:bg-sky-500 ">Rooms</Link>
            <Link to="/sign-in" className="py-4 text-xl cursor-pointer text-align: center px-8 text-slate-50 tracking-wide hover:bg-sky-500">Booking</Link>
            <Link to="/sign-in" className="py-4 text-xl cursor-pointer text-align: center px-8 text-slate-50 tracking-wide hover:bg-sky-500">Contact Us</Link>
      </div>
    );
  };
  
  export default Hero;