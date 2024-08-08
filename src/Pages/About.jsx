import Xpfp from "/assets/images/twitterpfp.jpg";

function About() {
  return (
    <>
      <div className="grid grid-cols-3 md:gap-10 max-md:grid-cols-1 justify-center place-content-center">
        <div className="md:place-self-start place-self-center mb-5">
          <img src={Xpfp} alt="My profile Picture" className="rounded-full" />
        </div>
        <div className=" col-span-2 border-2 rounded-2xl px-5 py-6 border-[#647DEE] shadow-[1px_0px_11px_3px_#7F53AC]">
          <h1 className=" text-center font-semibold text-2xl m-3">About Me</h1>
          <section>
            <h1>
              Hey there, I&rsquo;m Ogoluwa Odejimi, a passionate graphic
              designer with over 3 years of experience in creating mind wobbling
              and engaging visuals. I am currently pursuing a degree in Computer
              Science at University of Uyo. I have a certification in Embedded
              Systems and Robotics from LASkill and have served as a community
              moderator, collab manager and shiller on both Discord and
              Telegram.
            </h1>
            <h1>
              With over 3 years of experience as a graphic designer and 2 years
              in the Web3 space, I have moderated crypto project communities and
              collaborated on innovative projects and initiatives.
            </h1>
            <ul className="list-disc px-6">
              <li>
                {" "}
                I create visual concepts to communicate ideas that inspire,
                inform and captivate consumers.{" "}
              </li>
              <li>
                {" "}
                Use digital illustration and photo editing software to create
                designs.{" "}
              </li>
              <li>
                {" "}
                I review designs for errors before printing or publishing them
                and ensure projects are completed with high quality and on
                schedule.
              </li>
              <li>
                {" "}
                Proficient with Adobe Photoshop, Canva, Corel Draw and Pixellab.
                Community Management.{" "}
              </li>
              <li>
                {" "}
                Creating and overseeing online communities on platforms such as
                Discord and Telegram.{" "}
              </li>
              <li>
                {" "}
                Executing involvement tactics and overseeing conversations.
                Collaboration.{" "}
              </li>
              <li>
                {" "}
                Partnering with influencers and key stakeholders to promote
                projects.{" "}
              </li>
              <li>
                {" "}
                Volunteering in tech events to increase exposure and learn new
                technologies. Shilling.{" "}
              </li>
              <li>
                {" "}
                Creating and executing marketing campaigns for Web3 projects.{" "}
              </li>
              <li>
                {" "}
                Leveraging social media and forums to increase visibility.
              </li>
              Technical Skills:
              <li>
                {" "}
                Proficient in tools like Discord, Telegram, and various social
                media and crypto platforms.
              </li>
              <l1>
                Basic understanding of blockchain technology and smart
                contracts.
              </l1>
              <li>Basic knowledge of embedded systems and robotics.</li>
              <li> Core knowledge of Cybersecurity.</li>
            </ul>
            <h1>The Site is yours, Explore.</h1>
          </section>
        </div>
      </div>
    </>
  );
}

export default About;
