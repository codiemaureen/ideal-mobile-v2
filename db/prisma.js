// db/prisma.js
import { PrismaClient } from '@prisma/client' // or from your custom output path

export const prisma = new PrismaClient().$extends({
  result: {
    service: {
      price: {
        compute(service) {
          return service.price.toString()
        },
      },
    },
  },
})
