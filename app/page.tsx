'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
} from 'next-share';
const Home = () => {
  const WEQ_URL = '';
  const WEQ_MSG = 'Words&Quotes è qui! Salva le tue parole con un click.';
  const INSTA_PROFILE = 'https://www.instagram.com/wordsequotes/';

  const router = useRouter();
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    const fetchTotalUsers = async () => {
      const response = await fetch('/api/users', {
        method: 'GET',
      });
      const data = await response.json();

      setTotalUsers(data);
    };
    fetchTotalUsers();
  });

  const [showShareBar, setShowShareBar] = useState(false);

  const ShareBar = () => {
    return (
      <div className="share-bar">
        <WhatsappShareButton url={WEQ_URL} title={WEQ_MSG}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>

        <TelegramShareButton url={WEQ_URL} title={WEQ_MSG}>
          <TelegramIcon size={32} round />
        </TelegramShareButton>

        <Image
          onClick={() => {
            window.location.href = INSTA_PROFILE;
          }}
          src="/assets/homepage/instagram.png"
          alt="Instagram"
          width={34}
          height={34}
        />
      </div>
    );
  };

  const handleShare = () => {
    setShowShareBar(!showShareBar);
  };
  return (
    <section className="w-full flex-center flex-col pt-14 ">
      <br />
      <div className="gap-2 w-full flex flex-row justify-between items-center">
        <Image
          src="/assets/homepage/users.png"
          alt="users"
          width={25}
          height={25}
        />
        <div className="w-full h-6 border-2 rounded-[36px] border-black bg-white">
          <div
            className="h-full bg-[#8E00FD] rounded-[36px]"
            style={{
              width: (totalUsers * 100) / 500 + '%',
            }}
          ></div>
        </div>
        {totalUsers}/500
        <Image
          onClick={handleShare}
          src="/assets/homepage/share.png"
          alt="share"
          width={25}
          height={25}
          className={showShareBar ? 'rotate-[135deg]' : 'rotate-[42deg]'}
        />
        {showShareBar && <ShareBar />}
      </div>

      <div className="pt-10 header-title gap-4 flex flex-col uppercase text-black items-center">
        <p className="">Accresci il tuo</p>
        <div className="flex flex-row">
          <p className="text-[#8E00FD]">Val</p>
          <Image
            src="/assets/homepage/stonks-purple.png"
            alt="Valore"
            width={38}
            height={38}
          />
          <p className="text-[#8E00FD]">re</p>
        </div>
        <p className="">ogni giorno</p>
      </div>

      <div
        className="mt-6 flex flex-row justify-center items-center gap-2.5 px-4 py-3 rounded-[5px] bg-black cursor-pointer"
        onClick={() => {
          router.push('/words');
        }}
      >
        <Image
          src="/assets/homepage/shooting-star.png"
          alt="stars_CTA"
          width={24}
          height={24}
        />
        <p className="text-white font-medium cursor-pointer">Inizia ora!</p>
      </div>

      <Image
        className="mt-12"
        src="/assets/images/word_big-letter_colored.png"
        alt="Word Letter"
        width={117}
        height={117}
      />

      <div className="mt-8 flex flex-row justify-center items-center gap-2.5 px-4 py-3 rounded-[5px] bg-white cursor-pointer">
        <p className="text-black font-medium">Scopri di più</p>
        <Image
          src="/assets/homepage/world.png"
          alt="World_CTA"
          width={24}
          height={24}
        />
      </div>

      <div className="mt-8 gap-1 outfit flex flex-row capitalize text-[20px]">
        <p className="text-[#268C41]">W</p>
        <p>&</p>
        <p className="text-[#0085FF]">Q</p>
      </div>

      <br />
      <br />
      <br />
      <br />
    </section>
  );
};

export default Home;
