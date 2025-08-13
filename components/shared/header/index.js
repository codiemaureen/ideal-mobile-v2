import { APP_NAME } from "@/lib/constants";
import MenuDrawer from "./menu-drawer";



const Header = () => {
  return ( 
      <header className='w-full border-b bg-amber-500'>
        <div className="wrapper flex-between text-3xl">
          <div className="flex-start">
            <MenuDrawer />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </div>
        </div>
      </header>
    );
}

export default Header;