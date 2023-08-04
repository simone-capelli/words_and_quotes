import '@styles/globals.css';

export const metadata = {
  title: 'New App',
  description: 'Description of new app',
};

const RootLayout = ({ children }: any) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          {/* <Nav /> */}
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
