import React from 'react';
import { Button } from './ui/button';
import Container from './Container';
import Link from 'next/link';

const Footer = () => {

  return (
    <Container>
    <footer className="w-full py-12 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Contact Column */}
        <div>
          <div className="flex items-center mb-4">
            <p className="text-sm text-gray-400">
              400 University Drive 
              <br />Suite 200 
              <br />Coral Gables, FL 33134 
              <br />USA
            </p>
          </div>
        </div>

        {/* Links Column */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-400">Links</h4>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Link href="/" className="text-black hover:text-gray-600">Home</Link>
            </li>
            <li className="flex items-center">
              <Link href="/shop" className="text-black hover:text-gray-600">Shop</Link>
            </li>
            <li className="flex items-center">
              <Link href="/blogs" className="text-black hover:text-gray-600">Blogs</Link>
            </li>
            <li className="flex items-center">
              <Link href="/contact" className="text-black hover:text-gray-600">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Help Column */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-400">Help</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="text-black hover:text-gray-600">Payment Options</Link></li>
            <li><Link href="/" className="text-black hover:text-gray-600">Returns</Link></li>
            <li><Link href="/" className="text-black hover:text-gray-600">Privacy Policies</Link></li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className='md:col-span-2'>
          <h4 className="font-semibold mb-4 text-gray-400">Newsletter</h4>
            <div className="flex items-center gap-2 overflow-hidden">
              
              <input 
                type="email" 
                placeholder="Enter Your Email Address" 
                className=" border-transparent outline-none text-sm border-b-2 mt-2 pb-2 border-b-black"
                required
              />
            <Button variant={'fBtn1'} className=''>Subscribe</Button>
            </div>

        </div>
      </div>

      <div className="mt-8 pt-4 border-t ">
        <p className="text text-black">
          © 2022 Meubel House. All rights reserved
        </p>
      </div>
    </footer>
    </Container>
  );
};

export default Footer;