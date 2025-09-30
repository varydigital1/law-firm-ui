import { useState, useEffect } from "react";
import { fetchData } from '../config/Hepler';
import { BsChevronRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "../slide/style.css";
const Slide = () => {
    const [list, setList] = useState([]);
    const [current, setCurrent] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        getList();
    }, []);
    useEffect(() => {
    if (list.length === 0) return;

    const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % list.length);
    }, 5000); // ប្ដូរ slide រៀងរាល់ 10000ms (10 វិនាទី)

    return () => clearInterval(interval);
    }, [list.length]);
    const getList = () => {
        // Fetch product data from API
        fetchData("api/banners", {}, "GET").then((res) => {
          setList(res.data);
        });
    }
    if (list.length === 0) {
        return (
            <div className="flex items-center justify-center h-[80vh] text-gray-500">
                Loading banners...
            </div>
        );
    }
    return (
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[717px] overflow-hidden bg-gray-300">
            {list.map((item, index) => (
                <div
                    key={item.id}
                    className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
                    index === current ? "opacity-100" : "opacity-0"
                    } drop-shadow-2xl`}
                    style={{
                    backgroundImage: `url(${item.image})`, // API must return imageUrl
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    }}
                >
                    <div className="flex flex-col items-center justify-center h-full bg-black/60 text-center text-white px-4 sm:px-6 md:px-10 shadow-2xl bg-gradient-to-t from-black/90 to-transparent">
                        <h2 className="font-[Inria_Serif] 2xl:text-7xl xl:text-6xl lg:text-5xl text-lg sm:text-3xl md:text-4xl font-normal text-sm">
                            {item.title}
                        </h2>
                        <h1 className="font-[Inria_Serif] sm:text-4xl 2xl:text-9xl md:text-6xl font-extrabold text-yellow-400 xl:text-8xl lg:text-7xl text-xl">
                            {item.highlight}
                        </h1>
                        <p className="font-[Inria_Serif] font-normal mt-4 max-w-lg sm:max-w-xl md:max-w-2xl text-sm sm:text-base md:text-lg 2xl:text-lg xl:text-lg lg:text-lg md:text-lg text-[10px] max-w-sm  sm:max-w-[600px] md:max-w-[800px] 2xl:max-w-[900px] pb-2">
                            {item.subtitle}
                        </p>
                        <button
                            className="flex  mt-6 px-2 sm:px-2 py-2 sm:py-2 bg-[#001A3B]
                            hover:bg-blue-700 rounded-sm 2xl:rounded-lg shadow-lg   md:text-lg font-[Inria_Serif] 
                            font-bold 
                            2xl:w-[148px] 2xl:h-[52px] 2xl:p-[15px] items-center justify-center
                            xl:w-[146px] xl:h-[50px] xl:p-[15px]
                            lg:w-[144px] lg:h-[48px] lg:p-[14px]
                            md:w-[115px] md:h-[36px] md:p-[13px]
                            sm:w-[130px] sm:h-[40px] sm:p-[10px]
                            w-[80px] h-[25px]  btn-more"
                            // style={{ fontSize: '18px', padding: '0' }}
                            onClick={() => {
                            if (item.buttonLink) {
                                navigate(item.buttonLink);
                            }
                            }}
                        >
                            {item.buttonText}
                            <BsChevronRight className="w-3 h-3 sm:w-5 sm:h-5 ml-1 mt-[1px]" />
                        </button>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/500 to-transparent -z-10"></div>
                    </div>
                </div>
            ))}
            {/* Vertical Controls */}
            <div className="absolute left-6 sm:left-6 top-1/2 -translate-y-1/2 flex flex-col space-y-5 sm:space-y-3 z-10 parent">
                {list.map((_, index) => (
                    <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`xl:w-5 xl:h-5 2xl:w-5 2xl:h-5  md:w-3 md:h-3 lg:w-4 lg:h-4 rounded-full focus:outline-none transition-colors duration-200 btn-next  ${
                        index === current
                        ? "bg-yellow-400  2xl:outline-1 xl:outline-1 lg:outline-1 md:outline-1 outline-offset-2  outline-yellow-400"
                        : "bg-white"
                    }`}
                    />
                ))}
            </div>
        </div>
    );
};
export default Slide;