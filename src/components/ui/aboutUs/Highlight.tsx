import Container from "../Container";
const Highlight = () => {
  return (
    <section className="bg-[--color2] pt-16 pb-28">
      <Container className="px-10">
        <div className="text-center  ">
          <h3 className="text-[--color1] text-xl md:text-3xl  mb-3 font-serif">
            Help Is Our Goal
          </h3>
          <h2 className="text-3xl md:text-4xl font-semibold">
            What Make Us Different
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center text-center mt-10">
          <div className="hover:bg-[--icon_Hover] rounded-lg px-3 py-10 transition duration-700 hover:shadow-lg cursor-pointer">
            <img
              className="bg-[--icon1_Highlight] rounded-full p-3 mx-auto "
              width="80"
              height="80"
              src="https://img.icons8.com/dotty/80/ec491e/graduation-cap.png"
              alt="graduation-cap"
            />

            <h3 className="text-[--color8] font-semibold text-xl my-3">
              We Educate
            </h3>
            <p className="text-[--color6] font-medium">
              We help local nonprofits access the funding, tools, training, and
              support they need
            </p>
          </div>
          <div className="hover:bg-[--icon_Hover] rounded-lg px-3 py-10 transition duration-700 hover:shadow-lg cursor-pointer">
            <img
              className="bg-[--icon2_Highlight] rounded-full p-3 mx-auto "
              width="80"
              height="80"
              src="https://img.icons8.com/dotty/80/ffb00c/hand-with-pen.png"
              alt="hand-with-pen"
            />

            <h3 className="text-[--color8] font-semibold text-xl my-3">
              We Help
            </h3>
            <p className="text-[--color6] font-medium">
              We help local nonprofits access the funding, tools, training, and
              support they need
            </p>
          </div>
          <div className="hover:bg-[--icon_Hover] rounded-lg px-3 py-10 transition duration-700 hover:shadow-lg cursor-pointer">
            <img
              className="bg-[--icon3_Highlight] rounded-full p-3 mx-auto "
              width="80"
              height="80"
              src="https://img.icons8.com/ios/50/33b8e4/bell.png"
              alt="bell"
            />

            <h3 className="text-[--color8] font-semibold text-xl my-3">
              We Build
            </h3>
            <p className="text-[--color6] font-medium">
              We help local nonprofits access the funding, tools, training, and
              support they need
            </p>
          </div>
          <div className="hover:bg-[--icon_Hover] rounded-lg px-3 py-10 transition-ease duration-500 hover:shadow-lg cursor-pointer">
            <img
              className="bg-[--icon4_Highlight] rounded-full p-3 mx-auto "
              width="80"
              height="80"
              src="https://img.icons8.com/carbon-copy/100/2fd388/books.png"
              alt="books"
            />

            <h3 className="text-[--color8] font-semibold text-xl my-3">
              We Donate
            </h3>
            <p className="text-[--color6] font-medium">
              We help local nonprofits access the funding, tools, training, and
              support they need
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Highlight;
