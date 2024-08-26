import { images } from "../constants";
import { Carousel } from "flowbite-react";
function Works() {
  return (
    <>
      <h1 className="text-center 2xl:mb-20 mb-10 mt-[-50px] text-4xl font-semibold">
        Some Works?
      </h1>
      <div className="h-[100vh]">
        <Carousel slideInterval={5000}>
          {images.map((image, index) => {
            return (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className="max-w-[600px]"
              />
            );
          })}
        </Carousel>
      </div>
      <div className="flex justify-end mt-5">
        <button className="px-5 py-3 rounded-lg active:scale-90 transition-all bg-gradient-to-r from-[#647DEE] to-[#7F53AC] custom-shadow-dark">
          View Resume
        </button>
      </div>
    </>
  );
}

export default Works;
