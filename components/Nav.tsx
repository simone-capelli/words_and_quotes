import Image from 'next/image';

const Nav = () => {
  return (
    <nav className="fixed top-0 z-30 flex justify-between items-center w-full bg-slate-50 pt-2 px-10 pb-2">
      <Image
        src="/assets/icons/values.png"
        alt="Life Values"
        width={30}
        height={30}
      />

      <div className="header-title">
        <p className="text-[#268C41]">Feel</p>
        <p className="pl-3">Motivated</p>
      </div>

      <Image
        src="/assets/icons/goals.png"
        alt="Goals Black"
        width={30}
        height={30}
      />
    </nav>
  );
};

export default Nav;