import {prisma} from './prisma.js';
import sampleData from './sample-data.js';  
  
async function main() {
  await prisma.service.deleteMany();
  await prisma.user.deleteMany();

  // Insert users first
  await prisma.user.createMany({
    data: sampleData.users,
    skipDuplicates: true,
  })

  // Insert services
  await prisma.service.createMany({
    data: sampleData.services.map(svc => ({
      name: svc.name,
      slug: svc.slug,
      images: svc.images || [],
      description: svc.description || svc.decription || [],
      price: svc.price,
    })),
    skipDuplicates: true,
  })
    console.log('Database seeded successfully!');
 }

main();