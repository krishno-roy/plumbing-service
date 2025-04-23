import React from 'react'
import Icon1 from "../../assets/icon-1.png"
import Icon2 from "../../assets/icon-2.png"
import Icon3 from "../../assets/icon-3.png"


const ServiceList = [
  {
    id: 1,
    title: "Residental Service",
    discriptcs:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
    image: Icon1,
  }, 
  {
    id: 2,
    title: "Commercial Service",
    discriptcs:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
    image: Icon2,
  },
  {
    id: 3,
    title: "Maintenance",
    discriptcs:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
    image: Icon3,
  },
];


const Service = () => {
  return (
    <section className="bg-[#DD3142] py-10">
      <div className="container mx-auto flex flex-col md:flex-row px-6 md:px-12 gap-8 md:gap-7">
        {ServiceList.map((service, index) => {
          const showBorder = index !== 0; // apply border to all except the first one

          return (
            <div key={service.id} className="flex-1">
              <div
                className={`text-white text-center space-y-4 ${
                  showBorder
                    ? "border-t-2 border-white pt-6 md:border-t-0 md:border-l-2 md:pt-0 md:pl-6"
                    : ""
                }`}
              >
                <img src={service.image} alt="" className="mx-auto w-16 h-16" />
                <h2 className="text-white text-2xl font-semibold">
                  {service.title}
                </h2>
                <p>{service.discriptcs}</p>
                <button className="py-2 px-4 bg-white text-black rounded-sm">
                  Learn More
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Service