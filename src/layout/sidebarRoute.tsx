
import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";

import SideMenu from "./sidebar";
import Dashboard from "../component/dashboard/dashboard";
import Transfer from "../component/transfer/transfer";
import TransferStepTwo from "../component/transfer/transferStepTwo";
  
  const SideBarRoute=()=>{
    return (
      <div>
        <SideMenu>
        <Routes>     
            <Route  path='/dashboard' element={<Dashboard/>}/>  
            <Route  path='/transfer' element={<Transfer/>}/>  
            <Route  path='/transfer/transfer-step-two' element={<TransferStepTwo/>}/>  
            <Route  path='/*' element={<Dashboard/>}/>  
          </Routes>  
        </SideMenu>
      </div>
    );
  }
  
  export default SideBarRoute;
  