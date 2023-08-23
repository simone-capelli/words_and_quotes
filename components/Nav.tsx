import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';

const Nav = () => {
  return (
    <nav className="fixed top-0 z-30 flex justify-between items-center w-full bg-slate-50 pt-2 px-6 pb-2">
      <SignedIn>
        <Image
          src="/assets/icons/doubts-button.png"
          alt="Questions"
          width={30}
          height={30}
        />
      </SignedIn>

      <div className="header-title">
        <p className="text-[#268C41]">Words</p>
        <p className="px-2">&</p>
        <p className="text-[#0085FF]">Quotes</p>
      </div>

      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>

      <SignedOut>
        <SignInButton>
          <button className="btn-save flex w-[80px] h-[37px] justify-center items-center rounded-[5px] border-solid border-[rgba(0,0,0,0.31) p-1 text-white font-medium">
            Sign in
          </button>
        </SignInButton>
      </SignedOut>
    </nav>
  );
};

export default Nav;
