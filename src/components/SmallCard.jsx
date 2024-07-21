const SmallCard = ({ text }) => {
  return (
    <div className="  rounded-md m-2 py-[6px] px-[15px] bg-[#FFFFFF] flex justify-center items-center ">
      <p className="  text-xs leading-2 tracking-tighter text-center text-[#191D23]">
        {text}
      </p>
    </div>
  );
};

export default SmallCard;
