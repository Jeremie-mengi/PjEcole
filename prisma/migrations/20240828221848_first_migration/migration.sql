-- CreateTable
CREATE TABLE "User" (
    "id_Us" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "postnom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "telephone" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id_Us")
);

-- CreateTable
CREATE TABLE "Eleve" (
    "id_El" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "postnom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "sexe" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" INTEGER NOT NULL,
    "classe" TEXT NOT NULL,
    "usId" INTEGER NOT NULL,

    CONSTRAINT "Eleve_pkey" PRIMARY KEY ("id_El")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_telephone_key" ON "User"("telephone");

-- CreateIndex
CREATE UNIQUE INDEX "Eleve_email_key" ON "Eleve"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Eleve_telephone_key" ON "Eleve"("telephone");

-- AddForeignKey
ALTER TABLE "Eleve" ADD CONSTRAINT "Eleve_usId_fkey" FOREIGN KEY ("usId") REFERENCES "User"("id_Us") ON DELETE RESTRICT ON UPDATE CASCADE;
