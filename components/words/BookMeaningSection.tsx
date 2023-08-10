import React from 'react';
import Image from 'next/image';

const BookMeaningSection = () => {
  return (
    <section className="pt-20 flex w-[177px] h-[211px] flex-col justify-center items-center gap-4 shrink-0">
      <div className="text-medium flex flex-col gap-1 items-center">
        <p>Inside here,</p>
        <div className="flex flex-row gap-1">
          <p className="text-[#5B0CED]">meaning</p>
          <p>you will find</p>
        </div>
      </div>

      <Image
        className="shrink-0"
        src="/assets/images/meaning_book.png"
        alt="Meaning Book"
        width={79}
        height={82}
      />

      <div className="text-medium flex flex-col gap-1 items-center">
        <p>Time has come,</p>
        <div className="flex flex-row gap-1">
          <p>now change your</p>
          <p className="text-[#0085FF]">mind</p>
        </div>
      </div>
    </section>
  );
};

export default BookMeaningSection;
