-- CreateTable
CREATE TABLE "Presence" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "etat" TEXT NOT NULL,
    "eleveId" INTEGER NOT NULL,

    CONSTRAINT "Presence_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sortie" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "raison" TEXT NOT NULL,
    "eleveId" INTEGER NOT NULL,

    CONSTRAINT "Sortie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Communique" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "texte" TEXT NOT NULL,
    "eleveId" INTEGER NOT NULL,

    CONSTRAINT "Communique_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "message" TEXT NOT NULL,
    "eleveId" INTEGER NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Presence" ADD CONSTRAINT "Presence_eleveId_fkey" FOREIGN KEY ("eleveId") REFERENCES "Eleve"("id_El") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sortie" ADD CONSTRAINT "Sortie_eleveId_fkey" FOREIGN KEY ("eleveId") REFERENCES "Eleve"("id_El") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Communique" ADD CONSTRAINT "Communique_eleveId_fkey" FOREIGN KEY ("eleveId") REFERENCES "Eleve"("id_El") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_eleveId_fkey" FOREIGN KEY ("eleveId") REFERENCES "Eleve"("id_El") ON DELETE RESTRICT ON UPDATE CASCADE;
