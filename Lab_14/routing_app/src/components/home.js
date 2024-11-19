import React from "react";
import homeimage from "../images/home.jpg"

const Home = function(){
    return(
        <>
        <h1 className="title">Home</h1>
        <figure className="imgcontainer">
            <img src={homeimage}/>
        </figure>
        </>
    )
}

export default Home