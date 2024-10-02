import { useEffect, useRef } from "react";
import KeenSlider, { KeenSliderInstance } from "keen-slider";
import "keen-slider/keen-slider.min.css";

const Display2 = () => {
  // Refs for the sliders
  const imageSliderRef = useRef<HTMLDivElement | null>(null);
  const textSliderRef = useRef<HTMLDivElement | null>(null);
  const sliderWrapperRef = useRef<HTMLDivElement | null>(null);

  // Slider instances
  const imageSliderInstance = useRef<KeenSliderInstance | null>(null);
  const textSliderInstance = useRef<KeenSliderInstance | null>(null);

  useEffect(() => {
    // Initialize Image Slider
    if (imageSliderRef.current) {
      imageSliderInstance.current = new KeenSlider(imageSliderRef.current, {
        loop: true,
        defaultAnimation: {
          duration: 1000,
        },
        detailsChanged: (s) => {
          s.slides.forEach((element, idx) => {
            element.style.opacity = String(s.track.details.slides[idx].portion);
          });
        },
        renderMode: "custom",
      });

      // Auto play functionality
      const autoplayDelay = 10000;
      let timeout: ReturnType<typeof setTimeout>;
      let mouseOver = false;

      function clearNextTimeout() {
        clearTimeout(timeout);
      }

      function nextTimeout() {
        clearTimeout(timeout);
        if (mouseOver) return;
        timeout = setTimeout(() => {
          imageSliderInstance.current?.next();
        }, autoplayDelay);
      }

      if (imageSliderInstance.current) {
        imageSliderInstance.current.on("created", () => {
          if (imageSliderRef.current) {
            imageSliderRef.current.addEventListener("mouseover", () => {
              mouseOver = true;
              clearNextTimeout();
            });
            imageSliderRef.current.addEventListener("mouseout", () => {
              mouseOver = false;
              nextTimeout();
            });
          }
          nextTimeout();
        });

        imageSliderInstance.current.on("dragStarted", clearNextTimeout);
        imageSliderInstance.current.on("animationEnded", nextTimeout);
        imageSliderInstance.current.on("updated", nextTimeout);
      }
    }

    // Initialize Text Slider
    if (textSliderRef.current) {
      textSliderInstance.current = new KeenSlider(textSliderRef.current, {
        defaultAnimation: {
          duration: 1000,
        },
        loop: true,
        slides: {
          origin: "center",
          perView: 2,
          spacing: 15,
        },
        detailsChanged: (s) => {
          const slides = s.track.details.slides;
          s.slides.forEach((element, idx) => {
            scaleElement(element.querySelector("div") as HTMLElement, slides[idx].portion);
          });
        },
        initial: 0,
      });

      // Sync sliders
      if (imageSliderInstance.current && textSliderInstance.current) {
        textSliderInstance.current.on("slideChanged", (slider) => {
          const nextId = slider.track.details.rel;
          imageSliderInstance.current?.moveToIdx(nextId);
        });

        imageSliderInstance.current.on("slideChanged", (slider) => {
          const nextId = slider.track.details.rel;
          textSliderInstance.current?.moveToIdx(nextId);
        });

        if (sliderWrapperRef.current) {
          sliderWrapperRef.current.addEventListener("click", () => {
            textSliderInstance.current?.next();
          });
        }
      }
    }

    return () => {
      // Cleanup slider instances
      imageSliderInstance.current?.destroy();
      textSliderInstance.current?.destroy();
    };
  }, []);

  const scaleElement = (element: HTMLElement | null, portion: number) => {
    if (element) {
      const scale_size = 0.75;
      const scale = 1 - (scale_size - scale_size * portion);
      const scale_style = `scale(${scale})`;
      
      // Apply the standard transform property
      element.style.transform = scale_style;
  
      // Optionally, use setProperty to add vendor-prefixed properties
      element.style.setProperty("-webkit-transform", scale_style);
  
      const opacity = portion === 1 ? 1 : 0.2;
      element.style.opacity = String(opacity);
    }
  };
  
  return (
    <main className="min-h-[100dvh] py-[100px] bg-gray-500 flex flex-col justify-center ">
      <section className="container p-10">
        {/* Desktop Version */}
        <div
          ref={sliderWrapperRef}
          className="hidden xl:grid xl:grid-cols-[546px_1fr] 2xl:grid-cols-[690px_1fr]"
        >
          {/* Left Side - Image Slider */}
          <div
            ref={imageSliderRef}
            id="image-slider"
            className="relative z-[1] overflow-hidden bg-blue-700 rounded-xl"
          >
            {/* For Sizing */}
            <div className="flex invisible">
              <img
                className="block w-full h-full object-contain"
                src="https://picsum.photos/id/70/600/400"
                alt="Image 1"
              />
              <img
                className="block w-full h-full object-contain"
                src="https://picsum.photos/id/83/600/400"
                alt="Image 2"
              />
              <img
                className="block w-full h-full object-contain"
                src="https://picsum.photos/id/94/600/400"
                alt="Image 3"
              />
            </div>

            {/* Image Slider Items */}
            <div className="keen-slider__slide absolute top-0 w-full h-full flex flex-col justify-center opacity-0">
              <div className="rounded-xl overflow-hidden">
                <img
                  className="block w-full h-full object-contain"
                  src="https://picsum.photos/id/70/600/400"
                  alt="Image 1"
                />
              </div>
            </div>
            <div className="keen-slider__slide absolute top-0 w-full h-full flex flex-col justify-center opacity-0">
              <div className="rounded-xl overflow-hidden">
                <img
                  className="block w-full h-full object-contain"
                  src="https://picsum.photos/id/83/600/400"
                  alt="Image 2"
                />
              </div>
            </div>
            <div className="keen-slider__slide absolute top-0 w-full h-full flex flex-col justify-center opacity-0">
              <div className="rounded-xl overflow-hidden">
                <img
                  className="block w-full h-full object-contain"
                  src="https://picsum.photos/id/94/600/400"
                  alt="Image 3"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Text Slider */}
          <div ref={textSliderRef} id="text-slider" className="keen-slider relative">
            <div className="keen-slider__slide xl:w-[332px] 2xl:w-[380px] absolute h-full flex flex-col justify-center">
              <div className="text-lg text-white font-medium">
                1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                recusandae nisi mollitia vel facere dolorem ad sapiente nesciunt,
                assumenda quod quisquam a qui voluptatem magni beatae iste
                molestias impedit voluptatum.
              </div>
            </div>
            <div className="keen-slider__slide xl:w-[332px] 2xl:w-[380px] absolute h-full flex flex-col justify-center">
              <div className="text-lg text-white font-medium">
                2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                recusandae nisi mollitia vel facere dolorem ad sapiente nesciunt,
                assumenda quod quisquam a qui voluptatem magni beatae iste
                molestias impedit voluptatum.
              </div>
            </div>
            <div className="keen-slider__slide xl:w-[332px] 2xl:w-[380px] absolute h-full flex flex-col justify-center">
              <div className="text-lg text-white font-medium">
                3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                recusandae nisi mollitia vel facere dolorem ad sapiente nesciunt,
                assumenda quod quisquam a qui voluptatem magni beatae iste
                molestias impedit voluptatum.
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Version - List */}
        <div className="relative xl:hidden flex flex-col gap-6 [&>*:nth-child(2)>img]:order-1">
          <div className="grid grid-cols-2 gap-3 md:gap-5 lg:md:gap-8">
            <img
              className="block w-full h-full object-cover rounded-md"
              src="https://picsum.photos/id/70/600/400"
              alt="Image 1"
            />
            <p className="m-0 text-sm md:text-md lg:text-lg text-white">
              1 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam doloremque totam eius laborum animi delectus ullam nobis
              repellendus. Corrupti veritatis molestias temporibus obcaecati? Quo
              pariatur minus commodi, error soluta voluptatum.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-5 lg:md:gap-8">
            <img
              className="block w-full h-full object-cover rounded-md"
              src="https://picsum.photos/id/83/600/400"
              alt="Image 2"
            />
            <p className="m-0 text-sm md:text-md lg:text-lg text-white">
              2 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam doloremque totam eius laborum animi delectus ullam nobis
              repellendus. Corrupti veritatis molestias temporibus obcaecati? Quo
              pariatur minus commodi, error soluta voluptatum.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-5 lg:md:gap-8">
            <img
              className="block w-full h-full object-cover rounded-md"
              src="https://picsum.photos/id/94/600/400"
              alt="Image 3"
            />
            <p className="m-0 text-sm md:text-md lg:text-lg text-white">
              3 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam doloremque totam eius laborum animi delectus ullam nobis
              repellendus. Corrupti veritatis molestias temporibus obcaecati? Quo
              pariatur minus commodi, error soluta voluptatum.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Display2;