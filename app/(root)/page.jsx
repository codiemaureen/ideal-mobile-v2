import AboutSection from "@/components/shared/about";
import BeforeAfterMasonry from "@/components/shared/before-after-masonry";
import ImageCarousel from "@/components/shared/image-carousel";
import ServicesList from "@/components/shared/services/services-list";
import { getAllServices } from "@/lib/action/services.actions";
import { getCarouselImages } from "@/lib/getCarouselImages";
import { getPairedBeforeAfterImages } from "@/lib/getPairedBeforeAfterImages";

const HomePage = async () => {
  const services = await getAllServices();
  const images = await getCarouselImages();
  const pairs = await getPairedBeforeAfterImages();
  return ( 
    <div>
      <ImageCarousel images={images} />
      <ServicesList services={services} limit={2}/>
      <AboutSection />
      <BeforeAfterMasonry pairs={pairs} />
    </div> 
  );
}

export default HomePage;