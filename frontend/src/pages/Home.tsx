const Home = () => {
    return (
        /*
        <div classNameName="max-w-2xl mx-auto">

    <div id="default-carousel" classNameName="relative rounded-lg overflow-hidden shadow-lg" data-carousel="static">
        <div classNameName="relative h-80 md:h-96" data-carousel-inner>
            <div classNameName="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/490473767.jpg?k=74a7ed032f543ea0cdb035e3eb05d96065a6914465eee55cc5ca4e1c9423dc66&o=&hp=1"
                    classNameName="object-cover w-full h-full" alt="Slide 1"/>
                <span classNameName="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-semibold text-white md:text-2xl dark:text-gray-800">First Slide</span>
            </div>
            <div classNameName="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                    classNameName="object-cover w-full h-full" alt="Slide 2"/>
            </div>
            <div classNameName="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                    classNameName="object-cover w-full h-full" alt="Slide 3"/>
            </div>
        </div>
        <div classNameName="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2" data-carousel-indicators>
            <button type="button" classNameName="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"></button>
            <button type="button" classNameName="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"></button>
            <button type="button" classNameName="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"></button>
        </div>
        <button type="button"
            classNameName="flex absolute top-1/2 left-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
            data-carousel-prev>
            <svg classNameName="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
        </button>
        <button type="button"
            classNameName="flex absolute top-1/2 right-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
            data-carousel-next>
            <svg classNameName="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
        </button>
    </div>

    <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>

</div>
*/


<div className="bg-white dark:bg-gray-200 w-screen h-screen py-6 sm:py-8 lg:py-24">
    <div className="mx-full max-w-screen-3xl px-4 md:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/490473767.jpg?k=74a7ed032f543ea0cdb035e3eb05d96065a6914465eee55cc5ca4e1c9423dc66&o=&hp=1" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">npm,
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Ammenity 1</span>
            </a>

            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Ammenity 2</span>
            </a>

            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Photo by Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Ammenity 3</span>
            </a>

            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Ammenity 4</span>
            </a>
        </div>
    </div>
</div>


    );
};

export default Home;

