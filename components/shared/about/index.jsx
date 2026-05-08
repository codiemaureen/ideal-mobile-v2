import Image from "next/image";
import { Check, Sparkles, ShieldCheck } from "lucide-react";

const aboutPoints = [
  {
    icon: Check,
    title: "Convenient. Professional. Reliable.",
    text: "Ideal Mobile Detailing brings high-quality interior and exterior detailing directly to your driveway, workplace, or garage — saving you time without sacrificing results.",
  },
  {
    icon: Sparkles,
    title: "Built Around The Details.",
    text: "From deep interior cleaning to paint-safe exterior washes, every service is focused on restoring a cleaner, sharper, better-protected vehicle.",
  },
  {
    icon: ShieldCheck,
    title: "Service You Can Trust.",
    text: "We show up prepared, communicate clearly, and treat every vehicle with care — whether it is a daily driver, family SUV, truck, or weekend car.",
  },
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 text-[#171717]">
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto mb-16 max-w-4xl text-center">
          <div className="mb-2 flex items-center justify-center gap-8">
            <span className="h-px w-28 bg-[#C9A646]" />
            <span className="text-2xl">
             <Image src="/images/logo2.png" width={220} height={220}/>
            </span>
            <span className="h-px w-28 bg-[#C9A646]" />
          </div>

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#C9A646]" id="about">
            About Ideal Mobile Detailing
          </p>

          <h2 className="font-serif text-4xl font-black uppercase leading-tight text-[#101828] md:text-6xl">
            Premium Detailing That Comes To You
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#3f3f46]">
            Ideal Mobile Detailing helps Metro Detroit drivers keep their
            vehicles looking clean, protected, and well cared for — without
            the hassle of dropping your car off at a shop.
          </p>
        </div>


        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-8">
            {aboutPoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`grid gap-5 border-[#D8C7A1] pb-8 md:grid-cols-[70px_1fr] ${
                    index !== aboutPoints.length - 1 ? "border-b" : ""
                  }`}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-[0_18px_45px_rgba(0,0,0,0.10)]">
                    <Icon className="h-7 w-7 text-[#C9A646]" />
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl font-black uppercase leading-none text-[#111827]">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-base leading-7 text-[#3f3f46]">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>


          <div className="relative">
            <div className="absolute -inset-4 rounded-4xl bg-[#C9A646]/20 blur-2xl" />

            <Image
              src="/images/about-detailing.png"
              alt="Professional mobile detailing service"
              width={600}
              height={750}
              className="relative aspect-4/5 w-full rounded-4xl object-cover shadow-2xl"
            />
          </div>
        </div>

        
        <div className="mt-20 overflow-hidden rounded-[1.75rem] bg-black p-8 text-white shadow-2xl md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[#C9A646]">
                Ready For A Cleaner Vehicle?
              </p>
              <h3 className="font-serif text-2xl font-black uppercase md:text-3xl">
                Book Your Mobile Detail Today
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/75">
                Choose your service, pick a time, and we’ll bring the detail
                shop experience directly to you.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://calendly.com/idealmobiledetailingmi/30min"
                className="rounded-full bg-[#C9A646] px-8 py-4 text-center text-sm font-black uppercase tracking-wide text-[#0B132B] transition hover:-translate-y-0.5 hover:bg-[#D8B957]"
              >
                Book Now
              </a>

              <a
                href="tel:+15869328782"
                className="rounded-full border border-white/25 px-8 py-4 text-center text-sm font-black uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:border-[#C9A646] hover:text-[#C9A646]"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}