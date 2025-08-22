import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger, DrawerClose } from "@/components/ui/drawer";
import { getAllMenuDrawerOptions } from "@/lib/action/menu.actions";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { MenuIcon } from "lucide-react";
import Link from "next/link";


const MenuDrawer = async () => {
 
 const services = await getAllMenuDrawerOptions();

  return (
   <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button variant="outline">
          <MenuIcon />
        </Button>
      </DrawerTrigger>

      <DrawerContent className="px-4">
        <DrawerHeader className="items-start">
          <DrawerTitle>Menu</DrawerTitle>
        </DrawerHeader>

        <nav className="pb-4">
          <div className="space-y-2">
            {services.map((service) => (
              <div key={service.link} className="space-y-1">
                {/* parent */}
                <DrawerClose asChild>
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href={service.link}>{service.title}</Link>
                  </Button>
                </DrawerClose>

                {/* always show sublinks */}
                {service.subtitles?.length > 0 && (
                  <div className="pl-4 space-y-1">
                    {service.subtitles.map((st, i) => (
                      <DrawerClose asChild key={i}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full justify-start"
                          asChild
                        >
                          <Link href={st.link}>{st.title}</Link>
                        </Button>
                      </DrawerClose>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      </DrawerContent>
   </Drawer>
  );
}
 
export default MenuDrawer;