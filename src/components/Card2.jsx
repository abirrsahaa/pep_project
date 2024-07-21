import vector from "../assets/Vector.png";

const Card2 = () => {
  return (
    <div className="w-full p-1  h-[296px]  my-[10px] flex flex-col justify-center items-center rounded-md  bg-[#F8FAFC]">
      <div className="w-full h-full my-[12px]  flex-col items-center justify-center gap-[4px]">
        <div className="w-[40px]  h-[40px]  mb-[10px]  flex flex-col justify-center items-center">
          <img
            src={vector}
            className="w-[29.33px]  h-[21.33px]  object-cover object-center"
          />
        </div>
        <div className="w-full h-[204px]  ">
          <div className="w-full h-[32px] mb-[4px]  font-bold leading-8  text-xl text-[#3940A0] text-left">
            OOP Foundations
          </div>
          <div className="w-full h-[168px]  font-normal leading-6 tracking-wide  text-base text-[#191D23] text-left ">
            Begin your journey by mastering fundamental OOP concepts in Java,
            from classes and objects to inheritance. Advance to handling errors
            effectively and constructing scalable systems using abstract classes
            and interfaces, ensuring smooth application operation.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
