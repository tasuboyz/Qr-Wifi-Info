import React from 'react';
import './App.css'
import { Telegram } from "@twa-dev/types";

declare global {
  interface Window {
    Telegram: Telegram;
  }
}

function App() {
  const [name, setName] = React.useState('');
  const [password, setSurname] = React.useState('');

  const inviaMessaggio = (): void => {
    const post = {
        name: name,
        password: password,
    }
    window.Telegram.WebApp.sendData(JSON.stringify(post));
  };

  return (
    <>
      <div className="container-caselle">
      {/* Casella di input per il titolo */}
      <input
        type="text"
        placeholder="write here your wifi name"
        className="input-name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {/* Casella di input per la descrizione */}
      <input
        type="text"
        placeholder="Write here your wifi password"
        className="input-password"
        value={password}
        onChange={(e) => setSurname(e.target.value)}
      />   
      {/* Bottone di invio post */}
      <button className="button" onClick={inviaMessaggio}>Confirm</button>
      {/* <div className="container"> */}
        {/* ... */}
        {/* Bottone per navigare ad una nuova pagina */}
        {/* <button className="button" onClick={vaiANuovaPagina}>Vai a Nuova Pagina</button> */}
        {/* ... */}
      {/* </div> */}
    </div>
    </>
  )
}

export default App