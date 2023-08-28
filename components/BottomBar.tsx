'use client';

import { SignedIn, SignedOut } from '@clerk/nextjs';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

const BottomBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <section className="bottombar">
      <div className="bottombar_container">
        {/* Quando mi trovo sulla pagina corrente l'icona diventa verde, altrimenti bianca */}
      </div>
    </section>
  );
};

export default BottomBar;
