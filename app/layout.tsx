import Nav from '@components/Nav';
import BottomBar from '@components/BottomBar';
import '@styles/globals.css';

export const metadata = {
  title: 'WordsAndQuotes',
  description: 'A useful and funny system to store words and quotes daily',
};

const RootLayout = ({ children }: any) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
          <BottomBar />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
