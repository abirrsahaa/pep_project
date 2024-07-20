import Card2 from "./Card2";


const Gett = () => {
  return (<div className='max-w-[335px] mt-[100px]   flex-col justify-center items-center '>


    {/* heading portion of this section */}
    <div className="w-full  h-[100px] flex flex-col justify-center items-center">
        <div className="w-full h-[72px] flex justify-center items-center ">
            <h1 className="w-full h-full text-[#0F172A] font-bold text-2xl leading-8">Get the Programming Pathshala Advantage</h1>
        </div>
        <div className="w-full h-[24px] font-normal flex flex-col justify-center items-center text-base leading-4 text-[#0F172A]">Your Learning Outcomes will be:</div>
    </div>

    {/* cards section of this section  */}
    <div className='w-full  flex  flex-col items-center justify-start gap-[12px] min-h-[1300px]  '>
    {/* need to pass props for increasing the reusability */}
    <Card2/><Card2/><Card2/><Card2/>
  </div>



  </div>);
};

export default Gett;
