import { useEffect, useState } from 'react';
import Image from 'next/image';
import BookMeaningSection from '@/components/words/BookMeaningSection';
import InputWordSection from '@/components/words/InputWordSection';
import { clerkClient } from '@clerk/nextjs';

const Home = async () => {
  const totalUsers = await clerkClient.users.getCount();
  return (
    <section className="w-full flex-center flex-col pt-14 ">
      <br />
      <div className="gap-4 w-full flex flex-row justify-between items-center">
        <Image
          src="/assets/homepage/users.png"
          alt="users"
          width={25}
          height={25}
        />
        <div className="w-full h-6 border-2 rounded-[36px] border-black bg-white">
          <div
            className="h-full bg-[#8E00FD] rounded-[36px]"
            style={{
              width: (totalUsers * 100) / 500 + '%',
            }}
          ></div>
        </div>
        {totalUsers}/500
      </div>

      <Image
        className="pt-16"
        src="/assets/images/word_big-letter_colored.png"
        alt="Word Letter"
        width={117}
        height={117}
      />

      <br />
      <br />
      <br />
      <br />
    </section>
  );
};

export default Home;
