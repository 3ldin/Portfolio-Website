"use client";
import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const Email = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_j9df50g', 'template_njijg9b', form.current, 'aO0OGt_GbadsHp3HQ')
        .then((result) => {
            console.log(result.text);
            console.log("Message Sent!");
        }, (error) => {
            console.log(error.text);
        });
    };
  
  
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-28 gap-4 relative"
    >
      <div className="z-10">
        <h5 className="text-4xl font-bold text-white my-2">
          Contact Me
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m interested in a full-time position, feel free to email me if you have any questions. Thank you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/3ldin">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/eldin-reckovic-427331273/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div className="z-10">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col">
          <div className="mb-2 text-white block text-sm font-medium">
          <label className="mb-6">Name</label>
          <input type="text" name="user_name" className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block my-2 w-full p-2.5" required />
          <label>Email</label>
          <input type="email" name="user_email" className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg my-2 block w-full p-2.5" required />
          <label>Message</label>
          <textarea name="message" className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block mt-2 w-full p-2.5" required />
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white mt-4 font-semibold py-2.5 px-5 rounded-lg w-full">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Email;