import React from "react";
import { FaCircleDot } from "react-icons/fa6";
import BannerImag from "../../assets/banner-2.png";

const PlumberPoint = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 space-y-6">
        {/* Header Section */}
        <div className="w-full text-center">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">
            Plumber Points
          </h1>
          <p className="text-sm sm:text-base text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Points Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {Array.from({ length: 8 }).map((_, idx) => (
            <p
              key={idx}
              className="flex gap-2 items-center font-semibold text-sm sm:text-base"
            >
              <FaCircleDot className="text-[#DD3142]" />
              Residental Service
            </p>
          ))}
        </div>
      </div>

      {/* Banner Image */}
      <div
        style={{ backgroundImage: `url(${BannerImag})` }}
        className="h-25 sm:h-30 md:h-40 lg:h-55 mt-6 bg-cover bg-center bg-no-repeat"
      ></div>
    </section>
  );
};

export default PlumberPoint;
