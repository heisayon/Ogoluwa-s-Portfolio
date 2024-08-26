import Experience from "../Components/Experience";
import FeaturedWork from "../Components/FeaturedWork";
import HomeContact from "../Components/HomeContact";
import Testimonials from "../Components/Testimonials";
function Home() {
  return (
    <>
      <div className="h-[100vh] mt-[250px]">
        <h1 className="w-[500px] max-sm:w-[70%] font-medium text-2xl">
          Creativity lies in the mind, I&rsquo;m crafted with potentials to make
          your ideas a reality with mind wobbling and engaging visuals. <br />
          Let&rsquo;s get Potential! ⚡
        </h1>
        <Experience />
      </div>
      <h1 className="text-5xl inline-block mb-10 font-semibold bg-gradient-to-r from-[#647DEE] to-[#7F53AC] text-transparent bg-clip-text">
        Featured Works
      </h1>
      <section className="grid justify-center items-center">
        <FeaturedWork />
      </section>
      <section>
        <Testimonials />
      </section>
      <section className="mt-[130px]">
        <h1 className="text-5xl font-semibold bg-gradient-to-r from-[#647DEE] to-[#7F53AC] inline-block text-transparent bg-clip-text mb-30">
          Contact
        </h1>
        <HomeContact />
      </section>
  
    </>
  );
}

export default Home;
