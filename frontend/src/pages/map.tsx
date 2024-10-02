
const MAP = () => {
    return (
        <div
            className="h-screen overflow-hidden flex items-center justify-center border border-black rounded"
            style={{ background: "" }}
        >
            <section className="text-gray-600 body-font relative ">
                <div className="absolute inset-0 bg-gray-300">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2759.658727064649!2d76.05509463612606!3d11.9920141168002!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1724650900150!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        //allowfullscreen="" l
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    >
                    </iframe>
                </div>
                <div className="container w-screen h-screen mx-auto border-black flex">
                    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md  ">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                            Feedback
                        </h2>
                        <p className="leading-relaxed mb-5 text-gray-600">
                            lorem ipsum dolor sit amet, consectetur adipiscing el
                        </p>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            ></textarea>
                        </div>
                        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Button
                        </button>
                        <p className="text-xs text-gray-500 mt-3">
                            Lorem ipsum
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MAP;
