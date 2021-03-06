import { Routes, Route } from "react-router-dom";

import Homepage from "../HomePage/HomePage";
import Peoplepage from '../PeoplePage/PeoplePage';
import PersonPage from "../../components/PersonPage/PersonPage";


import Notfoundpage from "../NotFoundPage/NotFoundPage";
import Header from "../../components/Header/Header";

import './App.css';
import Favoritepage from "../FavoritePage/FavoritePage";
import Searchpage from "../SearchPage/SearchPage";




const App = () => {

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/people" exact element={<Peoplepage />} />
        <Route path="/people/:id" exact element={<PersonPage />} />
        <Route path="/not-found" exact element={<Notfoundpage />} />
        <Route path="/favorite" exact element={<Favoritepage />} />
        <Route path="/search" exact element={<Searchpage />} />
        <Route path="*" element={<Notfoundpage />} />

      </Routes>
    </div>
  )
}

export default App;
