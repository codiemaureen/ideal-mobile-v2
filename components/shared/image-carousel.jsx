"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function ImageCarousel({ images }) {
 return ( 

  <Carousel className="w-full mb-12" opts={{
     loop: true
    }}
    plugins={[
      Autoplay({
       delay:2000,
       stopOnInteraction: true,
       stopOnMouseEnter: false,
      })
    ]}>
     <h2 className="text-center text-3xl font-bold my-5">Complete Care for Every Vehicle!</h2>
     <CarouselContent>
       {images.map((src, index) => (
         <CarouselItem key={index}>
           <div className="relative mx-auto">
             <Image
               src={src}
               alt={`Carousel image ${index + 1}`}
               width='0'
               height='0'
               sizes="100vw"
               className="w-full h-auto"
             />
           </div>
         </CarouselItem>
       ))}
     </CarouselContent>
     <CarouselPrevious />
     <CarouselNext />
   </Carousel>
  );
}
