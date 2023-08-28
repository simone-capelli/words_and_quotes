'use client';

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { navLinks } from '@constants';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <div className="navbar_container">
        <div className="title outfit flex_row gap-1">
          <p className="text-[#268C41]">Words</p>
          <div className="flex_row striked">
            <p>&</p>
            <p>Quotes</p>
          </div>
        </div>

        {pathname === '/' ? (
          <Image
            src="/assets/nav/menu.png"
            alt="menu"
            width={20}
            height={20}
            onClick={() => setToggleMenu((prev: boolean) => !prev)}
          />
        ) : (
          <UserButton afterSignOutUrl="/" />
        )}

        {toggleMenu && (
          <div
            id="menu"
            className="menu flex px-8 py-4 mr-2 bg-black
         "
          >
            <ul className="list-none flex flex-col justify-end items-center gap-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal 
            cursor-pointer text-[16px]
            ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}
            text-white`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {/* <div
        className="flex flex-row header-title capitalize cursor-pointer"
        onClick={() => router.push('/')}
      >
        <p className="text-[#268C41]">Words</p>
        <p className="px-2">&</p>
        <p className="text-[#0085FF]">Quotes</p>
      </div>

      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>

      {pathname === '/' && (
        <SignedOut>
          <SignInButton>
            <button className="mt-2 btn-save flex p-1 px-3 gap-1 justify-center items-center rounded-[8px] border-solid border-[rgba(0,0,0,0.31) text-white font-light">
              <p className="text-[14px] font">Accedi</p>
            </button>
          </SignInButton>
        </SignedOut>
      )} */}
    </nav>
  );
};

export default Nav;
