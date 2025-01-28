'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { X, Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Container from './Container';
import { useAppSelector } from '@/lib/store/hooks';

const Header = () => {
  const totalCartItems = useAppSelector(state => state.cart.items.length);
  const totalWishlistItems = useAppSelector(state => state.wishlist.items.length);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/'

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <header className={`${isHome ? 'bg-[#FBEBB5]' : 'bg-[#FFF]'}`}>
      <Container>
        <nav className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-between h-[6.25rem]">
          <div className='max-lg:hidden'></div>
          {/* Navigation Links - Centered */}
          <div className="flex justify-center max-md:hidden items-center gap-12 w-full font-medium text-base text-black">
            <Link href="/" className="relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-black after:left-0 after:bottom-0 after:transition-all hover:after:w-full">
              Home
            </Link>
            <Link href="/shop" className="relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-black after:left-0 after:bottom-0 after:transition-all hover:after:w-full">
              Shop
            </Link>
            <Link href="/blogs" className="relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-black after:left-0 after:bottom-0 after:transition-all hover:after:w-full">
              Blogs
            </Link>
            <Link href="/contact" className="relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-black after:left-0 after:bottom-0 after:transition-all hover:after:w-full">
              Contact
            </Link>
          </div>
          {/* Right-side Icons */}
          <div className="flex items-center ml-auto md:mr-4 w-[15.125rem] justify-between p-2">
            <Link href={'/my-account'} id="user" className="cursor-pointer transform transition-transform hover:scale-110">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.3333 14V8.16666H25.6667V15.1667H23.3333M23.3333 19.8333H25.6667V17.5H23.3333M11.6667 15.1667C14.7817 15.1667 21 16.73 21 19.8333V23.3333H2.33334V19.8333C2.33334 16.73 8.55168 15.1667 11.6667 15.1667ZM11.6667 4.66666C12.9044 4.66666 14.0913 5.15832 14.9665 6.03349C15.8417 6.90866 16.3333 8.09565 16.3333 9.33332C16.3333 10.571 15.8417 11.758 14.9665 12.6332C14.0913 13.5083 12.9044 14 11.6667 14C10.429 14 9.24202 13.5083 8.36685 12.6332C7.49168 11.758 7.00001 10.571 7.00001 9.33332C7.00001 8.09565 7.49168 6.90866 8.36685 6.03349C9.24202 5.15832 10.429 4.66666 11.6667 4.66666ZM11.6667 17.3833C8.20168 17.3833 4.55001 19.0867 4.55001 19.8333V21.1167H18.7833V19.8333C18.7833 19.0867 15.1317 17.3833 11.6667 17.3833ZM11.6667 6.88332C11.0169 6.88332 10.3937 7.14145 9.93427 7.60091C9.4748 8.06038 9.21668 8.68354 9.21668 9.33332C9.21668 9.9831 9.4748 10.6063 9.93427 11.0657C10.3937 11.5252 11.0169 11.7833 11.6667 11.7833C12.3165 11.7833 12.9396 11.5252 13.3991 11.0657C13.8586 10.6063 14.1167 9.9831 14.1167 9.33332C14.1167 8.68354 13.8586 8.06038 13.3991 7.60091C12.9396 7.14145 12.3165 6.88332 11.6667 6.88332Z" fill="black"/>
              </svg>
            </Link>
            <span id="search" className="cursor-pointer py-1 transform transition-transform hover:scale-110">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.5 24.5L19.2663 19.257M22.1667 12.25C22.1667 14.8801 21.1219 17.4024 19.2622 19.2622C17.4024 21.1219 14.8801 22.1667 12.25 22.1667C9.61995 22.1667 7.0976 21.1219 5.23787 19.2622C3.37813 17.4024 2.33334 14.8801 2.33334 12.25C2.33334 9.61995 3.37813 7.0976 5.23787 5.23787C7.0976 3.37813 9.61995 2.33334 12.25 2.33334C14.8801 2.33334 17.4024 3.37813 19.2622 5.23787C21.1219 7.0976 22.1667 9.61995 22.1667 12.25V12.25Z" stroke="black" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <Link href={'/wishlist'} id="heart" className="cursor-pointer transform transition-transform hover:scale-110">
            <div className={`h-5 w-5 flex justify-center items-center absolute -top-2 -right-2 rounded-full bg-red-600 text-white text-sm`}>{totalWishlistItems}</div>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.16665 3.5C4.94548 3.5 2.33331 6.08533 2.33331 9.275C2.33331 11.8498 3.35415 17.9608 13.4026 24.1383C13.5826 24.2479 13.7893 24.3058 14 24.3058C14.2107 24.3058 14.4173 24.2479 14.5973 24.1383C24.6458 17.9608 25.6666 11.8498 25.6666 9.275C25.6666 6.08533 23.0545 3.5 19.8333 3.5C16.6121 3.5 14 7 14 7C14 7 11.3878 3.5 8.16665 3.5Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href={'/cart'} id="cart" className="cursor-pointer relative transform transition-transform hover:scale-110">
              <div className={`h-5 w-5 flex justify-center items-center absolute -top-2 -right-2 rounded-full bg-red-600 text-white text-sm`}>{totalCartItems}</div>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.2356 19.1926H8.95237L9.76995 17.5273L23.3543 17.5027C23.8137 17.5027 24.2074 17.1746 24.2895 16.7207L26.1707 6.19062C26.2199 5.91445 26.1461 5.63008 25.9656 5.41406C25.8765 5.30775 25.7652 5.22211 25.6396 5.16309C25.514 5.10407 25.3771 5.07308 25.2383 5.07227L7.95706 5.01484L7.8094 4.32031C7.71643 3.87734 7.31721 3.55469 6.86331 3.55469H2.6387C2.3827 3.55469 2.13719 3.65638 1.95617 3.8374C1.77516 4.01841 1.67346 4.26393 1.67346 4.51992C1.67346 4.77592 1.77516 5.02143 1.95617 5.20245C2.13719 5.38346 2.3827 5.48516 2.6387 5.48516H6.08127L6.72659 8.55312L8.31526 16.2449L6.26995 19.5836C6.16373 19.727 6.09975 19.8972 6.08526 20.075C6.07076 20.2528 6.10632 20.4312 6.18791 20.5898C6.35198 20.9152 6.68284 21.1203 7.04924 21.1203H8.76643C8.40035 21.6065 8.20261 22.1988 8.20315 22.8074C8.20315 24.3551 9.46096 25.6129 11.0086 25.6129C12.5563 25.6129 13.8141 24.3551 13.8141 22.8074C13.8141 22.1977 13.6117 21.6043 13.2508 21.1203H17.6559C17.2898 21.6065 17.0921 22.1988 17.0926 22.8074C17.0926 24.3551 18.3504 25.6129 19.8981 25.6129C21.4457 25.6129 22.7035 24.3551 22.7035 22.8074C22.7035 22.1977 22.5012 21.6043 22.1403 21.1203H25.2383C25.7688 21.1203 26.2035 20.6883 26.2035 20.1551C26.202 19.8994 26.0993 19.6546 25.9179 19.4743C25.7366 19.294 25.4913 19.1927 25.2356 19.1926ZM8.35901 6.91797L24.1035 6.96992L22.5613 15.6051L10.1938 15.627L8.35901 6.91797ZM11.0086 23.6715C10.5328 23.6715 10.1446 23.2832 10.1446 22.8074C10.1446 22.3316 10.5328 21.9434 11.0086 21.9434C11.4844 21.9434 11.8727 22.3316 11.8727 22.8074C11.8727 23.0366 11.7816 23.2564 11.6196 23.4184C11.4576 23.5805 11.2378 23.6715 11.0086 23.6715ZM19.8981 23.6715C19.4223 23.6715 19.034 23.2832 19.034 22.8074C19.034 22.3316 19.4223 21.9434 19.8981 21.9434C20.3739 21.9434 20.7621 22.3316 20.7621 22.8074C20.7621 23.0366 20.6711 23.2564 20.5091 23.4184C20.347 23.5805 20.1272 23.6715 19.8981 23.6715Z" fill="black"/>
              </svg>
            </Link>
            <button onClick={toggleSidebar} className="md:hidden h-full hover:opacity-70 transition-opacity">
              <Menu className="h-full" />
            </button>
          </div>
        </nav>
      </Container>
    </header>
    <MobileSidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Header;

export const MobileSidebar = ({isOpen,toggleSidebar}:{isOpen:boolean;toggleSidebar:()=>void}) => {
  return (
    <>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-40" 
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`
          md:hidden fixed top-0 left-0 w-64 h-full bg-white 
          transform transition-transform duration-300 z-50
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button 
            onClick={toggleSidebar}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col p-4 space-y-4">
          <Link 
            href="/" 
            className="text-gray-800 hover:text-black transition p-1"
            onClick={toggleSidebar}
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="text-gray-800 hover:text-black transition p-1"
            onClick={toggleSidebar}
          >
            Shop
          </Link>
          <Link
            href="/blogs"
            className="text-gray-800 hover:text-black transition p-1"
            onClick={toggleSidebar}
          >
            Blogs
          </Link>
          <Link
            href="/contact"
            className="text-gray-800 hover:text-black transition p-1"
            onClick={toggleSidebar}
          >
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
};