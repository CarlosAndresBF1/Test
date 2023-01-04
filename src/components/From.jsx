import { useState, useEffect } from "react";
import Error from "./helpers/Error";

const placeholder = "Nombre de la mascota";

const From = ({ setPacientes, pacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setAlta(paciente.alta);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  useEffect(() => {
    console.log("Componente Form montando");
  }, []);

  const generarID = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("Enviado formulario");

    // Validar
    if ([nombre, propietario, email, alta, sintomas].includes("")) {
      //console.log("Hay campos vacios");
      setError(true);
    } else {
      //console.log("Todos llenos");
      setError(false);

      const objetoPaciente = {
        nombre,
        propietario,
        email,
        alta,
        sintomas,
      };

      if (paciente.id) {
        objetoPaciente.id = paciente.id;

        const pacientesActualizados  = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState);
        setPacientes(pacientesActualizados);
        setPaciente({});

      } else {
        // Agregar al state
        objetoPaciente.id = generarID();
        setPacientes([...pacientes, objetoPaciente]);
      }

      setNombre("");
      setPropietario("");
      setEmail("");
      setAlta("");
      setSintomas("");
    }
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mb-10 mx-5">
      <h2 className="font-black text-center text-3xl">Seguimiento pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y {""}
        <span className="font-bold text-indigo-600 ">administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        action=""
        className="bg-white shadow-md rounded-lg py-10 px-5"
      >
        {error && <Error mensaje="Todos los campos son requeridos" />}
        <div className="mb-5">
          <label className="block uppercase font-bold" htmlFor="name">
            {placeholder}
          </label>
          <input
            className="border-2 rounded w-full p-2 mt-2 placeholder-gray-400"
            type="text"
            name="name"
            placeholder={placeholder}
            id="name"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="block uppercase font-bold" htmlFor="propietario">
            Nombre del propietario
          </label>
          <input
            className="border-2 rounded w-full p-2 mt-2 placeholder-gray-400"
            type="text"
            name="propietario"
            placeholder="Nombre del propietario"
            id="propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="block uppercase font-bold" htmlFor="email">
            Email
          </label>
          <input
            className="border-2 rounded w-full p-2 mt-2 placeholder-gray-400"
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="block uppercase font-bold" htmlFor="alta">
            Alta
          </label>
          <input
            className="border-2 rounded w-full p-2 mt-2 placeholder-gray-400"
            type="date"
            name="alta"
            placeholder="Alta"
            id="alta"
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="block uppercase font-bold" htmlFor="sintomas">
            Sintomas
          </label>
          <textarea
            name="sintomas"
            id="sintomas"
            placeholder="Describe los sintomas"
            className="w-full border-2 rounded p-2 mt-2 placeholder-gray-400"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold transition-all hover:bg-indigo-500 cursor-pointer"
          value={paciente.id ? "Editar paciente" : "Agregar paciente"}
        />
      </form>
    </div>
  );
};

export default From;
