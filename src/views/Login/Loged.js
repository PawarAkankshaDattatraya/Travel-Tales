import React from "react";
import Home from "./../Home/Home"
import {useNavigate} from "react-router-dom";

function Loged(){
    const navigate=useNavigate();
    console.log("home page");
 
    return(
    <>
    <div>
      <h2>Login Successfully</h2>
            <button  className="button btn btn-success  btn-lg btn-block"
                    onClick={() =>navigate(-1)}
                    >Go to Home Page</button>
                  
                    </div>im
                    </>
    );
}

export default Loged;