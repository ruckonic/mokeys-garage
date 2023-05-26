"use client"

import { DetailedHTMLProps, HTMLAttributes } from "react"
import { useForm } from "react-hook-form"

export default function Update({ vehicleType }: { vehicleType: string }) {
  const { handleSubmit, register } = useForm()
  function onSubmit(data: any) {
    console.log(data)
  }

  return (
    <section>
      <form onSubmit={onSubmit} className="flex flex-col w-full">
        <h3 className="text-xl font-bold">Datos Del Vehículo</h3>
        <div className="flex gap-2">
          <TextField inputProps={register("matricula")} labelName="matricula" />
          <TextField
            inputProps={register("observaciones")}
            labelName="observaciones"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor=""
          >
            Tipo de vehiculo
          </label>
          <div className="w-full relative">
            <select
              value={vehicleType}
              disabled
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="camion">Camion</option>
              <option value="motocicleta">Motocicleta</option>
              <option value="turismo">Turismo</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold">
            {vehicleType.replace(/^./, (char: string) =>
              char.toLocaleUpperCase()
            )}
          </h3>
          <div>
            {vehicleType === "motocicleta" && (
              <TextField
                inputProps={register("cilindrada", {
                  valueAsNumber: true,
                  value: 0,
                })}
                labelName="cilindrada"
              />
            )}
            {vehicleType === "camion" && (
              <div className="flex gap-2">
                <TextField
                  inputProps={register("tara", {
                    valueAsNumber: true,
                    value: 0,
                  })}
                  labelName="tara"
                />
                <TextField
                  inputProps={register("cma", {
                    valueAsNumber: true,
                    value: 0,
                  })}
                  labelName="cma"
                />
              </div>
            )}
            {vehicleType === "turismo" && (
              <>
                <div className="flex gap-2">
                  <TextField
                    inputProps={register("medidaLlantas", {
                      valueAsNumber: true,
                      value: 0,
                    })}
                    labelName="Medidas de Llantas"
                  />
                  <TextField
                    inputProps={register("numeroPlazas", {
                      valueAsNumber: true,
                      value: 0,
                    })}
                    labelName="Numero de Plazas"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor=""
                  >
                    Gama del vehículo
                  </label>
                  <div className="w-full relative">
                    <select
                      {...register("gama", { value: "MEDIA" })}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                      <option value="ALTA">Alta</option>
                      <option value="MEDIA">Media</option>
                      <option value="BAJA">Baja</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Submit
        </button>
      </form>
    </section>
  )
}

interface TextFieldProps {
  inputProps: DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >

  labelName: string
}

function TextField({ labelName, inputProps }: TextFieldProps) {
  const textFieldLabel = labelName.replace(/^./, (char) =>
    char.toLocaleUpperCase()
  )
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={labelName}
      >
        {textFieldLabel}
      </label>
      <input
        {...inputProps}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
      />
    </div>
  )
}
