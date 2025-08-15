'use server';
import { convertToPlainObject } from "../utils";

import { prisma } from "@/db/prisma";

export async function getAllServices(){
 const data = await prisma.service.findMany()
 return convertToPlainObject(data);
}