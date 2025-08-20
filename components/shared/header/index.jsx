import { APP_NAME } from "@/lib/constants";
import MenuDrawer from "./menu-drawer";
import Menu from "./menu";
import Link from "next/link";



const Header = () => {
  return ( 
    <header className='w-full border-b bg-amber-500'>
      <div className="wrapper flex-between">
        <div className="flex-start group">
          <MenuDrawer />
          <Link href='/'>
          
          <span className="hidden lg:block font-bold text-3xl ml-3 text-white text-center">
            🚧 Under Construction 🚧<br/>{APP_NAME} V2.0 in progress 
          </span></Link>
        </div>
        <Menu />
      </div>
    </header>
  );
}

export default Header;