-- DropForeignKey
ALTER TABLE "Eleve" DROP CONSTRAINT "Eleve_usId_fkey";

-- AlterTable
ALTER TABLE "Eleve" ALTER COLUMN "usId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Eleve" ADD CONSTRAINT "Eleve_usId_fkey" FOREIGN KEY ("usId") REFERENCES "User"("id_Us") ON DELETE SET NULL ON UPDATE CASCADE;
