import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import EmailBox from "./components/EmailBox";
import Company from "./components/Company";
import MLTD from "./components/Company/MLTD";
import MagneticForce from "./components/Company/MagneticForce";
import Vibration from "./components/Company/Vibration";
import OLED from "./components/Company/Oled";
import ECALL from "./components/Company/E-CALL";
import TECU from "./components/Company/T-ECU";
import PrivacyPolicyForm from "./components/IndivisualPolicy";

export default function Router() {
    return(
        <Routes>
            <Route path="/" element={<Home key="home"/>} />
            <Route path='/mail' element={<EmailBox key='email'/>}/>
            <Route path='/company' element={<Company key='company'/>}>
                <Route path='tecu' element={<TECU/>}/>
                <Route path='ecall' element={<ECALL/>}/>
                <Route path='oled' element={<OLED/>}/>
                <Route path='mltd' element={<MLTD/>}/>
                <Route path='vib' element={<Vibration/>}/>
                <Route path='mf' element={<MagneticForce/>}/>
                {/* <Route path='tecu' element={<TECU/>}/> */}
            </Route>
            <Route path="/privacy-policy" element={<PrivacyPolicyForm/>} />
        </Routes>
    )
}