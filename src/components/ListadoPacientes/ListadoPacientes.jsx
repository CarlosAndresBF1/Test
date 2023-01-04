import { useState, useEffect } from "react";
import Paciente from "../Paciente/Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  useEffect(() => {
    if (pacientes.length > 0) console.log("Nuevo paciente agregado");
  }, [pacientes]);

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll mb-10">
      {pacientes && pacientes.length === 0 ? (
        <>
          <h2 className="font-black text-center text-3xl">No hay Pacientes</h2>
          <p className="text-lg mt-5 text-center mb-10">
            Agrega un paciente {""}
            <span className="font-bold text-indigo-600">y aparecerá aquí</span>
          </p>
        </>
      ) : (
        <>
          <h2 className="font-black text-center text-3xl">Listado Pacientes</h2>
          <p className="text-lg mt-5 text-center mb-10">
            Administra tus {""}
            <span className="font-bold text-indigo-600">pacientes y citas</span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
