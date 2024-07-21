import Card3 from "./Card3";

const Learn = () => {
  return (
    <div className="max-w-[335px]  mt-[70px] flex   flex-col justify-center items-center ">
      {/* header section */}
      <div className="w-full h-[232px]  flex flex-col justify-center items-center gap-1">
        <h1 className="w-full h-[108px] text-2xl font-semibold leading-9 text-center text-[#231F20] tracking-tighter">
          Learn by Building: Hands-On Projects for Real-World Mastery
        </h1>

        <p className="w-full h-[120px] text-base font-normal leading-6 text-center text-[#231F20] tracking-tight">
          Dive into practical, real-world projects designed to transform your
          theoretical knowledge into tangible skills, preparing you for the
          challenges of backend engineering.
        </p>
      </div>

      {/* cards section < */}

      <div className="w-full min-h-[1248px] mt-[20px] flex flex-col justify-start items-center  ">
        <Card3 /> <Card3 /> <Card3 />{" "}
      </div>

      {/* download button for curriculum */}
    </div>
  );
};

export default Learn;
