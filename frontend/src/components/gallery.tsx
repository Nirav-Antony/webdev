const Gallery = () => {
    return (
      <section className="flex flex-col lg:h-full w-screen items-center px-10">
  
        {/* Image Cards */}
        <div className="flex flex-wrap mx-auto md:flex-nowrap mt-6 border-t pt-12">
          <div className="relative flex flex-col items-start m-1 transition ease-in-out duration-500 delay-150 transform md:w-96 md:-ml-32 md:hover:-translate-x-32 md:hover:-translate-y-8 shrink-0">
            <article
              className="mx-auto rounded-3xl overflow-hidden bg-cover ring-2 ring-inset ring-white/50 bg-center min-h-[100px] relative transform duration-500 group"
              style={{ backgroundImage: "url('https://images.pexels.com/photos/28320061/pexels-photo-28320061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
            >
              <div className="relative h-full group-hover:bg-opacity-0 min-h-[150px] flex flex-wrap flex-col pt-[30rem] transform duration-500">
                <div className="group-hover:bg-black/30 duration-500 group-hover:backdrop-blur p-8 lg:p-10 h-full justify-end flex flex-col">
                  <p className="opacity-0 text-white text-sm 2xl:text-lg group-hover:opacity-80 transform duration-500">
                    Immerse yourself in a seamless experience where every touchpoint anticipates your needs. Description one.
                  </p>
                </div>
              </div>
            </article>
          </div>
  
          {/* Repeat for other cards */}
          <div className="relative flex flex-col items-start m-1 transition ease-in-out duration-500 delay-150 transform md:w-96 md:-ml-32 md:hover:-translate-x-32 md:hover:-translate-y-8 shrink-0">
            <article
              className="mx-auto rounded-3xl overflow-hidden bg-cover ring-2 ring-inset ring-white/50 bg-center min-h-[150px] relative transform duration-500 group"
              style={{ backgroundImage: "url('https://images.pexels.com/photos/28457555/pexels-photo-28457555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
            >
              <div className="relative h-full group-hover:bg-opacity-0 min-h-[150px] flex flex-wrap flex-col pt-[30rem] transform duration-500">
                <div className="group-hover:bg-black/30 duration-500 group-hover:backdrop-blur p-8 lg:p-10 h-full justify-end flex flex-col">
                  <p className="opacity-0 text-white text-sm 2xl:text-lg group-hover:opacity-80 transform duration-500">
                    Engage with a platform where interaction is intuitive, ensuring your journey is fluid and responsive. Description two.
                  </p>
                </div>
              </div>
            </article>
          </div>

          <div className="relative flex flex-col items-start m-1 transition ease-in-out duration-500 delay-150 transform md:w-96 md:-ml-32 md:hover:-translate-x-32 md:hover:-translate-y-8 shrink-0">
            <article
              className="mx-auto rounded-3xl overflow-hidden bg-cover ring-2 ring-inset ring-white/50 bg-center min-h-[150px] relative transform duration-500 group"
              style={{ backgroundImage: "url('https://images.pexels.com/photos/28457554/pexels-photo-28457554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}
            >
              <div className="relative h-full group-hover:bg-opacity-0 min-h-[150px] flex flex-wrap flex-col pt-[30rem] transform duration-500">
                <div className="group-hover:bg-black/30 duration-500 group-hover:backdrop-blur p-8 lg:p-10 h-full justify-end flex flex-col">
                  <p className="opacity-0 text-white text-sm 2xl:text-lg group-hover:opacity-80 transform duration-500">
                    Engage with a platform where interaction is intuitive, ensuring your journey is fluid and responsive. Description two.
                  </p>
                </div>
              </div>
            </article>
          </div>
          
          <div className="relative flex flex-col items-start m-1 transition ease-in-out duration-500 delay-150 transform md:w-96 md:-ml-32 md:hover:-translate-x-32 md:hover:-translate-y-8 shrink-0">
            <article
              className="mx-auto rounded-3xl overflow-hidden bg-cover ring-2 ring-inset bg-center min-h-[150px] relative transform duration-500 group"
              style={{ backgroundImage: "url('https://images.pexels.com/photos/28457556/pexels-photo-28457556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}
            >
              <div className="relative h-full group-hover:bg-opacity-0 min-h-[150px] flex flex-wrap flex-col pt-[30rem] transform duration-500">
                <div className="group-hover:bg-black/30 duration-500 group-hover:backdrop-blur p-8 lg:p-10 h-full justify-end flex flex-col">
                  <p className="opacity-0 text-white text-sm 2xl:text-lg group-hover:opacity-80 transform duration-500">
                    Engage with a platform where interaction is intuitive, ensuring your journey is fluid and responsive. Description two.
                  </p>
                </div>
              </div>
            </article>
          </div>

          <div className="relative flex flex-col items-start m-1 transition ease-in-out duration-500 delay-150 transform md:w-96 md:-ml-32 md:hover:-translate-x-32 md:hover:-translate-y-8 shrink-0">
            <article
              className="mx-auto rounded-3xl overflow-hidden bg-cover ring-2 ring-inset bg-center min-h-[150px] relative transform duration-500 group"
              style={{ backgroundImage: "url('https://images.pexels.com/photos/28457557/pexels-photo-28457557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}
            >
              <div className="relative h-full group-hover:bg-opacity-0 min-h-[150px] flex flex-wrap flex-col pt-[30rem] transform duration-500">
                <div className="group-hover:bg-black/30 duration-500 group-hover:backdrop-blur p-8 lg:p-10 h-full justify-end flex flex-col">
                  <p className="opacity-0 text-white text-sm 2xl:text-lg group-hover:opacity-80 transform duration-500">
                    Engage with a platform where interaction is intuitive, ensuring your journey is fluid and responsive. Description two.
                  </p>
                </div>
              </div>
            </article>
          </div>

        </div>
  
        
      </section>
    );
  };
  
  export default Gallery;
  