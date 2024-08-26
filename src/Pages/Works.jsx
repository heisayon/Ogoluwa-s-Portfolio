import { images } from "../constants";
import { Carousel } from "flowbite-react";
function Works() {
  return (
    <>
    <h1 className="text-center 2xl:mb-20 mb-10 mt-[-50px] text-4xl font-semibold">Works</h1>
    <div className="h-[500px]  ">
      <Carousel slideInterval={5000}>
        {images.map((image, index) => {
          return( 
            <img key={index} src={image.src} alt={image.alt} className="max-w-[600px]" />);
        })} 
      </Carousel>
    </div>
    </>
  );
}

export default Works;
