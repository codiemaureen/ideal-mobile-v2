import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { BubblesIcon } from "lucide-react";

const ServiceCard = ({service}) => {
  return ( 
    <Card className="w-full max-w-sm">
      <CardHeader>
      <Link href={`/services/${service.slug}`}>
        <h2 className="h2-bold text-2xl text-center py-5">{service.name}</h2>
        <Image 
          src={service.images[0]} 
          alt={service.slug}
          width={300} 
          height={300} 
          priority={true}
        />
      </Link>
      <CardContent className="w-full px-0 py-5">
          {service.description.map((s, i) => (
            <li key={i} className="text-xs">
              {s}
            </li>
          ))}
      </CardContent>
      </CardHeader>
    </Card>
  );
}

export default ServiceCard;