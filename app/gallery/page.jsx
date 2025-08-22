import BeforeAfterCarousel from "@/components/shared/before-after-img-carousel";
import Header from "@/components/shared/header";
import { getPairedBeforeAfterImages } from "@/lib/getPairedBeforeAfterImages";


const Gallery = async() => {
  const pairs = await getPairedBeforeAfterImages();
  return ( 
    <>
      <Header />
      <BeforeAfterCarousel pairs={pairs} />
    </>
  );
}

export default Gallery;