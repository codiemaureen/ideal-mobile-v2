/*
  Warnings:

  - You are about to drop the column `decription` on the `Service` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Service" DROP COLUMN "decription",
ADD COLUMN     "description" TEXT[];
