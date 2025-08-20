import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, CheckIcon } from "lucide-react";

const ServiceCard = ({ service }) => {
  return (
    <Card className="h-full flex flex-col"> 
      <CardHeader className="flex justify-center">
        <Link href={`/services/${service.slug}`}>
          <h2 className="text-2xl font-bold text-center py-5">{service.name}</h2>
          <Image
            src={service.images[0]}
            alt={service.slug}
            width={300}
            height={300}
            priority
            className="rounded-lg"
          />
        </Link>
      </CardHeader>

      <CardContent className="w-full py-5 flex flex-col gap-4 flex-1"> 
        <ul className="space-y-2 grow"> 
          {service.description.map((s, i) => (
          <li key={i} className="flex items-start gap-2">
            <Check
              className="h-4 w-4 mt-1 shrink-0  text-amber-500"
              strokeWidth={3}
              aria-hidden="true"
            />
            <span>{s}</span>
          </li>
          ))}
        </ul>

        <Button className="mt-auto">
          <Link href='/schedule-detail'>
            Schedule
          </Link>
        </Button> 
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
