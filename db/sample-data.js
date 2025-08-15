import { hashSync } from "bcryptjs";

const sampleData = {
  users: [
   {
     name: 'Mason',
     email: 'mason@example.com',
     password: hashSync('123456', 10),
     role: 'admin',
   },
   {
     name: 'Codie',
     email: 'codie@example.com',
     password: hashSync('123456', 10),
     role: 'user',
   },
 ],
 services: [
  {
   name: 'Complete Detail',
   slug: 'complete-detail',
   images: [
    '/images/complete-cover.jpg'
   ],
   description: [
    "EXTERIOR HAND WASH/CHAMOIS",
    "INTERIOR VACCUM CARPETS/FLOOR MATS",
    "INTERIOR/EXTERIOR WINDOW CLEANING",
    "FULL DASH RESTORATION/DOORJAM DETAIL",
   ],
   price: 120,
  },
  {
   name: 'Supreme Detail',
   slug: 'supreme-detail',
   images: [
    '/images/supreme-cover.jpg'
   ],
   description: [
    "EXTERIOR HAND WASH/CHAMOIS",
    "INTERIOR VACCUM CARPETS/FLOOR MATS",
    "INTERIOR/EXTERIOR WINDOW CLEANING",
    "FULL DASH RESTORATION/DOORJAM DETAIL",
    "VINYL DRESSED INTERIOR/TIRES",
    "INTERIOR SHAMPOO CARPETS/FLOOR MATS & SEATS"
   ],
   price: 180,
  },
  {
   name: 'Ultimate Detail',
   slug: 'ultimate-detail',
   images: [
    '/images/ultimate-cover.jpg'
   ],
   description: [
    "EXTERIOR HAND WASH/CHAMOIS",
    "INTERIOR VACCUM CARPETS/FLOOR MATS",
    "INTERIOR/EXTERIOR WINDOW CLEANING",
    "FULL DASH RESTORATION/DOORJAM DETAIL",
    "VINYL DRESSED INTERIOR/TIRES",
    "INTERIOR SHAMPOO CARPETS/FLOOR MATS & SEATS",
    "EXTERIOR WAX/HAND BUFF",
    "CHROME POLISH"
   ],
   price: 240,
  },
 ]
}

export default sampleData;