// import React from 'react';
import imgBannar1 from "../../../../assets/images/banner/2.jpg";
import imgBannar2 from "../../../../assets/images/banner/1.jpg";
import imgBannar3 from "../../../../assets/images/banner/3.jpg";
import imgBannar4 from "../../../../assets/images/banner/4.jpg";
// import imgBannar5 from "../../../../assets/images/banner/5.jpg";
// import imgBannar6 from "../../../../assets/images/banner/6.jpg";


const Slider = () => {
    return (
      <div className="carousel w-full h-[600px] ">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={imgBannar1} className="w-full rounded-xl h-[600px]" />
          <div className="absolute flex items-center   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white  left-0 right-0 gap-5 top-0 bottom-0   rounded-xl">
            <div className="space-y-3.5  md:w-1/4 ms-4 md:ms-20">
              <div className="mb-5">
                <h2 className="text-6xl mb-7 font-semibold">
                  Affordable Price For Car Servicing
                </h2>
                <p>
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
              </div>
              <div>
                <button className="btn btn-outline bg-red-600  mr-6 text-white ">
                  Discover More
                </button>
                <button className="btn btn-outline text-white ">
                  Latest Project{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 gap-5 bottom-0">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={imgBannar2} className="w-full  rounded-xl h-[600px]" />
          <div className="absolute flex items-center   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white  left-0 right-0 gap-5 top-0 bottom-0   rounded-xl">
            <div className="space-y-3.5  md:w-1/4 ms-4 md:ms-20">
              <div className="mb-5">
                <h2 className="text-6xl mb-7 font-semibold">
                  Looking for affordable prices for car servicing?
                </h2>
                <p>
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
              </div>
              <div>
                <button className="btn btn-outline bg-red-600  mr-6 text-white ">
                  Discover More
                </button>
                <button className="btn btn-outline text-white ">
                  Latest Project{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 gap-5 bottom-0">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={imgBannar3}
            className="w-full flex items-center  rounded-xl h-[600px]"
          />
          <div className="absolute flex items-center rounded-xl  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white  left-0 right-0 gap-5 top-0 bottom-0">
            <div className="space-y-3.5  md:w-1/4 ms-4 md:ms-20">
              <div className="mb-5">
                <h2 className="text-6xl mb-7 font-semibold">
                  Do you need car servicing ?
                </h2>
                <p>
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
              </div>
              <div>
                <button className="btn btn-outline bg-red-600  mr-6 text-white ">
                  Discover More
                </button>
                <button className="btn btn-outline text-white ">
                  Latest Project{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 gap-5 bottom-0">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={imgBannar4} className="w-full  rounded-xl h-[600px]" />
          <div className="absolute flex items-center   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white  left-0 right-0 gap-5 top-0 bottom-0   rounded-xl">
            <div className="space-y-3.5  md:w-1/4 ms-4 md:ms-20">
              <div className="mb-5">
                <h2 className="text-6xl mb-7 font-semibold">
                  Affordable price for car servicing is our top priority.
                </h2>
                <p>
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
              </div>
              <div>
                <button className="btn btn-outline bg-red-600  mr-6 text-white ">
                  Discover More
                </button>
                <button className="btn btn-outline text-white ">
                  Latest Project{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 gap-5 bottom-0">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    );
};

export default Slider;