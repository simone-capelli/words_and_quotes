'use client';

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

const Nav = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 z-30 flex justify-between items-center w-full bg-slate-50 pt-2 px-5 pb-2">
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
