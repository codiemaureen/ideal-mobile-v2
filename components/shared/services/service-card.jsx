import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({service}) => {
  return ( 
    <Card className="w-full max-w-sm">
      <CardHeader>
      <Link href={`/services/${service.slug}`}>
        <h2 className="h2-bold">{service.name}</h2>
        <Image 
          src={service.images[0]} 
          alt={service.slug}
          width={300} 
          height={300} 
          priority={true}
        />
      </Link>
      <CardContent>
        {service.description}
      </CardContent>
      </CardHeader>
    </Card>
  );
}

export default ServiceCard;