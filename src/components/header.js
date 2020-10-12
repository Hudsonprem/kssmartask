import React, {useEffect, useState} from 'react';
import "./header.css";
import {firebaseDB} from "./firebase";

function Header({onLogOut}) {

    const [username, setUserName] = useState("")
    function handleLogout(){
        firebaseDB.auth().signOut().then(()=> onLogOut())

    } 

    useEffect(() => {       
        firebaseDB.auth().onAuthStateChanged(function(user) {
            if(user)
            {
                setUserName(user.email)
            }
            else{
            }
        })
         },[])

    return (
        <section>
            <nav className ="d-flex justify-content-around">
                <h2 className="btn btn-outline-primary">Welcome {username}</h2>
                <button onClick={()=> handleLogout()} className="btn btn-dark"> logout</button>
            </nav>
        </section>
    )
}

export default Header
