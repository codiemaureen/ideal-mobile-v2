// db/prisma.js
import { PrismaClient } from '@prisma/client' // or from your custom output path

export const prisma = new PrismaClient().$extends({
  result: {
    service: {
      price: {
        needs: { price: true },
        compute(service) {
          return String(service.price); // or Number(service.price)
        },
      },
    },
  },
})
