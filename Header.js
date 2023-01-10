import React,{useEffect, useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import '../css/header.css';
const Header = () => {

  const[activeTab,setActiveTab]=useState("Home");
const location = useLocation();
useEffect(()=>{
  if(location.pathname==="/"){
    setActiveTab("Home");
  }
  else if (location.pathname==="/About") {
    setActiveTab("About");
  }
  else if (location.pathname==="/Registration") {
    setActiveTab("Registration");
  }
  else if(location.pathname==="/Areaform"){
    setActiveTab("Areaform");
  }
  else if (location.pathname==="/Stateform") {
    setActiveTab("Stateform");
  }
  else if (location.pathname==="/Cityform") {
    setActiveTab("Cityform");
  }
  else if(location.pathname==="/Areareport"){
    setActiveTab("Areareport");
  }
  else if (location.pathname==="/Statereport") {
    setActiveTab("Statereport");
  }
  else if (location.pathname==="/Cityreport") {
    setActiveTab("Cityreport");
  }
  else{
    setActiveTab("Report");
  }
},[location]);
  return (
    <div className='header'>
        <div className='logo'>
            MyContact App
        </div>
        <div className='header-right'>

            <Link to="/">
            <p
            className={`${activeTab==="Home" ?"active":""}`}
            onClick={()=> setActiveTab("Home")}
            >Home</p>
            </Link>

            <Link to="/About">
            <p
              className={`${activeTab==="About"?"active":""}`}
              onClick={()=>setActiveTab("About")}
              >About</p>
            </Link>

            <Link to="/Registration">
            <p
               className={`${activeTab==="Registration"?"active":""}`}
               onClick={()=>setActiveTab("Registration")}

               >Registration</p>
            </Link>
            <Link to="/Report">
            <p
             className={`${activeTab==="Report"?"active":""}`}
             onClick={()=>setActiveTab("Report")}

             >Report</p>
            </Link>
            <Link to="/Areaform">
            <p
               className={`${activeTab==="Areaform"?"active":""}`}
               onClick={()=>setActiveTab("Areaform")}

               >Areaform</p>
            </Link>
            <Link to="/Areareport">
            <p
             className={`${activeTab==="Areareport"?"active":""}`}
             onClick={()=>setActiveTab("Areareport")}

             >Areareport</p>
            </Link>
            <Link to="/Stateform">
              <p 
              className={`${activeTab==="Stateform"?"active":""}`}
              onClick={()=>setActiveTab("Stateform")}
              >Stateform
              </p>
            </Link>
            <Link to="/Statereport">
            <p
             className={`${activeTab==="Statereport"?"active":""}`}
             onClick={()=>setActiveTab("Statereport")}

             >Statereport</p>
            </Link>
            <Link to="/Cityform">
              <p className={`${activeTab==="Cityform"?"active":""}`}
              onClick={()=>setActiveTab("Cityform")}
              >Cityform
              </p>
            </Link>
            <Link to="/Cityreport">
            <p
             className={`${activeTab==="Cityreport"?"active":""}`}
             onClick={()=>setActiveTab("Cityreport")}

             >Cityreport</p>
            </Link>
        </div>

    </div>
  );
}

export default Header; 