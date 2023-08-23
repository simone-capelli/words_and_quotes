import React from 'react';
import Image from 'next/image';
import BookMeaningSection from '@/components/words/BookMeaningSection';
import InputWordSection from '@/components/words/InputWordSection';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col pt-12">
      <Image
        className="pt-16"
        src="/assets/images/word_big-letter_colored.png"
        alt="Word Letter"
        width={117}
        height={117}
      />

      <div className="text-medium flex flex-row gap-1 pt-10">
        <p>Initial Page</p>
      </div>

      <br />
      <br />
      <br />
      <br />
    </section>
  );
};

export default Home;
