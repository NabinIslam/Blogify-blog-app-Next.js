import Header from '@/components/Header';
import './globals.css';
import { Poppins } from 'next/font/google';
import AuthProvider from '@/context/AuthContext';
import { Toaster } from 'react-hot-toast';
import FooterComponent from '@/components/FooterComponent';
import TanstackQueryProvider from './TanstackQueryProvider';
import ScrollToTopButton from './ScrollToTopButton';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: "Blogify | World's no. 1 blogging app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className} suppressHydrationWarning={true}>
        <TanstackQueryProvider>
          <AuthProvider>
            <Header />
            {children}
            <FooterComponent />
          </AuthProvider>
          <Toaster
            position="bottom-right"
            toastOptions={{
              // Define default options
              className: '',
              duration: 5000,
              style: {
                background: '#363636',
                color: '#fff',
              },

              // Default options for specific types
              success: {
                duration: 3000,
                theme: {
                  primary: 'green',
                  secondary: 'black',
                },
              },
            }}
          />
        </TanstackQueryProvider>
        <ScrollToTopButton />
      </body>
    </html>
  );
}
