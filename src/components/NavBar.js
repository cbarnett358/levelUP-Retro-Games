import React, { useState } from 'react';
import { Transition } from '@headlessui/react';


function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDrawer() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <button className="md:hidden" onClick={toggleDrawer}>
            <button className="h-6 w-6" />
          </button>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li href="/" className="text-gray-800 hover:text-gray-900">Home</li>
              <li href="/about" className="text-gray-800 hover:text-gray-900">About</li>
              <li href="/contact" className="text-gray-800 hover:text-gray-900">Contact </li>
            </ul>
          </nav>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="md:hidden bg-white absolute inset-x-0 top-0 z-10">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
           
              <button onClick={toggleDrawer}>
                <button className="h-6 w-6" >ss</button>
              </button>
            </div>
            <nav className="mt-4">
              <ul className="flex flex-col space-y-4">
            <li>sss</li>
            <li>sss</li>

            <li>sss</li>

              </ul>
            </nav>
          </div>
        </div>
      </Transition>
    </header>
  );
}

export default NavBar;
