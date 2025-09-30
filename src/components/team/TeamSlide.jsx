import React, { useEffect, useState } from "react";
import { fetchData } from '../config/Hepler';
import './style.css';
import '../home/Style.css';
import { BsChevronRight } from "react-icons/bs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function TeamSlide() {
  const [list, setList] = useState([]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
        getList();
   }, []);

  // Fetch data from API
    const getList = () => {
          // Fetch product data from API
          fetchData("api/teams", {}, "GET").then((res) => {
            setList(res.data);
          });
    }

  // Auto slide every 4s (jump 2 slides)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % list.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [list.length]);

  // Navigate manually
  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + list.length) % list.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % list.length);
  };

  return (
    <div className="py-10  w-full
    2xl:py-39 xl:py-35 lg:py-20 md:py-20 sm:py-20
    ">
      <div className=" mx-auto flex-col sm:flex-row gap-8 
      2xl:flex xl:flex lg:flex md:flex sm:flex">
        {/* Left Section */}
        <div className="sm:w-1/3  flex-col rounded-lg  2xl:w-[541px] 2xl:max-h-[418px] xl:max-h-full mt-[15px] lg:max-h-full
        md:max-h-[418px] sm:max-h-[418px]
         overflow-hidden team-out ">
          <h1 className="text-yellow-600 font-[Poppins] font-bold 
           2xl:text-2xl xl:text-2xl lg:text-lg
           md:text-lg sm:text-base text-base 2xl:mb-4 xl:mb-4 lg:mb-4 md:mb-0 sm:mb-4 mb-4
           " style={{fontWeight: 'bold'}}>Our Team</h1>
          <h1 className="font-[Poppins] font-normal 2xl:text-[48px]
           xl:text-[48px] 2xl:leading-normal xl:leading-snug  text-gray-800 xl:tracking-tight
           lg:text-[35px] lg:leading-snug
           md:text-[30px] md:leading-snug 
           sm:text-[25px] sm:leading-snug
           text-xs leading-snug">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam minima nam.
          </h1>
          <div className="flex  2xl:my-6 xl:my-2 lg:my-2 md:my-4 sm:my-2 my-2">
            <button
            className=" flex mt-10 py-3 bg-[#001A3B]  rounded-lg  transition-colors duration-200 
            sm:text-lg md:text-xl  text-lg font-[Inria_Serif] font-bold items-center justify-center btn-more
            2xl:w-[148px] 2xl:h-[52px] 2xl:p-[15px] items-center justify-center font-[Inria_Serif]
            xl:w-[146px] xl:h-[50px] xl:p-[15px]
            lg:w-[144px] lg:h-[48px] lg:p-[14px]
            md:w-[115px] md:h-[36px] md:p-[13px]
            sm:w-[130px] sm:h-[40px] sm:p-[10px]
            w-[80px] h-[25px]  btn-more"
            >
              Show more <BsChevronRight className="w-3 h-3 sm:w-5 sm:h-5 ml-1 mt-[1px] text-white"/>
            </button>
          </div>
        </div>

        {/* Slider Section */}
        <div className="sm:w-2/3 relative overflow-hidden  rounded-lg width-slide
        2xl:h-[498px] xl:h-[498px] lg:h-auto md:h-auto h-auto
         2xl:pt-8 xl:pt-8 lg:pt-8 md:pt-0 sm:pt-8 pt-8
         ">
          <div
            className="flex transition-transform duration-700 
            2xl:[transform:translateX(calc(-50%*var(--index)))]
            xl:[transform:translateX(calc(-75.5%*var(--index)))]
            lg:[transform:translateX(calc(-100%*var(--index)))]
            md:[transform:translateX(calc(-70.2%*var(--index)))]
            sm:[transform:translateX(calc(-50%*var(--index)))]
            [transform:translateX(calc(-50.5%*var(--index)))]
            " style={{ "--index": index }}
            // style={{ transform: `translateX(-${index * 50}%)` }} // 50% = 2 slides per view
          >
            {list.map((member, i) => (
              <div
                key={i}
                className="2xl:w-1/2 xl:w-2/3 flex-shrink-0 xl:mr-12 2xl:mr-0 md:mr-5 mr-2"
              >
                <div className="bg-[#001A3B] text-white rounded-2xl 2xl:p-6 xl:p-6 lg:p-6 md:p-3 sm:p-2 p-2
                2xl:h-[434px] xl:h-[434px] lg:h-[300px] md:h-[284px] sm:h-[234px] h-[205px]
                2xl:w-[405px] xl:w-[405px] lg:w-[271px] md:w-[255px] sm:w-[205px] w-[177px] 
                flex flex-col text-center justify-end ">
                  <div className="bg-white slide-image rounded-xl mb-4 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-xl hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="font-bold font-[Poppins] text-[24px]
                  slide-name
                  " 
                  >{member.name}</h4>
                  <p className="text-gray-400 font-[Poppins] text-[16px] font-bold
                  slide-title
                  ">{member.title_name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 
            2xl:w-[60px] xl:w-[60px] lg:w-[52px] md:w-[50px] sm:w-[60px] w-[35px]
            2xl:h-[60px] xl:h-[60px] lg:h-[52px] md:h-[50px] sm:h-[60px] h-[35px]
            justify-center items-center flex" 
          >
            <FaChevronLeft className="w-[24px] h-[24px]"  />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 
            2xl:w-[60px] xl:w-[60px] lg:w-[52px] md:w-[50px] sm:w-[60px] w-[35px]
            2xl:h-[60px] xl:h-[60px] lg:h-[52px] md:h-[50px] sm:h-[60px] h-[35px]
            justify-center items-center flex" 
          >
            <FaChevronRight className="w-[24px] h-[24px] text-[#001A3B]" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TeamSlide;
