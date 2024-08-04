// import { Typewriter } from "react-simple-typewriter";
import Typewriter from "typewriter-effect";
function Experience() {
  return (
    <>
      <div className="mt-12 grid grid-cols-3 max-md:grid-cols-1">
        <h1 className="md:col-span-2  text-6xl font-semibold max-md:text-4xl max-md:w-full">
          <Typewriter
            options={{
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(1000)
                .typeString(`Welcome to my World!`)
                .pauseFor(300)
                .deleteAll()
                .typeString("I am od")
                .deleteChars(2)
                .typeString(
                  "<span style='color: #525CEB'>Odejimi Ogoluwa.</span>"
                )
                .pauseFor(1000)
                .deleteChars(16)
                .typeString(
                  `a <span style='color: #EF5A6F'>Passionate</span> Graphics Designer`
                )
                .pauseFor(1200)
                .deleteChars(28)
                .typeString(
                  `<span style='color: #F4CE14'>Collab Manager</span>`
                )
                .pauseFor(1200)
                .deleteChars(15)
                .typeString(
                  `<span style='color : #525CEB'>Community Moderator</span>`
                )
                .pauseFor(1500)
                .deleteAll()
                .start();
            }}
          />
        </h1>
        <div className="md:place-self-end max-md:mt-[100px]">
          <span className=" text-[#cccccc70]">scroll to explore.</span>
        </div>
      </div>
    </>
  );
}

export default Experience;
