import BeforeAfterCarousel from "@/components/shared/before-after-img-carousel";
import { getPairedBeforeAfterImages } from "@/lib/getPairedBeforeAfterImages";


const Gallery = async() => {
 const pairs = await getPairedBeforeAfterImages();
 return ( 
   <BeforeAfterCarousel pairs={pairs} />

  );
}
 
export default Gallery;