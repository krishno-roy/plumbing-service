import React from 'react'
import HeroImg1 from "../../assets/heroimg-1.png";
import HeroImg2 from "../../assets/heroimg-2.png";

const Hero = () => {
  return (
    <section className="container mx-auto md:flex md:justify-between items-center pt-10 md:px-12 px-8">
      <div className="space-y-4  text-center md:text-left">
        <h2 className="font-bold text-[44px] uppercase leading-12">
          Call us For Any <br />
          <span className="font-light"> Plumbing Needs</span>
        </h2>
        <p className="font-bold text-[34px]">
          <a href="/">+1800-9938-2839 </a>
        </p>
        <button className="bg-red-600 px-6 py-3 rounded-full text-white">
          See All Service
        </button>
      </div>
      <div className="flex items-center">
        <img src={HeroImg1} alt="" className="none md:block hidden" />
        <img src={HeroImg2} alt="" className="h-80 mt-4 mx-auto" />
      </div>
    </section>
  );
}

export default Hero