'use client';

import { Word } from '@customTypes/interfaces';
import { suggestedMeaningByAI } from '@utils/functions';
import { PuffLoader } from 'react-spinners';
import Image from 'next/image';
import { useState } from 'react';
import { ActionModal } from './ActionModal';

export const Modal = ({
  word,
  isOpen,
  onClose,
}: {
  word: Word;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [meaningSubmitting, setMeaningSubmitting] = useState(false);
  const [meaningInput, setMeaningInput] = useState(word.meaning);

  const suggestMeaning = async (e: React.MouseEvent<HTMLImageElement>) => {
    const maxWords = 50; // TODO: fare in modo che maxWords sia inserito dall'utente nelle impostazioni

    setMeaningSubmitting(true);
    setMeaningInput(await suggestedMeaningByAI(word.word, maxWords));
    setMeaningSubmitting(false);
  };

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="p-4 flex flex-col justify-between w-[300px] h-[450px] shrink-0 rounded-[5px] border-[2px] border-solid border-black bg-white">
        <div>
          <div className="w-full flex flex-row justify-between items-center">
            <Image
              src={
                word.isLearned
                  ? '/assets/icons/done_tick-green.png'
                  : '/assets/icons/question-mark.png'
              }
              alt={word.isLearned ? 'Word Learned' : 'Word To Learn'}
              width={word.isLearned ? 24 : 28}
              height={word.isLearned ? 24 : 28}
            />
            <p className="header-title">{word.word}</p>

            <Image
              src={`/assets/icons/tags/tag-${word.color}.png`}
              alt={`Tag ${word.color}`}
              width={28}
              height={28}
            />
          </div>

          <p className="tag-text flex-center items-center">{`#${word.tag}`}</p>

          <p className="w-full mt-4 h-[1px] bg-black"></p>
        </div>

        <div className="h-[250px]">
          {meaningInput ? (
            <textarea
              className="px-2 pt-1 rounded-lg border-2 border-solid border-[#D9D9D9]
            w-full h-[250px] resize-none"
              maxLength={500}
              value={meaningInput}
              placeholder="Meaning"
            />
          ) : (
            <>
              <p style={{ fontFamily: 'Outfit' }}>
                Insert meaning or generate it with AI!
              </p>
              {meaningSubmitting ? (
                <PuffLoader
                  className="mx-auto mt-14"
                  color="#1d9ff3"
                  loading
                  size={100}
                  speedMultiplier={1}
                />
              ) : (
                <Image
                  onClick={suggestMeaning}
                  className="mx-auto mt-14"
                  src="/assets/icons/meaningInput.png"
                  alt="Light Bulb"
                  width={100}
                  height={100}
                />
              )}
            </>
          )}
        </div>

        <div className="w-full flex flex-row justify-between items-center">
          <Image
            onClick={openModal}
            src={'/assets/icons/trash.png'}
            alt={word.isLearned ? 'Word Learned' : 'Word To Learn'}
            width={28}
            height={28}
          />
          <button
            onClick={onClose}
            className="bg-white opacity-50 px-3 rounded-lg border-2 border-solid border-[#D9D9D9]"
          >
            Close
          </button>

          <Image
            src={`/assets/icons/edit.png`}
            alt={`Tag ${word.color}`}
            width={28}
            height={28}
          />
        </div>
      </div>

      <ActionModal
        word={word}
        action="Delete"
        isOpen={modalOpen}
        onClose={closeModal}
        closeParentModal={onClose}
      />
    </div>
  );
};
