import Work1 from "/assets/images/chain2055.png";
import Work2 from '/assets/images/d vs d complete.jpg'
import Work3 from '/assets/images/Queens place done.jpg'
import Work4 from '/assets/images/dainty sample.jpg'
function FeaturedWork() {
  return (
    <div className="grid lg:grid-cols-2 max-lg:grid-cols-1 gap-9">
      <div className="md:w-[500px] md:h-[500px] max-md:w-full max-md:h-full flex justify-center items-center overflow-hidden rounded-2xl cursor-pointer">
        <img src={Work1} alt="Chain 2055" className="w-[90%] h-full hover:scale-105 transition-all"/>
      </div>
      <div className="md:w-[500px] md:h-[500px] max-md:w-full max-md:h-full flex justify-center items-center overflow-hidden rounded-2xl cursor-pointer">
        <img src={Work2} alt="Featured Work" className="w-[90%] h-full hover:scale-105 transition-all"/>
      </div>
      <div className="md:w-[500px] md:h-[500px] max-md:w-full max-md:h-full flex justify-center items-center overflow-hidden rounded-2xl cursor-pointer">
        <img src={Work3} alt="Featured Work" className="w-[90%] h-full hover:scale-105 transition-all"/>
      </div>
      <div className="md:w-[500px] md:h-[500px] max-md:w-full max-md:h-full flex justify-center items-center overflow-hidden rounded-2xl cursor-pointer">
        <img src={Work4} alt="Featured Work" className="w-[90%] h-full hover:scale-105 transition-all"/>
      </div>
    </div>
  );
}

export default FeaturedWork;
