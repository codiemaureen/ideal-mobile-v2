import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import CalendlyPopup from "../calendy-popup-button";

const ServiceCard = ({ service }) => {
  return (
    <Card className="flex h-full flex-col" id="services">
      <CardHeader className="flex justify-center">
        <Link href={`/services/${service.slug}`}>
          <h2 className="py-5 text-center text-2xl font-bold">{service.name}</h2>
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

      <CardContent className="flex w-full flex-1 flex-col gap-4 py-5">
        <ul className="grow space-y-2">
          {service.description.map((s, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check
                className="mt-1 h-4 w-4 shrink-0 text-amber-500"
                strokeWidth={3}
                aria-hidden="true"
              />
              <span>{s}</span>
            </li>
          ))}
        </ul>

        <CalendlyPopup />
      </CardContent>
    </Card>
  );
};

export default ServiceCard;