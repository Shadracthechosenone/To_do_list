-- AlterTable
ALTER TABLE `tache` MODIFY `createdAt` VARCHAR(191) NOT NULL,
    MODIFY `updatedAt` VARCHAR(191) NOT NULL,
    MODIFY `Date_prevue` VARCHAR(191) NOT NULL,
    MODIFY `Date_rappel` VARCHAR(191) NOT NULL,
    MODIFY `Heure_rappel` VARCHAR(191) NOT NULL,
    MODIFY `Heure_prevue` VARCHAR(191) NOT NULL;
