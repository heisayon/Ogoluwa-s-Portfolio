import { images } from "../constants";
import { Carousel } from "flowbite-react";
function Works() {
  return (
    <>
      <h1 className="text-center 2xl:mb-20 mb-10 mt-[-50px] text-4xl font-semibold">
        Some Works?
      </h1>
      <a
        href="https://www.behance.net/kingdavid34"
        className="flex justify-end items-center font-bold"
      >
        see more<b> &rarr;</b>
      </a>
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
        <button className="px-5 py-3 rounded-lg active:scale-90 font-semibold transition-all bg-gradient-to-r from-[#647DEE] to-[#7F53AC] custom-shadow-dark hover:opacity-75">
          <a
            href="https://drive.google.com/file/d/18RpZi_ruQSTvdg6GzMKgXnrUUMP_rGTi/view?pli=1"
            target="_blank"
          >
            View Resume
          </a>
        </button>
      </div>
    </>
  );
}

export default Works;
