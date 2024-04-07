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
    <div className='flex flex-col md:flex-row max-w-[860px]  bg-white'>
      <Image className='rounded-b-lg' src='/illustration-sign-up-mobile.svg' width={375} height={285} />
      <div className='flex flex-col px-5 py-6'>
        <h1 className='mb-5 text-4xl font-bold text-gray-dark'>Stay Updated</h1>
        <p className='mb-6'>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul className='mb-10'>
          <li className='flex gap-2 mb-1'>
            <CheckMarkIcon />
            Product discovery and building what matters
          </li>
          <li className='flex gap-2 mb-1'>
            <CheckMarkIcon />
            Measuring to ensure updates are a success
          </li>
          <li className='flex gap-2 mb-1'>
            <CheckMarkIcon />
            And much more!
          </li>
        </ul>
        <form onSubmit={handleFormSubmit}>
          <div className='flex flex-col mb-5'>
            <label htmlFor='email' className='text-sm font-bold color-gray-dark mb-2'>
              Email address
            </label>
            <input required type='email' id='email' className='border border-gray-dark p-5 color-gray-700 rounded-lg' placeholder='email@company.com' />
          </div>
          <button className='w-full text-white bg-gray-dark p-5 text-center inline-flex justify-center items-center rounded-lg font-bold text-sm'>Subscribe to monthly newsletter</button>
        </form>
      </div>
      <Modal setIsOpen={setIsOpen} isOpen={isOpen} email={email} />
    </div>
  );
}
