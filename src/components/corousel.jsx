import content from "./cardContent";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Corousel(){
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    }

    return(
        <div className="w-3/4 m-auto">
            <h1 className="font-bold italic text-[2rem] text-center text-[#D2C1B6]">Whats's Gravitating?</h1>
            <div className="m-20 mt-[2.25rem]">
                <Slider {...settings}>
                    {content.map((data) =>(
                        <div className="bg-white h-[400px] text-black rounded-xl">
                            <div className="flex justify-center items-center">
                                <img src={data.img} alt="" className="rounded-2xl mt-[1rem]"/>
                            </div>

                            <div className="flex flex-col justify-center items-center pt-[1.5rem] gap-3">
                                <p className="font-bold ">{data.name}</p>
                                <p>{data.price}</p>
                                <button>Book Now</button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Corousel;