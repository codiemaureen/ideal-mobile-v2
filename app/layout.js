// import { Inter } from "next/font/google";
import '@/assets/styles/globals.css'
import { APP_NAME, APP_DESCRIPTION, SERVER_URL } from "@/lib/constants";

// const inter = Inter({ subsets: ['latin']});

export const metadata = {
  title: `${APP_NAME}`,
  description: `${APP_DESCRIPTION}`,
  metadataBase: new URL(`${SERVER_URL}`)
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
