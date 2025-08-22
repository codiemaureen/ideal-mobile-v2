'use server';
import { convertToPlainObject } from "../utils";

import { prisma } from "@/db/prisma";

export async function getAllServices(){
 const data = await prisma.service.findMany()
 return convertToPlainObject(data);
}

export async function deleteService(id){
  try {
    const serviceExists = await prisma.services.findFirst({
    where: {id}
    })

    if(!serviceExists) throw new Error('Service is not found');
      const orderItemCount = await prisma.orderItem.count({
    where: { servicesId: id }
    });

    if (orderItemCount > 0) {
    throw new Error('Cannot delete service: It is associated with existing orders.');
    }

    await prisma.service.delete({
    where: {id}
    });

    revalidatePath('/admin/services');

    return {
    success: true,
    message: 'Service deleted successfully'
    }
  } catch (error) {
    console.log(formatError(error))
    return {
    success: false,
    message: formatError(error)
    }
  }
}