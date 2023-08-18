'use client';

import { Word } from '@customTypes/interfaces';

export const ActionModal = ({
  word,
  action,
  isOpen,
  onClose,
  closeParentModal,
}: {
  word: Word;
  action: string;
  isOpen: boolean;
  onClose: () => void;
  closeParentModal: () => void;
}) => {
  const deleteWord = async (e: React.MouseEvent<HTMLButtonElement>) => {
    await fetch(`/api/words/${word._id}`, {
      method: 'DELETE',
      body: JSON.stringify({ id: word._id }),
    });
    closeAllModals();
    window.location.reload();
  };

  const closeAllModals = () => {
    closeParentModal();
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="p-4 flex flex-col gap-2 justify-between rounded-[5px] border-[1px] border-solid border-black bg-white">
        <p className="outfit">Do you want to delete this word?</p>
        <div className="flex flex-row justify-between mx-5 outfit">
          <button
            onClick={() => onClose()}
            className="opacity-50 px-3 rounded-lg border-2 border-solid border-[#D9D9D9]"
          >
            Close
          </button>
          <button
            onClick={deleteWord}
            className="border-[#FF0D0D] text-[#FF0D0D] border-[1px] rounded-[5px] px-2 py-1"
          >
            {action}
          </button>
        </div>
      </div>
    </div>
  );
};
