import { APP_NAME } from "@/lib/constants";
import MenuDrawer from "./menu-drawer";
import Menu from "./menu";
import Link from "next/link";
import Image from "next/image";


const Header = () => {
  return ( 
    <header className='w-full border-b bg-amber-500'>
      <div className="wrapper flex-between">
        <div className="flex-start group">
          <Link href='/'>
            <Image
            src="/images/logo.png"
            alt="Ideal Mobile Detailing"
            width={150}
            height={50}
            priority
            className="object-contain"
          />
          </Link>
          {/* <MenuDrawer /> */}
          <Link href='/' className="justify-center">
          <span className="hidden lg:block font-bold text-3xl ml-3 text-white text-center">
            {APP_NAME} 
          </span></Link>
        </div>
        <Menu />
      </div>
    </header>
  );
}

export default Header;