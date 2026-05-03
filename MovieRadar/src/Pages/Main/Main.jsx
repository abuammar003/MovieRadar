import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../Home/Home"
import Footer from "../../Components/Footer/Footer"
import Search from "../Search/Search"
import {Starred} from "../Starred/Starred"
import Browse from '../Browse/Browse';
import Context from '../../Context/Context';

const Main = () => {

  return (
    <div>
        <BrowserRouter>

        <Context >

        <Routes>
            <Route exact path='/' element={ <Home />} />
            <Route exact path='/Search' element={ <Search />} />
            <Route exact path='/Starred' element={ <Starred />} />
            <Route exact path='/Browse' element= { <Browse />} />
        </Routes>

        </Context>

      <Footer />

    </BrowserRouter>
    </div>
  )
}

export default Main