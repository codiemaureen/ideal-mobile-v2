import Image from "next/image";
import Link from "next/link";
import styles from "./hero.module.css";

import {
  CalendarDays,
  Star,
  Truck,
  ShieldCheck,
  MapPin,
  ChevronRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/hero.png"
        alt="Ideal Mobile Detailing premium mobile car detailing"
        fill
        priority
        className={styles.heroImage}
      />

      <div className={styles.overlay} />

      <div className={styles.content}>
        <p className={styles.eyebrow}>
          <span></span> Metro Detroit Mobile Detailing
        </p>

        <h1>
          Premium Detailing <br />
          <strong>That Comes To You</strong>
        </h1>

        <p className={styles.subtext}>
          Professional mobile detailing, ceramic coatings, and paint correction —
          delivered at your home or office.
        </p>

        <div className={styles.actions}>
          <Link href="/booking" className={styles.primaryBtn}>
            <CalendarDays size={19} />
            Book Appointment
          </Link>

          <Link href="/gallery" className={styles.secondaryBtn}>
            View Our Work
            <ChevronRight size={20} />
          </Link>
        </div>

        <div className={styles.rating}>
          <span className={styles.google}>G</span>
          <span className={styles.stars}>★★★★★</span>
          <span>5.0 Stars | 100+ Reviews</span>
        </div>

        <div className={styles.trustBar}>
          <div className={styles.trustItem}>
            <Star />
            <div>
              <h3>5-Star Rated</h3>
              <p>100+ Google Reviews</p>
            </div>
          </div>

          <div className={styles.trustItem}>
            <Truck />
            <div>
              <h3>Mobile Service</h3>
              <p>We come to you</p>
            </div>
          </div>

          <div className={styles.trustItem}>
            <ShieldCheck />
            <div>
              <h3>Certified & Insured</h3>
              <p>Professional & reliable</p>
            </div>
          </div>

          <div className={styles.trustItem}>
            <MapPin />
            <div>
              <h3>Metro Detroit</h3>
              <p>Macomb & Oakland County</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}