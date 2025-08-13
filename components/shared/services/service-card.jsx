import { Card, CardHeader } from "@/components/ui/card";
import Link from "next/link";

const ServiceCard = ({service}) => {
  return ( 
   <Card className="w-full max-w-sm">
    <CardHeader>
     <Link href={`/`}>
      {service}
     </Link>
    </CardHeader>
   </Card>
  );
}
 
export default ServiceCard;