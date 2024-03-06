"use client";
import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Email = () => {
    const form = useRef();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_j9df50g', 'template_njijg9b', form.current, 'aO0OGt_GbadsHp3HQ')
        .then((result) => {
            console.log(result.text);
            console.log("Message Sent!");
            setIsSubmitted(true);
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
        <h5 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black my-2">
          Contact Me
        </h5>
        <p className="text-black mb-4 max-w-md">
          {" "}
          I&apos;m interested in a full-time position, feel free to email me if you have any questions. Thank you!
        </p>
        <div className="socials flex flex-row gap-2 text-black text-4xl">
          <Link href="https://github.com/3ldin" target="_blank">
            <FaGithub/>
          </Link>
          <Link href="https://www.linkedin.com/in/eldin-reckovic-427331273/" target="_blank">
            <FaLinkedin/>
          </Link>
        </div>
      </div>
      <div className="z-10">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col">
          <div className="mb-2 text-black block text-sm font-medium">
          <label className="mb-6">Name</label>
          <input type="text" name="user_name" className="bg-[#ffffff] drop-shadow-2xl placeholder-[#424547] text-black text-sm rounded-lg block my-2 w-full p-2.5" required />
          <label>Email</label>
          <input type="email" name="user_email" className="bg-[#ffffff] drop-shadow-2xl placeholder-[#9CA2A9] text-black text-sm rounded-lg my-2 block w-full p-2.5" required />
          <label>Message</label>
          <textarea name="message" className="bg-[#ffffff] drop-shadow-2xl placeholder-[#9CA2A9] text-black text-sm rounded-lg block mt-2 w-full p-2.5" required />
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white mt-4 font-semibold py-2.5 px-5 rounded-lg w-full">Send</button>
          {isSubmitted ? (
            <div className="text-green-500 text-xl mb-4">Message sent successfully! Thank you for reaching out.</div>
          ) : null}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Email;