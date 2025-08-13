import { APP_NAME } from "@/lib/constants";

const Header = () => {
 return ( 
    <header className='w-full border-b bg-amber-500'>
      <div className="wrapper flex-between text-3xl">
        <span className="hidden lg:block font-bold text-2xl ml-3">
          {APP_NAME}
        </span>
      </div>
    </header>
  );
}
 
export default Header;