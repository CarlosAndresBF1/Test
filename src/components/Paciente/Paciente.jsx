import { useState, useEffect } from "react";

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  useEffect(() => {
    console.log("Componente Paciente montado");
  }, []);

  const handleEliminar = () => {
    const respuesta = confirm("¿Estas seguro de eliminar este paciente?");
    if (respuesta) {
      console.log("Eliminando paciente");
      eliminarPaciente(paciente.id);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg py-10 px-5 ml-5 mb-5">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre {""}
        <span className="font-normal normal-case">{paciente.nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario {""}
        <span className="font-normal normal-case">{paciente.propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email {""}
        <span className="font-normal normal-case">{paciente.email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha de alta {""}
        <span className="font-normal normal-case">{paciente.alta}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas {""}
        <span className="font-normal normal-case">{paciente.sintomas}</span>
      </p>

      <div className="flex mt-10 justify-between">
        <button
          type="button"
          onClick={() => setPaciente(paciente)}
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white font-bold uppercase rounded-lg"
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-800 text-white font-bold uppercase rounded-lg"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
