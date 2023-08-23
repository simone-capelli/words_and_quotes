import Image from 'next/image';

const Nav = () => {
  return (
    <nav className="fixed top-0 z-30 flex justify-between items-center w-full bg-slate-50 pt-2 px-6 pb-2">
      <Image
        src="/assets/icons/doubts-button.png"
        alt="Questions"
        width={30}
        height={30}
      />

      <div className="header-title">
        <p className="text-[#268C41]">Words</p>
        <p className="px-2">&</p>
        <p className="text-[#0085FF]">Quotes</p>
      </div>

      <Image
        src="/assets/icons/user.png"
        alt="authentication"
        width={23}
        height={23}
      />
    </nav>
  );
};

export default Nav;
