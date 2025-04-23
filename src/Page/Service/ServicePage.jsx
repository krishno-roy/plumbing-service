import React from 'react'
import { GrSettingsOption } from 'react-icons/gr';
import OurTeam from '../Home/OurTeam';
import Testimonial from '../Home/Testimonial';
import Blog from '../Home/Blog';

const ServiceList = [
  {
    id: 1,
    icon: (
      <GrSettingsOption className="mx-auto size-16 bg-amber-600 p-3 rounded-full text-white" />
    ),
    title: "Plumbing Service",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.",
  },
  {
    id: 2,
    icon: (
      <GrSettingsOption className="mx-auto size-16 bg-amber-600 p-3 rounded-full text-white" />
    ),
    title: "Plumbing Service",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.",
  },
  {
    id: 3,
    icon: (
      <GrSettingsOption className="mx-auto size-16 bg-amber-600 p-3 rounded-full text-white" />
    ),
    title: "Plumbing Service",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.",
  },
  {
    id: 4,
    icon: (
      <GrSettingsOption className="mx-auto size-16 bg-amber-600 p-3 rounded-full text-white" />
    ),
    title: "Plumbing Service",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.",
  },
  {
    id: 5,
    icon: (
      <GrSettingsOption className="mx-auto size-16 bg-amber-600 p-3 rounded-full text-white" />
    ),
    title: "Plumbing Service",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.",
  },
  {
    id: 6,
    icon: (
      <GrSettingsOption className="mx-auto size-16 bg-amber-600 p-3 rounded-full text-white" />
    ),
    title: "Plumbing Service",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.",
  },
  {
    id: 7,
    icon: (
      <GrSettingsOption className="mx-auto size-16 bg-amber-600 p-3 rounded-full text-white" />
    ),
    title: "Plumbing Service",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.",
  },
  {
    id: 8,
    icon: (
      <GrSettingsOption className="mx-auto size-16 bg-amber-600 p-3 rounded-full text-white" />
    ),
    title: "Plumbing Service",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.",
  },
  {
    id: 9,
    icon: (
      <GrSettingsOption className="mx-auto size-16 bg-amber-600 p-3 rounded-full text-white" />
    ),
    title: "Plumbing Service",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.",
  },
  {
    id: 10,
    icon: (
      <GrSettingsOption className="mx-auto size-16 bg-amber-600 p-3 rounded-full text-white" />
    ),
    title: "Plumbing Service",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.",
  },
  {
    id: 11,
    icon: (
      <GrSettingsOption className="mx-auto size-16 bg-amber-600 p-3 rounded-full text-white" />
    ),
    title: "Plumbing Service",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.",
  },
  {
    id: 12,
    icon: (
      <GrSettingsOption className="mx-auto size-16 bg-amber-600 p-3 rounded-full text-white" />
    ),
    title: "Plumbing Service",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.",
  },
];

const Servicepage = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="w-xl mx-auto text-center py-7 space-y-3 pt-12">
          <h2 className="text-3xl font-bold uppercase">Our Services</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 text-center gap-8  space-y-5">
          {ServiceList.map((service, id) => (
            <div key={service.id}>
              <div className="shadow-md p-7 space-y-2">
                <p className="mx-auto">{service.icon}</p>
                <h2 className="text-xl font-bold">{service.title}</h2>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <OurTeam />
        <Testimonial/>
        <Blog/>
      </div>
    </div>
  );
}

export default Servicepage