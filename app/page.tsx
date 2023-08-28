'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
const Home = () => {
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

  return (
    <section className="w-full flex-center flex-col pt-14 ">
      {/* <Image
        className="mt-12"
        src="/assets/images/word_big-letter_colored.png"
        alt="Word Letter"
        width={117}
        height={117}
      /> */}

      <br />
      <br />
      <br />
      <br />
    </section>
  );
};

export default Home;
