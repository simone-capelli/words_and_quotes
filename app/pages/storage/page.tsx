'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import WordCard from '@components/words/WordCard';
import { Word } from '@customTypes/interfaces';

const WordsList = ({ words }: { words: Word[] }) => {
  return (
    <div className="pt-5 w-full flex flex-col gap-2">
      {words.map((word: Word) => (
        <WordCard word={word} key={word._id} />
      ))}
    </div>
  );
};

const Page = () => {
  const [words, setWords] = useState<Word[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchWords = async () => {
      const response = await fetch('/api/words', { cache: 'no-store' });
      const data = await response.json();
      setWords(data);
      setLoading(false);
    };
    fetchWords();
  }, []);
  return (
    <section className="w-full pt-12 text-[#000000]">
      <br />
      <h1 className="flex-center text-medium">Storage</h1>
      {loading && (
        <span className="loader ml-[19%] md:ml-[40%] sm:ml-[35%] md:mt-[15%] mt-[20%]">
          L &nbsp; ading
        </span>
      )}
      {!loading && <WordsList words={words} />}
      <br />
      <br />
      <br />
    </section>
  );
};

export default Page;
