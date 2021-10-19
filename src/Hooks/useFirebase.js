import { getAuth, signInWithPopup, GoogleAuthProvider ,signOut ,onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";
import initilizeAuthentication from "../components/Login/Firebase/Firebase.init";

initilizeAuthentication();

const UseFirebase =()=>{
const [users,setUsers]=useState({});
const auth = getAuth();

const signInUsingGoogle=()=>{
    const googleProvider=new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
    .then(result=>{
        setUsers(result.user);
    })
}

useEffect(()=>{
const unsubscribed=onAuthStateChanged(auth,user=>{

    if(user){
        setUsers(user);
    }
    else{
        setUsers({})
    }


});
return ()=>unsubscribed;


},[])

const logOut=()=>{
    signOut(auth)
    .then(()=>{});
}
return {
    users,
    signInUsingGoogle,
    logOut,
    setUsers


}


}
export default UseFirebase;