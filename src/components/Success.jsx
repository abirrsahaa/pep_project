import Caroussel from "./Caroussel";

const Success = () => {
  return (
    <div className="w-[375px]  flex flex-col justify-center items-center mt-[50px] ">
      <h1 className="w-[190px] outline h-[36px] font-bold text-xl leading-9 tracking-tighter text-[#000000] text-center">
        Success Stories
      </h1>

      <Caroussel />
    </div>
  );
};

export default Success;
