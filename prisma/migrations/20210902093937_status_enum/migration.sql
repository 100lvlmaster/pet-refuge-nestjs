/*
  Warnings:

  - Added the required column `status` to the `Cart` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('CART', 'BOUGHT', 'DELIEVERED');

-- AlterTable
ALTER TABLE "Cart" ADD COLUMN     "status" "Status" NOT NULL;
