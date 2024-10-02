import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Header = () => {
    const { isLoggedIn } = useAppContext();
    return (
        <div className="bg-fixed py-8  bg-gray-900">
            <div className="container mx-auto flex flex-wrap items-center justify-between px-20">
                {/* Address Section */}
                <div className="basis-1/4">
                    <div className="flex items-center flex-wrap flex-row">
                        <span className="text-2xl text-orange-600">address @ address, road</span>
                        <LocationOnIcon className="w-10 h-10 ml-2 text-orange-600 justify-between" /> {/* MUI Icon */}
                    </div>
                </div>

                {/* Logo Section */}
                <div className="basis-1/2 text-center">
                    <header className="text-7xl bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent drop-shadow shadow-black tracking-tight" style={{ fontFamily: 'Rage-Italic' }}>
                        <Link to="/">Tranquility</Link>
                    </header>
                </div>

                {/* Links Section */}
                <div className="basis-1/4 flex justify-end space-x-2">
                    {isLoggedIn ? (
                        <>
                            <Link className="text-red-500 px-3 font-bold hover:bg-blue-600" to="/my-bookings">
                                My Bookings
                            </Link>
                            <SignOutButton />
                        </>
                    ) : (
                        <Link
                            to="/sign-in"
                            className="flex items-center px-4 py-2 font-bold text-white bg-gradient-to-t from-cyan-300 to-sky-500 shadow-lg shadow-cyan-500/50 rounded-lg hover:bg-sky-500 transition duration-300"
                        >
                            Sign In
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
