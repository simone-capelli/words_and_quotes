import Image from 'next/image';

const BottomBar = () => {
  return (
    <section className="bottombar">
      <div className="bottombar_container">
        <Image
          src="/assets/icons/find-meaning.png"
          alt="Meaning"
          width={30}
          height={30}
        />
        <Image
          src="/assets/images/word_medium-letter_white.png"
          alt="Word_letter white"
          width={35}
          height={35}
        />
        <Image
          src="/assets/icons/storage.png"
          alt="Storage"
          width={30}
          height={30}
        />
      </div>
    </section>
  );
};

export default BottomBar;
