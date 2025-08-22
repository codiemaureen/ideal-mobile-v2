import Menu from "@/components/shared/header/menu";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import MainNav from "./main-nav";
import { SessionProvider } from "next-auth/react";
import BackButton from "@/components/shared/back-button";


export default function UserLayout({
  children}) {
  return (
    <>
      <div className="flex flex-col">
        <div className="border-b container mx-auto">
          <div className="flex items-center h-16 px-4">
          <Link href='/' className="w-22">
            <Image src='/images/logo.jpg' className="rounded-full" width={48} height={48} alt={APP_NAME}/>
          </Link>
          <MainNav className="mx-6" />
          <div className="ml-auto items-center flex space-x-4">
            <Menu />
          </div>
          </div>
        </div>
        <div className="flex-1 container mx-auto p-8 pt-6 space-y-4">
          <div className="flex justify-end">
            <BackButton className="h-8 px-2" />
          </div>
        </div>
          
        <div className="flex-1 space-y-4 p-8 pt-6 container mx-auto">
          <SessionProvider>
            {children}
          </SessionProvider>
        </div>
      </div>
    </>
  );
}
