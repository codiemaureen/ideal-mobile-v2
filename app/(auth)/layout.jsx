import '@/assets/styles/globals.css'
import Header from '@/components/shared/header';
import { APP_NAME, APP_DESCRIPTION, SERVER_URL } from "@/lib/constants";

export const metadata = {
  title: `${APP_NAME}`,
  description: `${APP_DESCRIPTION}`,
  metadataBase: new URL(`${SERVER_URL}`)
};


export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body>
       <Header />
       {children}
      </body>
    </html>
  );
}
