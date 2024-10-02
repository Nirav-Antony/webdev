import backgroundVideo from '../data/video.mp4'; 

const Landing = () => {
    return (
        <div className="h-screen overflow-hidden flex-1 justify-center pt-2 pb-2 bg-gray-900" >
            <header id="up" className="bg-center bg-fixed bg-no-repeat bg-cover h-screen relative">
                
                {/* Background Video */}
                <video 
                    className="absolute top-0 left-0 w-full h-full object-cover" 
                    src={backgroundVideo} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                />
                
                <div 
                    className="h-screen bg-opacity-50 bg-black flex items-center justify-center relative" 
                    style={{ background: 'rgba(0,0,0,0.5)' }}
                >
                    <div className="mx-2 text-center">
                        <h1 className="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl">
                            Book Now
                        </h1>
                        <h2 className="text-gray-200 font-extrabold text-3xl xs:text-4xl md:text-5xl leading-tight">
                            Stay with us
                        </h2>
                        <div className="inline-flex">
                            <button className="p-2 my-5 mx-2 bg-gradient-to-t from-cyan-300 to-sky-500 hover:bg-indigo-800 font-bold text-white rounded border-2 border-transparent hover:border-indigo-800 shadow-md transition duration-500 md:text-xl">
                                Book
                            </button>
                            <a href="/">
                                <button className="p-2 my-5 mx-2 bg-transparent border-2 bg-opacity-75 hover:bg-gradient-to-tr from-cyan-300 to-sky-500 border-sky-500 rounded hover:border-indigo-800 font-bold text-white shadow-md transition duration-500 md:text-lg">
                                    Learn More
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Landing;
