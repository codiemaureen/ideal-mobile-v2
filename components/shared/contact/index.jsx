function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-black px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-8 rounded-2xl"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.12),transparent_35%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 rounded-3xl border border-white/10 bg-black/80 p-6 shadow-2xl sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-12">
        <div className="flex min-w-0 flex-col justify-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37] sm:text-sm">
            Contact Us
          </p>

          <h2 className="max-w-xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Let’s Bring Your Vehicle{" "}
            <span className="text-[#D4AF37]">Back To Life</span>
          </h2>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
            Whether you need a full detail, ceramic coating, or routine
            maintenance, we’re here to help. Reach out today and we’ll get back
            to you quickly with pricing and availability.
          </p>

          <div className="mt-10 grid w-full max-w-full gap-5 lg:max-w-xl">
            <div className="w-full max-w-full rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:bg-white/10 sm:p-6">
              <p className="text-sm uppercase tracking-widest text-[#D4AF37]">
                Phone
              </p>

              <a
                href="tel:+15869328782"
                className="mt-2 block max-w-full text-2xl font-semibold leading-tight tracking-[-0.02em] break-words transition hover:text-[#D4AF37] sm:text-3xl"
              >
                (586) 932-8782
              </a>
            </div>

            <div className="w-full max-w-full rounded-2xl border border-white/10 bg-white/5 mt-2 p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:bg-white/10 sm:p-6">
              <p className="text-sm uppercase tracking-widest text-[#D4AF37]">
                Email
              </p>

              <a
                href="mailto:info@idealmobiledetailing.com"
                className="
                  mt-2
                  block
                  max-w-full
                  overflow-hidden
                  text-[0.95rem]
                  font-semibold
                  leading-relaxed
                  text-white
                  break-words
                  transition
                  hover:text-[#D4AF37]
                  min-[400px]:text-[1.05rem]
                  sm:text-xl
                "
              >
                info@idealmobiledetailing.com
              </a>
            </div>
          </div>
        </div>

        <div className="w-full min-w-0 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl sm:p-8">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-6"
          >
            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY" />

            <input type="checkbox" name="botcheck" className="hidden" />

            <div>
              <label className="mb-2 block text-sm font-medium text-white/70">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="John Doe"
                className="w-full rounded-xl border border-white/10 bg-[#111827]/70 px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-[#D4AF37]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white/70">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/10 bg-[#111827]/70 px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-[#D4AF37]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white/70">
                Service Needed
              </label>
              <select
                name="service"
                className="w-full rounded-xl border border-white/10 bg-[#111827]/70 px-4 py-3 text-white outline-none transition focus:border-[#D4AF37]"
              >
                <option>Complete Detail</option>
                <option>Supreme Detail</option>
                <option>Ultimate Coating</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white/70">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Tell us about your vehicle and what services you're looking for..."
                className="w-full rounded-xl border border-white/10 bg-[#111827]/70 px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-[#D4AF37]"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#D4AF37] px-6 py-4 text-sm font-bold uppercase tracking-wider text-[#0B132B] transition duration-300 hover:scale-[1.02] hover:bg-[#e5c158]"
            >
              Request A Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;