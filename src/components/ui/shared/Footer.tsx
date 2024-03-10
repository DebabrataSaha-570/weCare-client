import { Link } from "react-router-dom";
import Container from "../Container";
import { GiFullPizza } from "react-icons/gi";
import {
  FaFacebookF,
  FaHeart,
  FaInstagram,
  FaPaperPlane,
  FaPhone,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import PrimaryButton from "../PrimaryButton";

const Footer = () => {
  return (
    <>
      <footer className="bg-secondary pt-20 px-16 md:px-20 pb-10">
        <Container className="mt-5 ">
          <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 text-white pb-8  ">
            <div className="">
              <Link
                to="/"
                className=" text-4xl font-bold text-primary flex items-center gap-2 mb-8"
              >
                <span className="text-4xl">
                  <GiFullPizza />
                </span>
                weCare
              </Link>

              <p className="w-[78%] mb-8">
                We’re curious, passionate, and committed to helping nonprofits
                learn and grow. Donate now!
              </p>

              <PrimaryButton>
                DONATE NOW{" "}
                <span>
                  <FaHeart />
                </span>
              </PrimaryButton>
            </div>

            <div className="">
              <h3 className="text-xl font-semibold mb-8">CONTACTS</h3>
              <div className="space-y-2 mb-8">
                <Link
                  to="/"
                  className="flex items-center gap-2 hover:text-accent transition duration-500"
                >
                  <FaLocationDot /> Noakhali, Bangladesh
                </Link>
                <Link
                  to="/"
                  className="flex items-center gap-2 hover:text-accent transition duration-500"
                >
                  {" "}
                  <FaPaperPlane /> wecare@gmail.com
                </Link>
                <Link
                  to="/"
                  className="flex items-center gap-2 hover:text-accent transition duration-500"
                >
                  {" "}
                  <FaPhone /> +88016238894
                </Link>
              </div>

              <div className="flex justify-between max-w-[60%] gap-3">
                <a
                  href="https://github.com/DebabrataSaha-570"
                  className="border rounded-full p-3 hover:bg-[#1999DC] transition duration-500"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://github.com/DebabrataSaha-570"
                  className="border rounded-full p-3 hover:bg-[#39548D] transition duration-500"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://github.com/DebabrataSaha-570"
                  className="border rounded-full p-3 hover:bg-[#D10304] transition duration-500"
                >
                  <FaPinterestP />
                </a>
                <a
                  href="https://github.com/DebabrataSaha-570"
                  className="border rounded-full p-3 hover:bg-[#B32997] transition duration-500"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-8">PROGRAMS</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="hover:text-accent transition duration-500"
                  >
                    Community Outreach Programs
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-accent transition duration-500"
                    to="/"
                  >
                    Corporate Partnerships
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-accent transition duration-500"
                    to="/"
                  >
                    Donation Gift Cards
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-accent transition duration-500"
                    to="/"
                  >
                    CSR Initiative
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-accent transition duration-500"
                    to="/"
                  >
                    Apply For Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-8">DONATE</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    className="hover:text-accent transition duration-500"
                    to="/"
                  >
                    Gift or Redeem Gift Cards
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-accent transition duration-500"
                    to="/"
                  >
                    Honor Donations
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-accent transition duration-500"
                    to="/"
                  >
                    Monthly Projects Support
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-accent transition duration-500"
                    to="/"
                  >
                    Start a Fundraiser Campaign
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-accent transition duration-500"
                    to="/"
                  >
                    Donor Support Resources
                  </Link>
                </li>
              </ul>
            </div>
          </section>
          {/* sub footer */}
          <section className="text-white">
            <hr className="border-b-1 border-gray-400" />

            <div className="py-3 flex flex-col md:flex-row justify-between">
              <div className="flex gap-3 mb-3 md:mb-0">
                <p>Term of use</p>
                <span className="border border-r-gray-500"></span>
                <p>Privacy Environment Policy</p>
              </div>

              <div>
                <p>
                  Copyright ©{new Date().getFullYear()} by{" "}
                  <span className="text-primary">Debabrata Saha</span>. All
                  rights reserved.
                </p>
              </div>
            </div>
          </section>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
