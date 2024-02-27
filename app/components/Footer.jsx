import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";


const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 w-screen text-center border-t-4 border-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-xl font-semibold mb-4">Eldin Reckovic</h3>
          <p>NYC</p>
          <p>Email: eldinreck@gmail.com </p>
          <div className="flex justify-center mt-4">
          <Link href="https://github.com/3ldin" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/eldin-reckovic-427331273/" target="_blank">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
            
          </Link>
        </div>
        </div>

        <div className="md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li>
              <a href="/" className="hover:text-gray-500 transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-500 transition duration-300">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-gray-500 transition duration-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-500 transition duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
