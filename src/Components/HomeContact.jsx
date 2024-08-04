import Email from "/assets/images/email.png";

function HomeContact() {
  return (
    <div className="mt-[150px]">
      <h1 className="text-5xl font-semibold bg-gradient-to-r from-[#647DEE] to-[#7F53AC] inline-block text-transparent bg-clip-text mb-30">
        Contact
      </h1>
      <section className="grid justify-center gap-10">
      <div className="grid grid-cols-2 items-center max-sm:grid-cols-1">
        <img src={Email} />
        <h1 className="border-2">Contact Info</h1>
      </div>
      </section>
    </div>
  );
}

export default HomeContact;
