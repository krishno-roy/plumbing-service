import React, { useState } from "react";
import Videoimg from "../../assets/banner.png";
import { FaPlay } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Video = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section>
      <div className="container mx-auto px-4 md:px-12 py-10">
        {/* Banner Section */}
        <div
          className="bg-cover bg-center "
          style={{ backgroundImage: `url(${Videoimg})` }}
        >
          <div className="min-h-[405px] flex flex-col md:flex-row items-center gap-6 bg-black/40 p-6 md:p-10">
            {/* Left Text Box */}
            <div className="bg-white/40 w-full md:w-1/2 px-6 py-6 space-y-4 rounded md:-ml-10">
              <h2 className="text-3xl md:text-4xl font-bold pt-4">
                Welcome to Plumber Company
              </h2>
              <p className="text-sm md:text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <button className="py-2 px-4 bg-red-600 rounded-full text-white">
                Learn More
              </button>
            </div>

            {/* Play Button */}
            <div
              className="flex items-center justify-center border-4 border-red-600 rounded-full h-20 w-20 md:h-24 md:w-24 cursor-pointer"
              onClick={() => setShowVideo(true)}
            >
              <FaPlay className="text-red-600 text-xl md:text-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Video Popup */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 px-4">
          <div className="relative w-full max-w-2xl">
            {/* Close Button */}
            <button
              className="absolute -top-4 -right-4 bg-white rounded-full p-2 text-black"
              onClick={() => setShowVideo(false)}
            >
              <IoMdClose className="text-xl" />
            </button>
            <div className="aspect-video w-full rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Video;
