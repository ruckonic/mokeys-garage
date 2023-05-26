import Link from "next/link"
import { getAll, vehicleDeleteById } from "~/modules/vehicle/vehicle"
import ButtonDelete from "./components/ButtonDelete"

export default async function List() {
  const vehicles = await getAll()

  async function deleteVehicle(id: number) {
    await vehicleDeleteById(id)
  }

  return (
    <section className="flex flex-col w-[80%]">
      <div className="flex justify-between">
        <h3 className="text-xl font-bold">Vehículos</h3>
        <Link href="/vehicle/add">Agregar</Link>
      </div>

      <ul className="flex flex-col">
        {vehicles.map((item) => (
          // crate a beatiful list with tailwindcss
          <li
            key={item.id}
            className="flex gap-2 p-4 my-4 bg-gray-100 rounded-lg shadow-md"
          >
            <div className="flex flex-1 gap-2 items-center">
              <span className="text-gray-500">{item.id}</span>
              <span className="text-gray-500">{item.matricula}</span>
              <span className="text-gray-500">{item.observaciones}</span>
            </div>
            <div className="flex gap-2">
              <Link
                href={`/vehicle/${item.id}/edit`}
                className="px-4 py-2 text-white bg-blue-500 rounded-md"
              >
                Edit
              </Link>
              <ButtonDelete itemId={item.id} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
