import { APP_NAME } from "@/lib/constants";
import MenuDrawer from "./menu-drawer";



const Header = () => {
  return ( 
    <header className='w-full border-b bg-amber-500'>
      <div className="wrapper flex-between">
        <div className="flex-start group">
          <MenuDrawer />
          <span className="hidden lg:block font-bold text-3xl ml-3 text-white">
            {APP_NAME}
          </span>
        </div>
      </div>
    </header>
    );
}

export default Header;