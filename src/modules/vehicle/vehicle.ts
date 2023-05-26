"use server"
import { PrismaClient, Prisma } from "@prisma/client"

const client = new PrismaClient({
  log: [{ emit: "stdout", level: "query" }, "info", "warn", "error"],
})

export async function vehicleDeleteById(id: number) {
  let vehicle: any = await client.camionVehiculo.findFirst({
    where: { vehiculoId: id },
  })

  if (vehicle) {
    await client.camionVehiculo.delete({ where: { vehiculoId: id } })
  }

  if (!vehicle) {
    vehicle = await client.turismoVehiculo.findFirst({
      where: { vehiculoId: id },
    })
    if (vehicle) {
      await client.turismoVehiculo.delete({ where: { vehiculoId: id } })
    }
  }

  if (!vehicle) {
    vehicle = await client.motocicletaVehiculo.findFirst({
      where: { vehiculoId: id },
    })
    if (vehicle) {
      await client.motocicletaVehiculo.delete({ where: { vehiculoId: id } })
    }
  }

  await client.vehiculo.delete({ where: { id } })
}

export async function getAll() {
  const vehicles = await client.vehiculo.findMany({
    include: { CamionVehiculo: true, MotocicletaVehiculo: true },
  })

  return vehicles
}

export async function createTruck(
  vehicleData: Prisma.VehiculoCreateInput,
  truckData: Omit<Prisma.CamionVehiculoCreateInput, "vehiculo">
) {
  return await client.vehiculo.create({
    data: { ...vehicleData, CamionVehiculo: { create: truckData } },
  })
}

export async function createMotorcycle(
  vehicleData: Prisma.VehiculoCreateInput,
  motorcycleData: Omit<Prisma.MotocicletaVehiculoCreateInput, "vehiculo">
) {
  return client.vehiculo.create({
    data: { ...vehicleData, MotocicletaVehiculo: { create: motorcycleData } },
  })
}

export async function createTourism(
  vehicleData: Prisma.VehiculoCreateInput,
  tourismData: Omit<Prisma.TurismoVehiculoCreateInput, "vehiculo">
) {
  return client.vehiculo.create({
    data: { ...vehicleData, TurismoVehiculo: { create: tourismData } },
  })
}
