-- AlterTable
ALTER TABLE "User" ADD COLUMN     "storeId" TEXT;

-- AddForeignKey
ALTER TABLE "User" ADD FOREIGN KEY ("storeId") REFERENCES "Store"("id") ON DELETE SET NULL ON UPDATE CASCADE;
