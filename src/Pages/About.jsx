import Skills from "../Components/Skills";
import Xpfp from "/assets/images/twitterpfp.jpg";

function About() {
  return (
    <>
      <div className="grid grid-cols-3 md:gap-10 max-md:grid-cols-1 justify-center place-content-center">
        <div className="md:place-self-start place-self-center mb-5">
          <img src={Xpfp} alt="My profile Picture" className="rounded-full" />
        </div>
        <div className=" col-span-2 border-2 rounded-2xl px-5 py-6 border-[#6696ffff] shadow-[1px_0px_11px_3px_#6696ff]">
          <h1 className=" text-center font-semibold text-2xl m-3">About Me</h1>
          <section className="text-center">
            <h1>
              Hey there, I&rsquo;m Ogoluwa Odejimi. With over 3 years as a
              passionate graphic designer, creating mind wobbling and engaging
              visuals and 2 years in the Web3 space, I have worked with
              <b> Chain2055</b> as a graphic designer as well as moderating
              crypto project, communities and collaborated on innovative
              projects.{" "}
            </h1>

            <h1>
              I am currently pursuing a degree in Computer Science at University
              of Uyo. I have a certification in Embedded Systems and Robotics
              from <b>LASkill </b> and have served as a community moderator,
              collab manager and shiller on both Discord and Telegram. Send a
              message and let&rsquo;s get creative.
            </h1>
            <h1>The Site is yours, Explore.</h1>
          </section>
        </div>
      </div>
      <div className="mt-20">
      <h1 className="flex justify-center text-4xl font-semibold">Skills</h1>
      <section className="flex justify-center pt-10 w-full">
        <Skills />
      </section>
      </div>
    </>
  );
}

export default About;
