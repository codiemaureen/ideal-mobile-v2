import '@/assets/styles/globals.css'
import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';
import { APP_NAME, APP_DESCRIPTION, SERVER_URL } from "@/lib/constants";

export const metadata = {
  title: `${APP_NAME}`,
  description: `${APP_DESCRIPTION}`,
  metadataBase: new URL(`${SERVER_URL}`)
};


export default function RootLayout({ children }) {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="pt-40 flex-1 wrapper">
          {children}
        </main>
        <Footer />
      </div>
  </>
  );
}
