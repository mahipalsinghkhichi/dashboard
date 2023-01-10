import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Report from './Report';
import About from './About';
import Registration from "./Registration";
import Header from "./Header";
import Areaform from "./Areaform";
import Areareport from './Areareport'
import Stateform from "./Stateform";
import Statereport from './Statereport'
import Cityform from "./Cityform";
import Cityreport from './Cityreport';
import MyHeader from "./MyHeader";


const MyMaps = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          {/* <Header /> */}
          <MyHeader/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Report' element={<Report />} />
            <Route path='/Registration' element={<Registration />} />
            <Route path='/update/:id' element={<Registration />} />
            <Route path='/Areaform' element={<Areaform />} />
            <Route path='/Areareport' element={<Areareport />} />
            <Route path='/Stateform' element={<Stateform />} />
            <Route path='/Statereport' element={<Statereport />} />
            <Route path='/Cityform' element={<Cityform />} />
            <Route path='/Cityreport' element={<Cityreport />} />
            <Route path='/About' element={<About />} />

          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
export default MyMaps;
