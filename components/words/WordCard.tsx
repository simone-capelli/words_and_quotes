import { Word } from '@utils/interfaces';
import Image from 'next/image';

interface Props {
  word: Word;
}

const WordCard = ({ word }: Props) => {
  return (
    <div className="flex flex-row p-4 items-center justify-between w-full rounded-lg border-2 border-solid border-[rgba(0,0,0,0.70)]">
      {word.isLearned ? (
        <Image
          src="/assets/icons/done_tick-green.png"
          alt="Word Learned"
          width={20}
          height={20}
        />
      ) : (
        <Image
          src="/assets/icons/question-mark.png"
          alt="Word To Learn"
          width={20}
          height={20}
        />
      )}

      <p className="text-medium">{word.word}</p>

      <Image src="/assets/icons/info.png" alt="Info" width={20} height={20} />
    </div>
  );
};

export default WordCard;
