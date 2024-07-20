
import vector from "../assets/Vector.png"
const Cards1 = () => {
  return (
    <div className="w-full h-[184px] p-[16px] my-[10px] flex justify-center items-center rounded-md  bg-[#F7F8F9]">
        <div className="w-[303px] h-[152px] my-[12px]  flex-col items-center justify-center gap-[4px]">
            <div className="w-[32px]  h-[32px]  mb-[10px] flex justify-center items-center">
                <img src={vector} className="w-[29.33px]  h-[21.33px]  object-cover object-center"/>
            </div>
            <div className="w-full h-[108px] my-[4px] ">
                <div className="w-full h-[32px]  font-bold leading-8  text-xl text-[#191D23] text-left">100+ Lectures</div>
                <div className="w-full h-[72px]  font-normal leading-7 tracking-wide  text-base text-[#191D23] text-left">Gain comprehensive knowledge through a series of detailed and engaging lectures.</div>
            </div>
        </div>
    </div>
  );
};

export default Cards1;
