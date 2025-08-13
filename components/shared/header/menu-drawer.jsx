import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { MenuIcon } from "lucide-react";

const MenuDrawer = () => {
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
    </DrawerHeader>
   </DrawerContent>
  </Drawer>
  );
}
 
export default MenuDrawer;