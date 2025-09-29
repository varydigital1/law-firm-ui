import Slide from '../components/slide/Slide';
import { BsChevronRight } from "react-icons/bs";
import '../components/home/Style.css';
import TeamSlide from '../components/team/TeamSlide';
const HomePage = () => {
  return (
    <div>
      <Slide />
      <div className=' font-[Poppins] text-lg  text-[#555555]   overflow-hidden flex items-center justify-center flex-col'>
        <div className='container mx-auto  justify-between items-center px-4 mt-15 md:px-0'>
          <h1 className="font-[Poppins] font-bold text-center mt-10 
          2xl:text-2xl text-[#D4AF37]
          xl:text-2xl
          lg:text-xl
          md:text-lg
          sm:text-lg
          text-lg
          " style={{fontWeight: 'bold'}}>
            Welcome to 
          </h1>
          <h1 className="font-[Poppins] font-bold text-center mt-10 
          2xl:text-5xl text-[#001A3B]
          xl:text-5xl
          lg:text-4xl
          md:text-3xl
          sm:text-3xl
          text-2xl
          " style={{fontWeight: 'bold'}}>
            GCL Law Group 
          </h1>
          <p className="font-[Poppins] font-normal 2xl:text-base
          xl:text-base
          lg:text-sm
          md:text-sm
          sm:text-sm
          text-xs
          text-center mt-9 text-[#555555] max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam minima nam vero ratione exercitationem vitae,  
            consequuntur debitis veniam. Voluptate velit quos molestias? Delenitinostrum excepturi. Aliquid porro atque blanditiis soluta?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam minima nam vero ratione exercitationem vitae, consequuntur debitis veniam. Voluptate velit quos molestias? Delenitinostrum excepturi. Aliquid porro atque blanditiis soluta?
          </p>
          <div className="flex justify-center my-6">
            <button
              className=" flex  mt-10 py-3 bg-[#001A3B]  rounded-lg  transition-colors duration-200 
              sm:text-lg md:text-xl  text-lg font-[Inria_Serif] font-bold items-center justify-center btn-more
              2xl:w-[148px] 2xl:h-[52px] 2xl:p-[15px] items-center justify-center font-[Inria_Serif]
                            xl:w-[146px] xl:h-[50px] xl:p-[15px]
                            lg:w-[144px] lg:h-[48px] lg:p-[14px]
                            md:w-[140px] md:h-[46px] md:p-[13px]
                            sm:w-[130px] sm:h-[40px] sm:p-[10px]
                            w-[80px] h-[25px]  btn-more"
            >
              Show more <BsChevronRight className="w-3 h-3 sm:w-5 sm:h-5 ml-1 mt-[1px] text-white"/>
            </button>
          </div>
        </div>
        {/* <TeamOut/> */}
        
      </div>
      <section
          className="relative w-full bg-[#F5F5F5] bg-no-repeat bg-top bg-cover h-auto 2xl:pb-2 xl:pb-2 lg:pb-2 md:pb-2 sm:pb-2 2xl:pl-10 xl:pl-10 lg:pl-10 md:pl-10 sm:pl-10 
          background-image
          "
          >
          <div className=' justify-between items-right mt-25 mt-15 md:px-0'>
              <TeamSlide  />
          </div>
          {/* <TeamOut/> */}
      </section>
      <div className=' font-[Poppins] text-lg  text-[#555555]   overflow-hidden flex items-center justify-center flex-col'>
        <div className='container mx-auto  justify-between items-center px-4 mt-15 md:px-0'>
          <h1 className="font-[Poppins] font-bold text-center mt-10 
          2xl:text-2xl text-[#D4AF37]
          xl:text-2xl
          lg:text-xl
          md:text-lg
          sm:text-lg
          text-lg
          " style={{fontWeight: 'bold'}}>
            Welcome to 
          </h1>
          <h1 className="font-[Poppins] font-bold text-center mt-10 
          2xl:text-5xl text-[#001A3B]
          xl:text-5xl
          lg:text-4xl
          md:text-3xl
          sm:text-3xl
          text-2xl
          " style={{fontWeight: 'bold'}}>
            GCL Law Group 
          </h1>
          <p className="font-[Poppins] font-normal 2xl:text-base
          xl:text-base
          lg:text-sm
          md:text-sm
          sm:text-sm
          text-xs
          text-center mt-9 text-[#555555] max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam minima nam vero ratione exercitationem vitae,  
            consequuntur debitis veniam. Voluptate velit quos molestias? Delenitinostrum excepturi. Aliquid porro atque blanditiis soluta?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam minima nam vero ratione exercitationem vitae, consequuntur debitis veniam. Voluptate velit quos molestias? Delenitinostrum excepturi. Aliquid porro atque blanditiis soluta?
          </p>
          <div className="flex justify-center my-6">
            <button
              className=" flex  mt-10 py-3 bg-[#001A3B]  rounded-lg  transition-colors duration-200 
              sm:text-lg md:text-xl  text-lg font-[Inria_Serif] font-bold items-center justify-center btn-more
              2xl:w-[148px] 2xl:h-[52px] 2xl:p-[15px] items-center justify-center font-[Inria_Serif]
                            xl:w-[146px] xl:h-[50px] xl:p-[15px]
                            lg:w-[144px] lg:h-[48px] lg:p-[14px]
                            md:w-[140px] md:h-[46px] md:p-[13px]
                            sm:w-[130px] sm:h-[40px] sm:p-[10px]
                            w-[80px] h-[25px]  btn-more"
            >
              Show more <BsChevronRight className="w-3 h-3 sm:w-5 sm:h-5 ml-1 mt-[1px] text-white"/>
            </button>
          </div>
        </div>
        {/* <TeamOut/> */}
        
      </div>
    </div>
  );
};

export default HomePage;
