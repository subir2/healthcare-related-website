import React, { useEffect, useState }  from 'react';
import { useParams } from 'react-router';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
const Details = () => {
    const {id}=useParams();
    const t=id;
    console.log(t);
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
        // console.log(finddetail);
        setSingleDeatils(finddetail);

},[Details])


    return (
        <div>
           <div className="row ml-4">
        <Banner/>
         <h1>{singleDetails.name}</h1>

            </div>
            <Footer/>
        </div>
    );
};

export default Details;