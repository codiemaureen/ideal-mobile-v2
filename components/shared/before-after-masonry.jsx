"use client";

import { useRef, useState } from "react";
import Image from "next/image";

function MasonryHoverSwap({ before, after, alt, title, description, tag }) {
  const [showBefore, setShowBefore] = useState(false);
  const lastTap = useRef(0);

  const onTouchStart = (e) => {
    e.stopPropagation();
    const now = Date.now();
    const delta = now - lastTap.current;

    if (delta > 0 && delta < 300) {
      setShowBefore((prev) => !prev);
    }

    lastTap.current = now;
  };

  return (
    <article
      className="group mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40"
      onMouseEnter={() => setShowBefore(true)}
      onMouseLeave={() => setShowBefore(false)}
      onTouchStart={onTouchStart}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-black">
        <Image
          src={showBefore ? before : after}
          alt={alt}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute left-4 top-4">
          {tag && (
            <span className="rounded-full border border-[#D4AF37]/40 bg-black/45 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#E7C65C]">
              {tag}
            </span>
          )}
        </div>

        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
          <div>
            <div className="mb-2 inline-flex rounded-full bg-black/55 px-3 py-1 text-xs font-semibold text-white">
              {showBefore ? "Before" : "After"}
            </div>
            {title && (
              <h3 className="text-lg font-semibold text-white sm:text-xl">
                {title}
              </h3>
            )}
          </div>

          <div className="rounded-full bg-black/55 px-3 py-1 text-[11px] text-white/90">
            Tap to compare
          </div>
        </div>
      </div>

      {(title || description) && (
        <div className="space-y-2 p-5">
          {description && (
            <p className="text-sm leading-6 text-white/75 sm:text-base">
              {description}
            </p>
          )}
        </div>
      )}
    </article>
  );
}

export default function BeforeAfterMasonry({ pairs }) {
  if (!pairs?.length) return null;

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
          More Transformations
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-black/70 uppercase sm:text-4xl">
          Browse recent before and after details
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray sm:text-base">
          Explore more interior and exterior transformations with the same
          craftsmanship and attention to detail shown in every service.
        </p>
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {pairs.map((p, i) => (
          <MasonryHoverSwap
            key={p.key ?? i}
            before={p.before}
            after={p.after}
            alt={p.alt ?? `before-after-${p.key ?? i}`}
            title={p.title}
            description={p.description}
            tag={p.tag}
          />
        ))}
      </div>
    </section>
  );
}