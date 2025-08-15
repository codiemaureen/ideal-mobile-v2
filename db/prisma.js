import { neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from '../lib/generated/prisma/index.js'
import ws from 'ws';

// Sets up WebSocket connections, which enables Neon to use WebSocket communication.
neonConfig.webSocketConstructor = ws;

// Instantiate the adapter correctly
//  (pool is automatically handled with PrismaNeon in prisma 6)
const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL });

export const prisma = new PrismaClient({ adapter }).$extends({
  result: {
   service: {
     price: {
       compute(product) {
         return product.price.toString();
       },
     },
   }
  }
 });
