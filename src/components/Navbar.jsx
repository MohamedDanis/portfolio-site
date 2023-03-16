import React, { useState } from "react";
import { Transition } from "@headlessui/react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-transparent md:bg-[#D9D2C5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center w-[72%]">
              <div className="flex-shrink-0 w-full">
              <svg className="" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="28" cy="28" r="28" fill="#363B59"/>
<path d="M26.2641 17.712C26.4694 17.712 26.6374 17.7773 26.7681 17.908C26.8988 18.02 26.9641 18.188 26.9641 18.412V36.528C26.9641 36.7333 26.8988 36.892 26.7681 37.004C26.6374 37.1347 26.4694 37.2 26.2641 37.2H22.7081C22.5214 37.2 22.3534 37.1347 22.2041 37.004C22.0734 36.8547 22.0081 36.696 22.0081 36.528V26.952C22.0081 26.8587 21.9614 26.812 21.8681 26.812C21.8121 26.812 21.7654 26.8307 21.7281 26.868L19.0121 31.88C18.7694 32.3093 18.4428 32.524 18.0321 32.524H16.5201C16.1281 32.524 15.8014 32.3093 15.5401 31.88L12.8521 26.896C12.8148 26.84 12.7681 26.812 12.7121 26.812C12.6188 26.812 12.5721 26.8587 12.5721 26.952V36.528C12.5721 36.7147 12.4974 36.8733 12.3481 37.004C12.2174 37.1347 12.0494 37.2 11.8441 37.2H8.3161C8.11076 37.2 7.94276 37.1347 7.8121 37.004C7.68143 36.892 7.6161 36.7333 7.6161 36.528V20.036C7.6161 19.644 7.7001 19.2987 7.8681 19C8.0361 18.7013 8.24143 18.4587 8.4841 18.272C8.72676 18.0853 8.97876 17.9453 9.2401 17.852C9.50143 17.7587 9.72543 17.712 9.9121 17.712H11.4801C11.9281 17.712 12.2641 17.908 12.4881 18.3L17.1361 26.672C17.1548 26.728 17.2014 26.756 17.2761 26.756C17.3321 26.756 17.3788 26.728 17.4161 26.672L22.0921 18.3C22.3161 17.908 22.6521 17.712 23.1001 17.712H26.2641ZM30.7736 36.5V20.12C30.7736 19.4107 31.0163 18.832 31.5016 18.384C32.0056 17.9173 32.575 17.684 33.2096 17.684H38.8096C40.0603 17.684 41.2083 17.8333 42.2536 18.132C43.3176 18.412 44.2416 18.8693 45.0256 19.504C45.8096 20.12 46.4256 20.9133 46.8736 21.884C47.3216 22.836 47.5643 23.9747 47.6016 25.3C47.6203 25.5613 47.6296 25.8787 47.6296 26.252C47.6296 26.6067 47.6296 27.008 47.6296 27.456C47.6296 27.8853 47.6296 28.2773 47.6296 28.632C47.6296 28.9867 47.6203 29.2947 47.6016 29.556C47.4336 34.652 44.5496 37.2 38.9496 37.2H31.4736C31.2683 37.2 31.1003 37.1347 30.9696 37.004C30.839 36.8733 30.7736 36.7053 30.7736 36.5ZM38.8096 33.028C40.023 33.028 40.9003 32.7387 41.4416 32.16C41.983 31.5627 42.263 30.676 42.2816 29.5C42.3003 29.2387 42.3096 28.94 42.3096 28.604C42.3283 28.2493 42.3376 27.8573 42.3376 27.428C42.3376 26.9987 42.3283 26.616 42.3096 26.28C42.3096 25.9253 42.3003 25.6173 42.2816 25.356C42.2256 23.0227 41.0216 21.856 38.6696 21.856H34.4696C34.899 21.856 35.263 22.0147 35.5616 22.332C35.8603 22.6307 36.0096 22.9573 36.0096 23.312V32.16C36.0096 32.4027 36.0843 32.608 36.2336 32.776C36.4016 32.944 36.6163 33.028 36.8776 33.028H38.8096Z" fill="#D9D2C5"/>
            </svg>
              </div>
              <div className="hidden md:block w-full">
                <div className=" flex items-baseline justify-end space-x-4 w-full  font-enigmat font-bold">
                  

                  <a
                    href="#"
                    className="text-primeblu text-xl  px-3 py-2 rounded-md  "
                  >
                    About
                  </a>

                  <a
                    href="#"
                    className="text-primeblu text-xl  px-3 py-2 rounded-md  font-medium"
                  >
                    Projects
                  </a>

                  <a
                    href="#"
                    className="text-primeblu text-xl  px-3 py-2 rounded-md font-medium"
                  >
                    Contact
                  </a>

                 
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className=" inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white  focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg width="38" height="19" viewBox="0 0 38 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="38" height="5" fill="#2E3460"/>
                  <rect y="14" width="38" height="5" fill="#2E3460"/>
                  </svg>
                  
                ) : (
                  <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.796875" y="27.1672" width="38" height="5" transform="rotate(-45 0.796875 27.1672)" fill="#2E3460"/>
<rect x="27.667" y="30.7028" width="38" height="5" transform="rotate(-135 27.667 30.7028)" fill="#2E3460"/>
                  </svg>

                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden absolute bg-gray-800 w-full" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 font-enigmat font-bold">
               

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </a>

                
              </div>
            </div>
          )}
        </Transition>
      </nav>

      
      </div>
  );
}

export default Navbar;