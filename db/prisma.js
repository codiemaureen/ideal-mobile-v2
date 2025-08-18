import { neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from '@prisma/client';


import ws from 'ws';

// Enable WebSocket for Neon in Node envs
neonConfig.webSocketConstructor = ws;

const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL });

// Avoid multiple instances in dev (Next.js HMR)
const globalForPrisma = globalThis;

export const prisma =
  globalForPrisma.__prisma__ ??
  new PrismaClient({ adapter }).$extends({
    result: {
      service: {
        price: {
          needs: { price: true },
          compute(service) {
            return String(service.price);
          },
        },
      },
    },
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.__prisma__ = prisma;
}
