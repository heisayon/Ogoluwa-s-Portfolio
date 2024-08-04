import Experience from "../Components/Experience";
import FeaturedWork from "../Components/FeaturedWork";
import HomeContact from "../Components/HomeContact";
import Testimonials from "../Components/Testimonials";
function Home() {
  return (
    <>
      <div className="h-[100vh]">
        <h1 className="w-[500px] max-sm:w-[70%] font-medium text-2xl">
          Hey there, need creative mind wobbling and engaging visuals? Connect
          now, let&rsquo;s get creative.
        </h1>
        <Experience />
      </div>
      <h1 className="text-5xl mb-10 font-semibold bg-gradient-to-r from-[#647DEE] to-[#7F53AC] text-transparent bg-clip-text">
        Featured Works
      </h1>
      <section className="grid justify-center items-center">
        <FeaturedWork />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <HomeContact />
      </section>
    </>

  );
}

export default Home;
