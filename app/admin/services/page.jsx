import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteService, getAllServices } from "@/lib/action/services.actions";
import DeleteDialog from "@/components/ui/delete-dialog";
import { formatId } from "@/lib/utils";

const AdminServices = async () => {
  const data = await getAllServices();

  const services = Array.isArray(data) ? data : data?.items || data?.services || [];

  return (
    <div className="space-y-2">
      <div className="flex-between">
        <div className="flex items-center gap-3">
          <h1 className="h2-bold">Services</h1>
        </div>
        <Button asChild variant="default">
          <Link href="/admin/services/create">Create Service</Link>
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>NAME</TableHead>
            <TableHead className="text-right">PRICE</TableHead>
            <TableHead className="text-center">SERVICE OPTIONS</TableHead>
            <TableHead className="w-[100px]">EDIT</TableHead>
            <TableHead className="w-[120px]">DELETE</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {services.map((service) => (
            <TableRow key={service.id}>
              <TableCell>{formatId(service.id)}</TableCell>
              <TableCell>{service.name}</TableCell>
              <TableCell className="text-right">
                {typeof service.price === "number"
                  ? new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(service.price)
                  : service.price}
              </TableCell>

              <TableCell className="w-[250px]">
                {Array.isArray(service.description) ? (
                  <ul className="pl-5 space-y-1">
                    {service.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                ) : (
                  <span>{service.description}</span>
                )}
              </TableCell>

              <TableCell className="flex gap-1">
                <Button asChild variant="outline" size="sm">
                  <Link href={`/admin/services/${service.id}`}>Edit</Link>
                </Button>
              </TableCell>

              <TableCell>
                <DeleteDialog id={String(service.id)} action={deleteService} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminServices;
