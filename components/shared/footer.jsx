import { APP_NAME } from "@/lib/constants";
import Link from "next/link";

const Footer = () => {
 const currentYear = new Date().getFullYear();

 return ( 
  <footer className="border-1">
   <div className="p-5 flex-center">
    <p>{currentYear} {APP_NAME}. All Right Reserved</p>
    </div>
    <div className="pb-5 flex-center">
    <p>Website by <Link href='https://codiegroth.com/'>Codie Groth</Link></p>
    </div>
  </footer>
  );
}
 
export default Footer;