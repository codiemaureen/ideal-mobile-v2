import Header from "@/components/shared/header";
import ServicesList from "@/components/shared/services/services-list";
import { getAllService } from "@/lib/action/services.actions";

const HomePage = async () => {
  const services = await getAllService();
  return ( 
    <div>
      <ServicesList services={services} limit={2}/>
    </div> 
  );
}

export default HomePage;