const Card4 = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-between rounded-3xl bg-[#F8FAFC] border-[#E2E8F0] flex-shrink-0 flex-grow-0 transition ease-in-out delay-150">
      <div className="w-[303px] h-[268px] my-[15px] relative">
        <h1 className="mx-auto top-0 w-[48px] h-[92px] flex justify-center items-center text-[90px] tracking-tighter text-center leading-[135.48px] text-[#000000]">
          “
        </h1>
        <p className="w-full h-[168px] bottom-0 text-base tracking-normal leading-6 text-center">
          Fortunately, came across Programming Pathshala on Quora and I was
          amazed to see awesome reviews. I went through the website and checked
          the Curriculum, and moreover the fee of the course was in my budget.
        </p>
      </div>
      <div className="w-[155px] h-[148px] outline my-[15px] flex flex-col justify-between items-center">
        <div className="w-[80px] h-[80px] outline"></div>
        <div className="w-[155px] h-[56px] outline flex justify-between items-start">
          <div className="w-[131px] h-[56px] outline"></div>
          <div className="w-[20px] h-[20px] outline"></div>
        </div>
      </div>
    </div>
  );
};

export default Card4;
