import React from 'react';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Welcome to your
        <br className="max-md:hidden" />
        <span className="blue_gradient text-center"> Next.js TS template</span>
      </h1>
      <p className="desc text-center">
        This is a Next.js template built with TypeScript and TailwindCSS, which
        includes some basics styles in the globals.css file
      </p>

      {/* Feed */}
    </section>
  );
};

export default Home;
