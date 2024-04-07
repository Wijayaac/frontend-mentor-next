"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import CheckMarkIcon from "./icons/checkmark";

export default function Modal({ isOpen, setIsOpen, email }) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-[999]' onClose={closeModal}>
          <Transition.Child as={Fragment} enter='ease-out duration-300' enterFrom='opacity-0' enterTo='opacity-100' leave='ease-in duration-200' leaveFrom='opacity-100' leaveTo='opacity-0'>
            <div className='fixed inset-0 bg-black/25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full h-full items-center justify-center text-center'>
              <Transition.Child as={Fragment} enter='ease-out duration-300' enterFrom='opacity-0 scale-95' enterTo='opacity-100 scale-100' leave='ease-in duration-200' leaveFrom='opacity-100 scale-100' leaveTo='opacity-0 scale-95'>
                <Dialog.Panel className='flex flex-col justify-end w-full h-full max-w-md	 transform overflow-hidden bg-white p-4 text-left align-middle shadow-xl transition-all'>
                  <div className='mt-auto'>
                    <CheckMarkIcon size='96' />
                    <Dialog.Title as='h3' className='text-3xl font-bold text-gray-900 mt-10'>
                      Thank for subscribing!
                    </Dialog.Title>

                    <div className='mt-8'>
                      {/* TODO: using dynamic data here */}
                      <p>
                        A confirmation email has been sent to
                        <strong> {email}</strong>. Please open it and click the button inside to confirm your subscription.
                      </p>
                    </div>
                  </div>
                  <div className='mt-auto'>
                    <button type='button' onClick={closeModal} className='index-2 w-full mt-auto inline-flex justify-center items-center font-bold text-sm p-4 bg-gray-dark text-white rounded-lg'>
                      Dismiss message
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
