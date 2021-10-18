
import React, { useEffect, useState }  from 'react';
import './Hospital.css';
import { Link } from "react-router-dom";

const Hospital = () => {
    const[hospitals,setHospital]=useState([]);
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=>setHospital(data));
      },[]);

    return (
<div>
            <div className="row body">
            <h4 className="mt-4">Popular Hospital Name</h4>
            {
                //api has 10 value slice it 4 
                
                hospitals.slice(0,4).map(hospital=>

                   
                   
                
              <div className="col-lg-4 col-sm-6 col-12 mt-5 mb-5">
                  <img src={hospital.img} alt="" srcset="" />
                  <h5><span className="Provide">Hospital Name</span> :{hospital.name}</h5>
                 
                  <hr></hr>
              
                  <Link to="/services">
                  <button className="btn-course">Read More</button>
                      </Link>
                  
                      
                  
                

               
                </div>
               
                
                
                )
                
  
              }
              </div>
        </div>
    );
};

export default Hospital;