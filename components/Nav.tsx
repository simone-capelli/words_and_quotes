'use client';

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Nav = () => {
  const router = useRouter();
  return (
    <nav className="fixed top-0 z-30 flex justify-between items-center w-full bg-slate-50 pt-2 px-5 pb-2">
      {/*  <SignedOut>
        <Image
          src="/assets/nav/code.png"
          alt="Questions"
          width={30}
          height={30}
        />
      </SignedOut> */}

      {/* <SignedIn>
        <Image
          src="/assets/nav/doubts-button.png"
          alt="Questions"
          width={30}
          height={30}
        />
      </SignedIn> */}

      <div className="header-title" onClick={() => router.push('/')}>
        <p className="text-[#268C41]">Words</p>
        <p className="px-2">&</p>
        <p className="text-[#0085FF]">Quotes</p>
      </div>

      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>

      <SignedOut>
        <SignInButton>
          <button className="btn-save flex p-1 px-2 gap-1 justify-center items-center rounded-[35px] border-solid border-[rgba(0,0,0,0.31) text-white font-medium">
            <p className="text-[14px]">Join us</p>
            <Image
              src="/assets/nav/stars.png"
              alt="stars"
              width={18}
              height={18}
            />
          </button>
        </SignInButton>
      </SignedOut>
    </nav>
  );
};

export default Nav;
