"use client";

import CheckMarkIcon from "@/components/icons/checkmark";
import Modal from "@/components/modal";
import Image from "next/image";
import { useState } from "react";

export default function NewsletterPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setEmail(e.target.email.value);
    setIsOpen(true);
  };

  return (
    <div className='flex flex-col h-full md:p-8 md:rounded-3xl max-w-[930px] bg-white mx-auto md:flex-row-reverse	'>
      <Image className='rounded-b-lg md:hidden' src='/illustration-sign-up-mobile.svg' width={375} height={285} />
      <Image className='hidden md:block' src='/illustration-sign-up-desktop.svg' width={400} height={600} />
      <div className='flex flex-col justify-center px-5 py-6 md:pr-10'>
        <h1 className='mb-5 text-4xl font-bold text-nw-gray'>Stay Updated</h1>
        <p className='mb-6 text-nw-gray'>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul className='mb-10'>
          <li className='flex gap-2 mb-1'>
            <CheckMarkIcon />
            <p className='text-nw-gray'>Product discovery and building what matters</p>
          </li>
          <li className='flex gap-2 mb-1'>
            <CheckMarkIcon />
            <p className='text-nw-gray'>Measuring to ensure updates are a success</p>
          </li>
          <li className='flex gap-2 mb-1'>
            <CheckMarkIcon />
            <p className='text-nw-gray'>And much more!</p>
          </li>
        </ul>
        <form onSubmit={handleFormSubmit}>
          <div className='flex flex-col mb-5'>
            <label htmlFor='email' className='text-sm font-bold text-nw-gray mb-2'>
              Email address
            </label>
            <input required type='email' id='email' className='border border-nw-gray p-5 text-gray-700 rounded-lg max-h-[50px]' placeholder='email@company.com' />
          </div>
          <button className='w-full text-white bg-nw-gray p-4 text-center inline-flex justify-center items-center rounded-lg font-bold text-sm transition duration-300 hover:bg-gradient-to-r from-nw-orange to-nw-orange-dark'>
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
      <Modal setIsOpen={setIsOpen} isOpen={isOpen} email={email} />
    </div>
  );
}
