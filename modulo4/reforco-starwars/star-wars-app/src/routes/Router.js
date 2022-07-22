import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CharacterDetailPage from "../pages/CharacterDetailPage/CharacterDetailPage";
import CharacterListPage from "../pages/CharacterListPage/CharacterListPage";

const Router = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/detalhes" element={<CharacterDetailPage/>}/>
            <Route path="/" element={<CharacterListPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Router;