import '../styles/App.css';
import dataAdalabers from '../data/data.json';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [dataElement, setDataElement] = useState(dataAdalabers.results);
  const [counselor, setCounselor] = useState('');
  const [speciality, setSpeciality] = useState('');

  const handleChangeName = (ev) => {
    setName(ev.currentTarget.value)
  };
  const handleChangeCounselor = (ev) => {
    setCounselor(ev.currentTarget.value)
  };
  const handleChangeSpeciality = (ev) => {
    setSpeciality(ev.currentTarget.value)
  };
  const handleClickButton = (ev) => {
    ev.preventDefault();
    const newAdalaber = {
      id: dataElement.length,
      name: name,
      counselor: counselor,
      speciality: speciality
    };
    setDataElement([...dataElement, newAdalaber]);

    // Para limpiar los input:
    setName('');
    setSpeciality('');
    setCounselor('');
  };

  const nameAdalaber = <th>Nombre</th>;
  const counselorAdalaber = <th>Tutora</th>;
  const specialityAdalaber = <th>Especialidad</th>
  
  const htmlAdalabers = dataElement.map(adalaber => (
    <tr className="trStyles" key={adalaber.id}>
    <td className="tdStylesOne">{adalaber.name}</td>
    <td className="tdStylesTwo">{adalaber.counselor}</td>
    <td className="tdStylesThree">{adalaber.speciality}</td>
    </tr>
  ));
  return (
    <div>
      <main>

        <table className="tableStyles">
          {/* Fila de cabecera */}
          <thead><tr>          
          {nameAdalaber}
          {counselorAdalaber}
          {specialityAdalaber}
          </tr></thead>
          {/* Fin fila de cabecera */}

            <tbody>
              {htmlAdalabers}
            </tbody>
          </table>

          <h2>Añadir una adalaber</h2>
          <form className="formStyles">
            <label htmlFor="name">Nombre:</label>
            <input 
            type="text" 
            id="name"
            name="name"
            onChange={handleChangeName}
            value={name}
            />

            <label htmlFor="counselor">Tutora:</label>
            <input
            type="text"
            id="counselor"
            name="counselor"
            onChange={handleChangeCounselor}
            value={counselor}
            />

            <label htmlFor="speciality">Especialidad</label>
            <input
            type="text"
            id="speciality"
            name="speciality"
            onChange={handleChangeSpeciality}
            value={speciality}
            />

            <input
            className="input"
            type="submit"
            value="Añadir"
            onClick={handleClickButton}
            />
          </form>

      </main>

    </div>
  );
}

export default App;

