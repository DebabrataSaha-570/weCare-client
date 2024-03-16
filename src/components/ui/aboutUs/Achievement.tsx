import Container from "../Container";

const Achievement = () => {
  return (
    <Container className="p-14 bg-[--icon_Hover] rounded-lg mt-[-40px] shadow-lg mb-10 ">
      <section className="grid grid-cols-1 gap-10 md:grid-cols-4 mx-10">
        <div className="flex gap-5">
          <h1 className="text-5xl text-primary font-bold">35</h1>
          <div className="font-bold text-base">
            <h2>YEARS OF</h2>
            <h2>FOUNDATION</h2>
          </div>
        </div>
        <div className="flex gap-5">
          <h1 className="text-5xl text-primary font-bold">60+</h1>
          <div className="font-bold text-base">
            <h2>MONTHLY</h2>
            <h2>DONORS</h2>
          </div>
        </div>
        <div className="flex gap-5">
          <h1 className="text-5xl text-primary font-bold">1.5k</h1>
          <div className="font-bold text-base">
            <h2>INCREDIBLE</h2>
            <h2>VOLUNTEERS</h2>
          </div>
        </div>
        <div className="flex gap-5">
          <h1 className="text-5xl text-primary font-bold">785</h1>
          <div className="font-bold text-base">
            <h2>SUCCESSFUL</h2>
            <h2>CAMPAINS</h2>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Achievement;
