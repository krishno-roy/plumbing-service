import React from "react";
import BannerImg from "../../assets/Historiimage.png";

const History = () => {
  return (
    <section className="bg-[#DD3142] py-10 md:py-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-20 px-4 sm:px-6 md:px-12 text-white">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img src={BannerImg} alt="Company History" className="w-full" />
        </div>
        {/* Text Section */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Our Company History
            </h2>
            <p className="text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium facilis deleniti quisquam obcaecati repellat! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Accusantium
              facilis deleniti quisquam obcaecati repellat!
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light">
              Trust Our Team of Experts
            </h2>
            <p className="text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium facilis deleniti quisquam obcaecati repellat!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
