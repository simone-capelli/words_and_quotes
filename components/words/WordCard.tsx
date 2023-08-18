'use client';

import { Word } from '@customTypes/interfaces';
import Image from 'next/image';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';
import { suggestedMeaningByAI } from '@utils/functions';
import { PuffLoader } from 'react-spinners';

interface Props {
  word: Word;
}

const Modal = ({
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
    </div>
  );
};

const WordCard = ({ word }: Props) => {
  const [showTooltipTag, setShowTooltipTag] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex flex-row p-4 items-center justify-between w-full rounded-lg border-2 border-solid border-[rgba(0,0,0,0.70)]">
      <Image
        src={
          word.isLearned
            ? '/assets/icons/done_tick-green.png'
            : '/assets/icons/question-mark.png'
        }
        alt={word.isLearned ? 'Word Learned' : 'Word To Learn'}
        width={word.isLearned ? 20 : 24}
        height={word.isLearned ? 20 : 24}
      />

      <p className="text-medium">{word.word}</p>

      <div className="flex flex-row gap-2 items-center">
        <Tooltip
          title={word.tag}
          open={showTooltipTag}
          onClose={() => setShowTooltipTag(false)}
        >
          <Image
            onClick={() => setShowTooltipTag(!showTooltipTag)}
            src={`/assets/icons/tags/tag-${word.color}.png`}
            alt={`Tag ${word.color}`}
            width={22}
            height={22}
          />
        </Tooltip>
        <Image
          onClick={openModal}
          src="/assets/icons/info.png"
          alt="Info"
          width={20}
          height={20}
        />

        <Modal word={word} isOpen={modalOpen} onClose={closeModal} />
      </div>
    </div>
  );
};

export default WordCard;
