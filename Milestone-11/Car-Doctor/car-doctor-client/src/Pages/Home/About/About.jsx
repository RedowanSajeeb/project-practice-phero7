// import React from 'react';
import aboutPaeshon from "../../../../assets/images/about_us/person.jpg"
import aboutPatch from "../../../../assets/images/about_us/parts.jpg"
const About = () => {
    return (
      <div className="hero md:mt-24 md:mb-16 mt-10 ">
        <div className="hero-content  flex-col lg:flex-row">
          <div className="md:w-1/2 relative">
            <img
              src={aboutPaeshon}
              alt=""
              className="w-3/4 rounded-lg   shadow-2xl"
            />
            <img
              src={aboutPatch}
              alt=""
              className="w-1/2 right-5 border-8 border-white -mt-40 absolute rounded-lg shadow-2xl"
            />
          </div>
          <div className="md:w-1/2 space-y-5 ps-4">
            <h3 className="text-red-500 text-2xl font-bold">About Us</h3>
            <h1 className="text-5xl font-bold">
              We are qualified <br /> & of experience <br /> in this field
            </h1>
            <p className="py-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which dont look even slightly
              believable.
            </p>
            <p>
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which dont look even slightly
              believable.
            </p>
            <button className="btn btn-outline bg-red-600 - text-white ">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    );
};

export default About;