import ServiceCard from "./service-card";

const ServicesList = ({services, limit}) => {

 return ( 
  <div className="my-10">
   <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {services.map((service) => (
     <ServiceCard key={service} service={service} />
    ))}
   </div>
  </div>
  );
}
 
export default ServicesList;