import React from "react";
import FooterImg from "../assets/footerlogo.png";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import Blogimg from "../assets/footeimg.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <section className="bg-black px-4">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr] gap-10">
          {/* Section 1: Logo + Description + Social */}
          <div className="space-y-4">
            <img src={FooterImg} alt="Footer Logo" className="w-32 md:w-40" />
            <p className="text-white text-sm leading-relaxed">
              Lore Issue is simply dummy text of the printing and typesetting
              industry. Lore Issue has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <div className="flex gap-4 text-[#DD3142]">
              <FaFacebookF className="w-5 h-5 md:w-6 md:h-6" />
              <FaGoogle className="w-5 h-5 md:w-6 md:h-6" />
              <FaTwitter className="w-5 h-5 md:w-6 md:h-6" />
            </div>
          </div>

          {/* Section 2: Our Services */}
          <div>
            <h2 className="text-xl font-bold text-[#DD3142] pb-4 uppercase">
              Our Services
            </h2>
            <ul className="space-y-5 text-white text-sm">
              <li>Plumber Service</li>
              <li>Bathroom Plumbing Service</li>
              <li>Kitchen Plumbing Service</li>
              <li>Roof Plumbing Service</li>
              <li>Bathroom Plumbing Service</li>
              <li>Kitchen Plumbing Service</li>
            </ul>
          </div>

          {/* Section 3: Contact */}
          <div>
            <h2 className="text-xl font-bold text-[#DD3142] pb-4 uppercase">
              Contact
            </h2>
            <ul className="space-y-6 text-white text-sm">
              <li>
                1800-9938-2839 <br /> support@plumberpoint.com
              </li>
              <li>
                A-507 Mandoli <br /> New Delhi, India
              </li>
              <li>
                Mon-Sat 9.00-15:00 <br /> Sunday CLOSED
              </li>
            </ul>
          </div>

          {/* Section 4: Recent Posts */}
          <div>
            <h2 className="text-xl font-bold text-[#DD3142] pb-4 uppercase">
              Recent Post
            </h2>
            <div className="space-y-4">
              {[1, 2, 3].map((_, index) => (
                <div className="flex items-start gap-3" key={index}>
                  <img
                    src={Blogimg}
                    alt="Post"
                    className="w-16 h-16 object-cover flex-shrink-0"
                  />
                  <div className="text-white text-sm">
                    <h3 className="font-bold">Sewer Line Repair</h3>
                    <p>
                      Lore Issue. Simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between py-5 border-t-2 border-white">
        <p className="text-[#DD3142]">©Copyright 2020 Techwero Systems.</p>
        <ul className="flex gap-4 text-[#DD3142]">
          <li>
            <Link to="">Term of Services</Link>
          </li>
          <li>
            <Link to="">Privacy & policy</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
