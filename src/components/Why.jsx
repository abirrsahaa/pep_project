import Cards1 from "./Cards1";
const Why = () => {
  return (
    <div className="max-w-[335px] flex   flex-col justify-center items-center ">
      {/* heading portion of why we should choose this course  */}
      <div className="w-full   min-h-[112px] flex flex-col justify-center items-center">
        <h1 className="w-full min-h-[38px] text-center tracking-tighter  font-bold text-2xl text-[#231F20] leading-9 ">
          Why Choose Our Course?
        </h1>

        <div className="w-full  min-h-[72px] flex justify-center items-center">
          <p className="text-center font-light text-base leading-6">
            Discover the key benefits of mastering Backend Engineering with the
            JAVA Spring Framework.
          </p>
        </div>
      </div>

      {/* section for the cards showing features  */}
      <div className="w-full mt-[20px] flex-col items-center justify-start gap-[12px] min-h-[1164px]  ">
        {/* need to pass props for increasing the reusability */}
        <Cards1 />
        <Cards1 />
        <Cards1 />
        <Cards1 />
        <Cards1 />
        <Cards1 />
      </div>
    </div>
  );
};

export default Why;
