import { Link } from "react-router-dom";
import { LOGO1 } from "../utils/constants";
import { PAGE } from "../router/routes";

const Footer = () => {
  return (
    <footer className="bg-[#141414] rounded-lgd shadow my-4 mt-12">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex items-center flex-col md:flex-row justify-between">
          <a href="#!" className="flex items-center mb-6 md:mb-2">
            <img src={LOGO1} className="h-10 mr-3" alt="Logo" />
          </a>
          <ul className="flex flex-wrap items-center mb-2 text-sm font-medium text-gray-500">
            <li>
              <Link
                to={PAGE.ABOUT}
                target="_blank"
                rel="noreferrer"
                className="mr-4 hover:text-white md:mr-6"
              >
                About
              </Link>
            </li>
            <li>
              <a href="#!" className="mr-4 hover:text-white md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/divyansh-gabra/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 sm:mx-auto border-[#282727] lg:my-8" />
        <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
          Crafted By{" "}
          <a
            href="https://www.linkedin.com/in/divyansh-gabra/"
            rel="noreferrer"
            target="_blank"
            className="text-white hover:underline"
          >
            Divyansh Gabra
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
