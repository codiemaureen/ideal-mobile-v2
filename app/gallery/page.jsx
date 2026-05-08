import BeforeAfterCarousel from "@/components/shared/before-after-img-carousel";
import BeforeAfterMasonry from "@/components/shared/before-after-masonry";
import ContactSection from "@/components/shared/contact";
import Header from "@/components/shared/header";
import { getPairedBeforeAfterImages } from "@/lib/getPairedBeforeAfterImages";


const Gallery = async() => {
  const pairs = await getPairedBeforeAfterImages();
  return ( 
    <>
      <Header />
      <BeforeAfterMasonry pairs={pairs} />
      <ContactSection />
    </>
  );
}

export default Gallery;