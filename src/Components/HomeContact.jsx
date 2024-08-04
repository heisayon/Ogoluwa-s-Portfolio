import Email from "/assets/images/email.png";
import Twitter from "../../public/assets/images/icons8-twitterx-150.png";
import Telegram from "../../public/assets/images/icons8-telegram-150.png";
import Discord from "../../public/assets/images/icons8-discord-150.png";
import Instagram from "../../public/assets/images/icons8-instagram-192.png";
function HomeContact() {
  return (
    <div className="mt-[150px] mb-14">
      <h1 className="text-5xl font-semibold bg-gradient-to-r from-[#647DEE] to-[#7F53AC] inline-block text-transparent bg-clip-text mb-30">
        Contact
      </h1>
      <section className="grid justify-center gap-10">
        <div className="grid grid-cols-2 items-center  max-sm:grid-cols-1">
          <img src={Email} />
          <div className="text-white border-2 border-black p-4 h-96 rounded-2xl flex items-center flex-col bg-gradient-to-r from-[#4c73ff] to-[#389bff] drop-shadow-[14px_11px_0_#fff] justify-center w-[300px] content-center">
            {/* #4c73ff 2.34%, #389bff */}
            <h1 className="text-2xl font-bold  flex justify-center items-center">
              Social Links
            </h1>
            <section className="flex flex-col items-center">
              <div className="flex justify-center items-center gap-2">
                <img
                  src={Discord}
                  alt="Discord"
                  className="w-[40px] h-[40px]"
                />
              </div>
              <div className="flex justify-center items-center gap-2">
                <img
                  src={Telegram}
                  alt="Telegram"
                  className="w-[40px] h-[40px]"
                />
              </div>
              <div className="flex justify-center items-center gap-2">
                <img src={Twitter} alt="X" className="w-[40px] h-[40px]" />
              </div>
              <div className="flex justify-center items-center gap-2">
                <img src={Instagram} alt="X" className="w-[40px] h-[40px]" />
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeContact;
