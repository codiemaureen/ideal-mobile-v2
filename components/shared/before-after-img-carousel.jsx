"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function HoverSwap({ before, after, alt }) {
  const [hover, setHover] = useState(false);
  const lastTap = useRef(0);

  const onTouchStart = (e) => {
    // Prevent Embla from treating this as a swipe when double-tapping
    e.stopPropagation();
    const now = Date.now();
    const delta = now - lastTap.current;
    if (delta > 0 && delta < 300) {
      setHover((h) => !h); // toggle on double-tap
    }
    lastTap.current = now;
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onTouchStart={onTouchStart}
    >
      <Image
        src={hover ? before : after}
        alt={alt}
        width={1200}
        height={1200}
        className="h-full w-full object-contain sm:h-80 md:h-96"
        priority={false}
      />
      
      <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-xs text-white">
        {hover ? "Before" : "After"} — hover / double-tap
      </div>
    </div>
  );
}

export default function BeforeAfterCarousel({ pairs }) {
  if (!pairs?.length) return null;

  return (
    <Carousel className="mx-auto w-full max-w-4xl">
      <CarouselContent>
        {pairs.map((p, i) => (
          <CarouselItem key={p.key ?? i} className="p-2">
            <HoverSwap
              before={p.before}
              after={p.after}
              alt={`before-after-${p.key ?? i}`}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
