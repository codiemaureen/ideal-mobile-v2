import ImageCarousel from "@/components/shared/image-carousel";
import ServicesList from "@/components/shared/services/services-list";
import { getAllServices } from "@/lib/action/services.actions";
import { getCarouselImages } from "@/lib/getCarouselImages";

const HomePage = async () => {
  const services = await getAllServices();
  const images = await getCarouselImages();
  return ( 
    <div>
      <ImageCarousel images={images} />
      <ServicesList services={services} limit={2}/>
    </div> 
  );
}

export default HomePage;