import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";


const Header = () => {
    const { isLoggedIn } = useAppContext();
    return (
        <div className="bg-fixed py-8" style={{ backgroundImage: `url(./src/data/bluebackground.jpg)` }}>
            <div className="container mx-auto flex justify-between">
                <span className=" text-2xl text-white  text-align-left">address @ address, road</span>
                <div className=" items-center place-self-center">
                    <span className="text-6xl text-cyan-300 shadow-cyan-500/50 font-bold tracking-tight text-align-center ">
                        <Link to="/">HomeStay</Link>
                    </span>
                </div>
                <span className="flex space-x-2">
                    {isLoggedIn ? <>
                        <Link className="flex items-center text-white px-3 font-bold hover:bg-blue-600"
                            to="/my-bookings">
                            My Bookings
                        </Link>
                        <SignOutButton />
                    </> : (
                        <Link to="/sign-in"
                            className="flex items-center px-6 text-white font-bold bg-gradient-to-t from-cyan-300 to-sky-500 shadow-lg shadow-cyan-500/50  hover:bg-sky-500">
                            Sign In
                        </Link>

                    )}
                </span>
            </div>
        </div>
    );
};

export default Header; 