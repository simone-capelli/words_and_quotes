'use client';

import { SignedIn, SignedOut } from '@clerk/nextjs';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

const BottomBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <section className="bottombar">
      <div className="bottombar_container">
        <Image
          src="/assets/bottombar/words.png"
          alt="words"
          width={28}
          height={28}
        />
        <Image
          src="/assets/bottombar/home-select.png"
          alt="home"
          width={40}
          height={40}
        />
        <Image
          src="/assets/bottombar/storage.png"
          alt="storage"
          width={30}
          height={30}
        />
      </div>
    </section>
  );
};

export default BottomBar;
