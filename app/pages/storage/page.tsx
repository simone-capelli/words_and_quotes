'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import WordCard from '@components/words/WordCard';
import { Word } from '@customTypes/interfaces';

const WordsList = ({ words }: { words: Word[] }) => {
  return (
    <div className="pt-3 w-full flex flex-col gap-2">
      {words.map((word: Word) => (
        <WordCard word={word} key={word._id} />
      ))}
    </div>
  );
};

const Page = () => {
  const [words, setWords] = useState<Word[]>([]);
  const [filteredWords, setFilteredWords] = useState<Word[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchWords = async () => {
    setLoading(true);
    const response = await fetch('/api/words', { cache: 'no-store' });
    const data = await response.json();
    setWords(data);
    setFilteredWords(data);

    setLoading(false);
  };

  useEffect(() => {
    fetchWords();
  }, []);

  const [filterByLearned, setFilterByLearned] = useState(0);

  const handleFilterByLearned = () => {
    if (filterByLearned === 0) {
      const filteredWords = words.filter((word) => word.isLearned === false);
      setFilteredWords(filteredWords);

      setFilterByLearned(1);
    } else if (filterByLearned === 1) {
      const filteredWords = words.filter((word) => word.isLearned === true);
      setFilteredWords(filteredWords);

      setFilterByLearned(2);
    } else {
      fetchWords();

      setFilterByLearned(0);
    }
  };

  return (
    <section className="w-full pt-12 text-[#000000]">
      <h1 className="pt-1 flex-center text-medium">Storage</h1>
      {loading && (
        <span className="loader ml-[19%] md:ml-[40%] sm:ml-[35%] md:mt-[15%] mt-[20%]">
          L &nbsp; ading
        </span>
      )}
      {!loading && (
        <div>
          <div className="pt-5 p-2 flex flex-row justify-between items-center">
            {filterByLearned === 0 ? (
              <Image
                onClick={handleFilterByLearned}
                src={'/assets/icons/question-mark.png'}
                alt="Filter Not selected"
                width={32}
                height={32}
                className="opacity-50 cursor-pointer"
              />
            ) : filterByLearned === 1 ? (
              <Image
                onClick={handleFilterByLearned}
                src={'/assets/icons/question-mark.png'}
                alt="Learned"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            ) : (
              <Image
                onClick={handleFilterByLearned}
                src={'/assets/icons/done_tick-green.png'}
                alt="To Learn"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            )}

            <Image
              src={'/assets/icons/tags/tag-unselect.png'}
              alt="Tag Not Selected"
              width={32}
              height={32}
            />

            <Image
              src={'/assets/icons/down-arrow.png'}
              alt="Down Arrow"
              width={32}
              height={32}
            />
          </div>
          <WordsList words={filteredWords} />
        </div>
      )}
      <br />
      <br />
      <br />
    </section>
  );
};

export default Page;
