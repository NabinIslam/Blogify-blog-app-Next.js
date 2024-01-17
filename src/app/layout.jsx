import Header from '@/components/Header';
import './globals.css';
import { Poppins } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import FooterComponent from '@/components/FooterComponent';
import TanstackQueryProvider from '../providers/TanstackQueryProvider';
import ScrollToTopButton from '../ui/ScrollToTopButton';
import { ClerkProvider } from '@clerk/nextjs';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: "Blogify | World's no. 1 blogging app",
};

export default function RootLayout({ children }) {
  return (
    <SkeletonTheme baseColor="#F0F0F0" highlightColor="#fff">
      <ClerkProvider>
        <html lang="en">
          <body className={poppins.className} suppressHydrationWarning={true}>
            <TanstackQueryProvider>
              <Header />
              {children}
              <FooterComponent />
              <Toaster
                position="top-center"
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
      </ClerkProvider>
    </SkeletonTheme>
  );
}
