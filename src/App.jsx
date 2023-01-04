import Form from "./components/From";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes/ListadoPacientes";

import { useState, useEffect } from "react";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];
    console.log(pacientesLS);
    setPacientes(pacientesLS);
  }, []);

  useEffect(() => {
    console.log("cambió pacientes");
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    console.log(id);
    const nuevosPacientes = pacientes.filter((paciente) => paciente.id !== id);
    setPacientes(nuevosPacientes);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="md:flex mt-12">
        <Form
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
      {/* {sumar()} */}
    </div>
  );
}

export default App;
