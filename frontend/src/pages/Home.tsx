import photo1 from '../data/photo1.png';
import photo2 from '../data/photo2.png';
import room1 from '../data/room1.png';
import pool1 from '../data/pool1.png';

const Home = () => {
    return (


        <div className="w-full flex-items-center bg-gray-900 dark:bg-gray-900 p-8 border border-gray-600 rounded">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                    <a href="/map"
                        className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                        <img src={photo1}
                            loading="lazy" alt="Photo by Minh Pham"
                            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                        />

                        <div
                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                        </div>

                        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">maps</span>
                    </a>

                    <a href="/display"
                        className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                        <img src={room1} loading="lazy"
                            alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                        />

                        <div
                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                        </div>

                        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">features</span>
                    </a>

                    <a href="#"
                        className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                        <img src={pool1}
                            loading="lazy" alt="Photo by Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                        />

                        <div
                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                        </div>

                        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">About us </span>
                    </a>

                    <a href="#"
                        className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                        <img src={photo2}
                            loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                        />

                        <div
                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                        </div>

                        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Pricing</span>
                    </a>
                </div>
        </div>


    );
};

export default Home;

