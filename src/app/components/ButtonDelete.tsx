"use client"
import { vehicleDeleteById } from "~/modules/vehicle/vehicle"

export default function ButtonDelete(
  {
    itemId,
    onDeleted,
  }: {
    itemId: number
    onDeleted: () => void
  } = { onDeleted: () => {}, itemId: NaN }
) {
  return (
    <button
      onClick={async () => {
        await vehicleDeleteById(itemId)
        onDeleted()
      }}
      className="px-4 py-2 text-white bg-red-500 rounded-md"
    >
      Delete
    </button>
  )
}
