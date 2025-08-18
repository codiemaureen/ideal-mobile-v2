import ServicesList from "@/components/shared/services/services-list";
import { getAllServices } from "@/lib/action/services.actions";

const HomePage = async () => {
  const services = await getAllServices();
  return ( 
    <div>
      <ServicesList services={services} limit={2}/>
    </div> 
  );
}

export default HomePage;