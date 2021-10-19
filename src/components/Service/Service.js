import React, { useEffect, useState }  from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import './Service.css';
import { Link } from "react-router-dom";

const Service = () => {
    const[hospitals,setHospital]=useState([]);
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=>setHospital(data));
      },[]);
    return (
        <div>
            <Banner/>
            <div className="row ml-4">
            {
                
                hospitals.map(hospital=>
             
            <div className="col-lg-3 col-sm-6 col-12  mb-5 ml-3 cart-new">
                
              <img src={hospital.img} alt="" srcset="" />
              <h4>{hospital.name}</h4>
              <h5>{hospital.country}</h5>
              <Link></Link>
              
              <Link to={`/Details/${hospital.key}`}>
                  <button className="mb-2 btn-course1">Details</button>
                      </Link>
              
            
              
              
            </div>
              
            
              
              )
              

            }
            </div>
            <Footer/>
        </div>
    );
};

export default Service;