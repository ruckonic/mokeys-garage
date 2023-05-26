-- CreateTable
CREATE TABLE `Vehiculo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `matricula` VARCHAR(191) NOT NULL,
    `observaciones` VARCHAR(191) NOT NULL,
    `reparacion` ENUM('REPARADO', 'PENDIENTE') NOT NULL DEFAULT 'PENDIENTE',
    `fechaAlta` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TurismoVehiculo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `numeroPlazas` INTEGER NOT NULL,
    `medidaLlantas` DOUBLE NOT NULL,
    `gama` ENUM('ALTA', 'MEDIA', 'BAJA') NOT NULL DEFAULT 'BAJA',
    `vehiculoId` INTEGER NOT NULL,

    UNIQUE INDEX `TurismoVehiculo_vehiculoId_key`(`vehiculoId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CamionVehiculo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tara` DOUBLE NOT NULL,
    `cma` DOUBLE NOT NULL,
    `vehiculoId` INTEGER NOT NULL,

    UNIQUE INDEX `CamionVehiculo_vehiculoId_key`(`vehiculoId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MotocicletaVehiculo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cilindrada` INTEGER NOT NULL,
    `vehiculoId` INTEGER NOT NULL,

    UNIQUE INDEX `MotocicletaVehiculo_vehiculoId_key`(`vehiculoId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TurismoVehiculo` ADD CONSTRAINT `TurismoVehiculo_vehiculoId_fkey` FOREIGN KEY (`vehiculoId`) REFERENCES `Vehiculo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CamionVehiculo` ADD CONSTRAINT `CamionVehiculo_vehiculoId_fkey` FOREIGN KEY (`vehiculoId`) REFERENCES `Vehiculo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MotocicletaVehiculo` ADD CONSTRAINT `MotocicletaVehiculo_vehiculoId_fkey` FOREIGN KEY (`vehiculoId`) REFERENCES `Vehiculo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
