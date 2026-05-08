"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Menu, X } from "lucide-react";
import { useState } from "react";
import styles from "./header.module.css";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  // { label: "Packages", href: "/packages" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  // { label: "Reviews", href: "/reviews" },
  { label: "Service Area", href: "/service-area" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoLink}>
        <Image
          src="/images/logo2.png"
          alt="Ideal Mobile Detailing"
          width={210}
          height={80}
          priority
          className={styles.logo}
        />
      </Link>

      <nav className={styles.nav}>
        {navLinks.map((link) => (
          <Link key={link.label} href={link.href} className={styles.navLink}>
            {link.label}
          </Link>
        ))}
      </nav>

      <Link href="/booking" className={styles.cta}>
        <CalendarDays size={18} />
        Book Appointment
      </Link>

      <button
        className={styles.menuButton}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {isOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/booking"
            className={styles.mobileCta}
            onClick={() => setIsOpen(false)}
          >
            <CalendarDays size={18} />
            Book Appointment
          </Link>
        </div>
      )}
    </header>
  );
}