'use client';

import { useState } from 'react';
import Image from 'next/image';
import { findMostMatchedString } from '@utils';

const InputWordSection = () => {
  const [isLearned, setIsLearned] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [wordInput, setWordInput] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [matchedTag, setMatchedTag] = useState('');

  const saveWord = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!wordInput || !tagInput) {
      return;
    }
    setSubmitting(true);

    try {
      console.log(wordInput, tagInput, isLearned);

      const response = fetch('/api/words/new', {
        method: 'POST',
        body: JSON.stringify({
          word: wordInput,
          tag: tagInput,
          isLearned: isLearned,
        }),
      });
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setSubmitting(false);
        // reset everything
        setIsLearned(false);
        setWordInput('');
        setTagInput('');
        setMatchedTag('');
      }, 2000);
    }
  };

  const handleWordInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setWordInput(value.trim());
  };

  const handleTagInputChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setTagInput(value);

    setMatchedTag(await findMostMatchedString(value));
  };

  return (
    <div className="flex flex-col gap-4 pt-6">
      {/* Word Section */}
      <div className="inline-flex justify-center items-center gap-2 pl-[9px] pr-[11.12px] pt-[7px] pb-2">
        {isLearned ? (
          <Image
            onClick={() => setIsLearned(false)}
            className="mx-1"
            src="/assets/icons/done_tick-green.png"
            alt="Question Mark"
            width={28}
            height={28}
          />
        ) : (
          <Image
            onClick={() => setIsLearned(true)}
            src="/assets/icons/question-mark.png"
            alt="Learn"
            width={36}
            height={36}
          />
        )}

        <input
          className="p-2 rounded-lg border-2 border-solid border-[#D9D9D9]"
          type="text"
          maxLength={33}
          value={wordInput}
          placeholder="Word"
          onChange={handleWordInputChange}
        />
      </div>

      {/* Tag Section */}
      <div className="flex flex-col">
        <div className="inline-flex justify-center items-center gap-2 pl-[9px] pr-[11.12px] pt-[7px] pb-2">
          <Image
            src="/assets/icons/tag-blue.png"
            alt="Tag blue"
            width={36}
            height={36}
            // in the next version, I want this Image to be a svg and have the possibility to change the color
          />
          <input
            className="p-2 rounded-lg border-2 border-solid border-[#D9D9D9]"
            type="text"
            maxLength={50}
            value={tagInput}
            placeholder="Tag"
            onChange={handleTagInputChange}
            onBlur={() => {
              setTagInput(tagInput.trim());
            }}
          />
        </div>
        {matchedTag && (
          <div className="inline-flex justify-center items-center gap-2 pl-[9px] pr-[11.12px] pt-[7px] pb-2">
            <Image
              src="/assets/icons/right-arrow_blue.png"
              alt="Learn"
              width={30}
              height={30}
            />

            <div
              onClick={() => {
                setTagInput(matchedTag);
                setMatchedTag('');
              }}
              className="cursor-pointer max-w-[250px] rounded-lg p-2 border-2 border-solid border-[#d9d9d9d1] bg-white"
            >
              {matchedTag}
            </div>
          </div>
        )}
      </div>

      {/* Save and Change Section */}
      <div className="flex flex-row gap-2 mx-auto pt-3">
        <button className="btn">
          <Image
            src="/assets/icons/arrow.png"
            alt="Tag blue"
            width={16}
            height={16}
          />
          Quote
        </button>
        <button
          className="btn btn-save text-white font-medium"
          type="submit"
          onClick={saveWord}
        >
          {submitting ? (
            <Image
              src="/assets/icons/save_tick-white.png"
              alt="Saved"
              width={16}
              height={16}
            />
          ) : (
            'Save'
          )}
        </button>
      </div>
    </div>
  );
};

export default InputWordSection;
