import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { getAllMenuDrawerOptions } from "@/lib/action/menu.actions";
import { MenuIcon } from "lucide-react";
import Link from "next/link";


const MenuDrawer = async () => {
 
 const services = await getAllMenuDrawerOptions();

 return ( 
  <Drawer direction='left'>
   <DrawerTrigger asChild>
    <Button variant='outline'>
     <MenuIcon />
    </Button>
   </DrawerTrigger>
   <DrawerContent >
    <DrawerHeader>
     <DrawerTitle>
      Menu
     </DrawerTitle>
     <div className="space-y-1">
      {services.map((service) => (
       <Button variant='ghost' className='w-full justify-start' key={service} asChild>
        <Link href={`/`}>
         {service}
        </Link>
       </Button>
      ))}
     </div>
    </DrawerHeader>
   </DrawerContent>
  </Drawer>
 );
}
 
export default MenuDrawer;