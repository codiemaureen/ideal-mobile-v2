import BeforeAfterCarousel from "@/components/shared/before-after-img-carousel";
import BeforeAfterMasonry from "@/components/shared/before-after-masonry";
import Header from "@/components/shared/header";
import { getPairedBeforeAfterImages } from "@/lib/getPairedBeforeAfterImages";


const Gallery = async() => {
  const pairs = await getPairedBeforeAfterImages();
  return ( 
    <>
      <Header />
      <BeforeAfterMasonry pairs={pairs} />
    </>
  );
}

export default Gallery;