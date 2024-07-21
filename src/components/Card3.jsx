import swiggy from "../assets/swiggy.png";
import SmallCard from "./SmallCard";
const Card3 = () => {
  return (
    <div className="w-full  h-[428px] rounded-lg bg-[#F1F5F9] p-3 flex flex-col items-center justify-center my-[10px]">
      <div className="w-[303px] relative h-[160px] rounded-xl bg-[#FFFFFF] flex items-center justify-center ">
        <img
          src={swiggy}
          className="w-[240.86px] h-[69.96px] top-[0.02px] left-[0.14px] object-cover object-center"
        ></img>
      </div>
      <div className="w-[303px] h-[228px] mt-[8px]  flex flex-col items-start justify-start">
        <div className="w-full p-1 h-[148px] flex flex-col items-center justify-center ">
          <h2 className="w-full h-[64px] text-lg leading-8 tracking-tighter text-[#191D23]  text-left font-bold">
            Swiggy Backend: End to End Project{" "}
          </h2>
          <p className="w-full h-[80px] text-base leading-6 tracking-tight text-[#191D23] text-left">
            This project will demonstrate your skills in web development,
            database integration, and security.
          </p>
        </div>
        <div className="w-full  flex flex-shrink-0  h-[88px] flex-wrap">
          <SmallCard text="Springdata JPA" />{" "}
          <SmallCard text="MySQL or PostgreSQL" />{" "}
          <SmallCard text="Microservice Architecture" />
        </div>
      </div>
    </div>
  );
};

export default Card3;
