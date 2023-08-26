'use client';

import { SignedIn, SignedOut } from '@clerk/nextjs';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

const BottomBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  {
    /* <Image
          src="/assets/icons/feedback.png"
          alt="feedback"
          width={32}
          height={32}
        /> */
  }

  return (
    <section className="bottombar">
      <div className="bottombar_container">
        {pathname === '/' && (
          <>
            <div className="outfit white-circle">menu</div>
            <SignedOut>
              <Image
                src="/assets/bottombar/home.png"
                alt="home"
                width={32}
                height={32}
              />
            </SignedOut>
          </>
        )}
        <SignedIn>
          {pathname === '/' && (
            <>
              <Image
                onClick={() => {
                  router.push('/words');
                }}
                src="/assets/images/word_medium-letter_white.png"
                alt="Word_letter white"
                width={40}
                height={40}
              />

              <div
                className="white-circle"
                onClick={() => {
                  router.push('/words/storage');
                }}
              >
                <Image
                  src="/assets/bottombar/storage.png"
                  alt="Storage"
                  width={30}
                  height={30}
                />
              </div>
            </>
          )}
          {(pathname === '/words' || pathname === '/words/storage') && (
            <>
              <div className="white-circle">
                <Image
                  src="/assets/bottombar/tutorial.png"
                  alt="Tutorial"
                  width={30}
                  height={30}
                />
              </div>
              <Image
                onClick={() => {
                  router.push('/');
                }}
                src="/assets/bottombar/home.png"
                alt="home"
                width={32}
                height={32}
              />
            </>
          )}
          {pathname === '/words' && (
            <div
              className="white-circle"
              onClick={() => {
                router.push('/words/storage');
              }}
            >
              <Image
                src="/assets/bottombar/storage.png"
                alt="Storage"
                width={30}
                height={30}
              />
            </div>
          )}
          {pathname === '/words/storage' && (
            <Image
              onClick={() => {
                router.push('/words');
              }}
              src="/assets/images/word_medium-letter_white.png"
              alt="Word_letter white"
              width={40}
              height={40}
            />
          )}
        </SignedIn>
      </div>
    </section>
  );
};

export default BottomBar;
