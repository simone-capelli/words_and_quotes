'use client';

import { useState } from 'react';
import Image from 'next/image';
import { findMostMatchedString, suggestedMeaningByAI } from '@utils/functions';
import { PuffLoader } from 'react-spinners';

const InputWordSection = () => {
  const [isLearned, setIsLearned] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [meaningSubmitting, setMeaningSubmitting] = useState(false);

  const [wordInput, setWordInput] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [matchedTag, setMatchedTag] = useState('');
  const [meaningInput, setMeaningInput] = useState('');

  const saveWord = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!wordInput || !tagInput || meaningSubmitting) {
      return;
    }
    setSubmitting(true);

    try {
      //console.log(wordInput, tagInput, isLearned);

      const response = fetch('/api/words/new', {
        method: 'POST',
        body: JSON.stringify({
          word: wordInput.toLowerCase(),
          tag: tagInput,
          isLearned: isLearned,
          meaning: meaningInput.trim(),
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
        setMeaningInput('');
      }, 1500);
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

  const handleMeaningInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setMeaningInput(value);
  };

  const suggestMeaning = async (e: React.MouseEvent<HTMLImageElement>) => {
    const word = wordInput;
    const maxWords = 50; // TODO: fare in modo che maxWords sia inserito dall'utente nelle impostazioni

    if (!word) {
      return;
    }

    setMeaningSubmitting(true);
    setMeaningInput(await suggestedMeaningByAI(word, maxWords));
    setMeaningSubmitting(false);
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
            alt="Word Learned"
            width={28}
            height={28}
          />
        ) : (
          <Image
            onClick={() => setIsLearned(true)}
            src="/assets/icons/question-mark.png"
            alt="Word To Learn"
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

      {/* Meaning Section */}
      {isLearned && (
        <div className="inline-flex justify-center items-center gap-2 pl-[9px] pr-[11.12px] pt-[7px] pb-2">
          {meaningSubmitting ? (
            <PuffLoader
              color="#1d9ff3"
              loading
              size={34}
              speedMultiplier={1}
              className="mr-2"
            />
          ) : (
            <Image
              onClick={suggestMeaning}
              className="mx-1"
              src="/assets/icons/meaningInput.png"
              alt="Light Bulb"
              width={28}
              height={28}
            />
          )}

          <textarea
            className="p-2 rounded-lg border-2 border-solid border-[#D9D9D9]
            w-full min-h-[100px] max-h-64"
            maxLength={500}
            value={meaningInput}
            placeholder="Meaning"
            onChange={handleMeaningInputChange}
          />
        </div>
      )}

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
