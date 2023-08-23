'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const BottomBar = () => {
  const router = useRouter();
  return (
    <section className="bottombar">
      <div className="bottombar_container">
        <Image
          src="/assets/icons/feedback.png"
          alt="feedback"
          width={32}
          height={32}
        />
        <Image
          onClick={() => {
            router.push('/words');
          }}
          src="/assets/images/word_medium-letter_white.png"
          alt="Word_letter white"
          width={35}
          height={35}
        />
        <Image
          onClick={() => {
            router.push('/words/storage');
          }}
          src="/assets/icons/storage.png"
          alt="Storage"
          width={32}
          height={32}
        />
      </div>
    </section>
  );
};

export default BottomBar;
