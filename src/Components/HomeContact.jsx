import Email from "/assets/images/email.png";
import Twitter from "/assets/images/X.png";
import Telegram from "/assets/images/telegram.png";
import Discord from "/assets/images/discord.png";
import Instagram from "/assets/images/instagram.png";
import Facebook from '/assets/images/facebook.png'
function HomeContact() {
  return (
    <div className="mt-[150px] mb-14">
      <h1 className="text-5xl font-semibold bg-gradient-to-r from-[#647DEE] to-[#7F53AC] inline-block text-transparent bg-clip-text mb-30">
        Contact
      </h1>
      <section className="grid justify-center gap-10">
        <div className="grid grid-cols-2 max-sm:grid-cols-1">
          <img src={Email} />
          <div className="text-white p-4">
            {/* #4c73ff 2.34%, #389bff */}
            <h1 className="text-2xl font-bold  flex justify-center items-center mb-6">
              Social Links
            </h1>
            <section className="flex flex-col">
              <div className="mb-10 border-2 border-black bg-gradient-to-r from-[#4c73ff] to-[#389bff] drop-shadow-[8px_8px_0_#fff] p-2 flex items-center justify-center">
              <a href="https://discord.com/users/ogoluwa" target="_blank">
                <img
                  src={Discord}
                  alt="Discord"
                  className="w-[30px] h-[30px]"
                />
                </a>
              </div>
              <div className="mb-10 border-2 border-black bg-gradient-to-r from-[#4c73ff] to-[#389bff] drop-shadow-[8px_8px_0_#fff] p-2 flex items-center justify-center">
              <a href="https://t.me/OGoluwa" target="_blank">
                <img
                  src={Telegram}
                  alt="Telegram"
                  className="w-[30px] h-[30px]"
                />
                </a>
              </div>
              <div className="mb-10 border-2 border-black bg-gradient-to-r from-[#4c73ff] to-[#389bff] drop-shadow-[8px_8px_0_#fff] p-2 flex items-center justify-center">
              <a href="https://x.com/Ogoluwa_" target="_blank">
                <img src={Twitter} alt="X" className="w-[30px] h-[30px]" />
                </a>
              </div>
              <div className="mb-10 border-2 border-black bg-gradient-to-r from-[#4c73ff] to-[#389bff] drop-shadow-[8px_8px_0_#fff] p-2 flex items-center justify-center">
              <a href="https://www.instagram.com/ogoluwa_1/?igsh=azFxNXh1Mmllc3N4" target="_blank">
                <img src={Instagram} alt="X" className="w-[30px] h-[30px]" />
                </a>
              </div>
              <div className="mb-10 border-2 border-black bg-gradient-to-r from-[#4c73ff] to-[#389bff] drop-shadow-[8px_8px_0_#fff] p-2 flex items-center justify-center">
              <a href="https://web.facebook.com/OGthagreat1/" target="_blank">
                <img src={Facebook} alt="X" className="w-[30px] h-[30px]" />
                </a>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeContact;
