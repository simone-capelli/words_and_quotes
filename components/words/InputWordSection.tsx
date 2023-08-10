import React from 'react';
import Image from 'next/image';

const InputWordSection = () => {
  return (
    <div className="flex flex-col gap-4 pt-6">
      {/* Word Section */}
      <div className="inline-flex justify-center items-center gap-2 pl-[9px] pr-[11.12px] pt-[7px] pb-2">
        <Image
          src="/assets/icons/question-mark.png"
          alt="Question Mark"
          width={36}
          height={36}
        />
        <input
          className="p-2 rounded-lg border-2 border-solid border-[#D9D9D9]"
          placeholder="Word"
        />
      </div>
      {/* Tag Section */}
      <div className="inline-flex justify-center items-center gap-2 pl-[9px] pr-[11.12px] pt-[7px] pb-2">
        <Image
          src="/assets/icons/tag-blue.png"
          alt="Tag blue"
          width={36}
          height={36}
        />
        <input
          className="p-2 rounded-lg border-2 border-solid border-[#D9D9D9]"
          placeholder="Tag"
        />
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
        <button className="btn btn-save text-white font-medium">Save</button>
      </div>
    </div>
  );
};

export default InputWordSection;
