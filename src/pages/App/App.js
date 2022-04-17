import { Routes, Route } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import Homepage from "../HomePage/HomePage";

import Peoplepage from '../PeoplePage/PeoplePage';

import './App.css';



const App = () => {
  return (
    <div className="app">
      <header className="header">
        <NavLink to="/" end>Главная</NavLink>
        <NavLink to="/people" end>Люди</NavLink>
        <NavLink to="/search" end>Поиск</NavLink>
        <NavLink to="/not-found" end>Не найдено</NavLink>
        <NavLink to="/error" end>Error</NavLink>
      </header>


      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/people" exact element={<Peoplepage />} />
      </Routes>


    </div>
  )
}

export default App;
