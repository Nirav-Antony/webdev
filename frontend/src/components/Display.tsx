const Display = () => {
    return (
<div className="relative flex items-center justify-center h-4/5 w-4/5 group bg-black bg-opacity-50">
            <img src="./src/data/download2.jpeg" className="absolute inset-0 object-cover filter blur-none group-hover:blur-sm transition-all duration-300"></img>
            {/* Apply blur only on hover using group-hover */}
            <div className="absolute w-4/5 h-4/5 bg-black bg-opacity-50 duration-600 opacity-0 group-hover:opacity-100 ">
                {/* Apply opacity only on hover */}
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center">
                    <div className="w-4/5">
                        <h1 className="text-4xl text-white px-8 font-bold text-center">Lorem ipsum</h1>
                        <p className="text-xl text-white px-8 text-pretty mt-4 text-center">Discover tranquility in a private Coorg countryside homestay, enveloped by lush greenery and warm hospitality. Immerse yourself in the serene beauty of nature and the rich cultural heritage of Coorg, India.</p>
                    </div>
                </div>
        </div>
    );
};

export default Display;


