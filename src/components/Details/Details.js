import React, { useEffect, useState }  from 'react';
import { useParams } from 'react-router';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import './Details.css';
const Details = () => {
    const {id}=useParams();
    const t=id;
   // console.log(t);
    //console.log(id);
    const[Details,setDeatils]=useState([]);
    const[singleDetails,setSingleDeatils]=useState({});

    useEffect(()=>{
      
        fetch('/products2.JSON')
        .then(res=>res.json())
        .then(data=>setDeatils(data));
      },[])

      useEffect(()=>{
        const finddetail=Details.find(detail=>detail.id===parseInt(id));
        console.log(finddetail);
        setSingleDeatils(finddetail);

},[Details])


    return (
        <div>
            <Banner/>
           <div className="about-body">
        
        <div className="about-body"></div>
         {/* <h1>{singleDetails.DES}</h1> */}
         <h3>{singleDetails?.name}</h3>
         <hr></hr>
         <p>{singleDetails?.DES}</p>

            </div>
            <Footer/>
        </div>
    );
};

export default Details;