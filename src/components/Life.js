import React from "react";
import mypast1 from "./img/mypast1.JPG";
import mypast2 from "./img/mypast2.JPG";
import mypast3 from "./img/mypast3.JPG";
import mypast4 from  "./img/mypast4.JPG";
import Mysis from "./img/Mysis.JPG";
import mymom from "./img/mymom.jpg";
import './Life.css';
function Life(){
    return(
        <div>
            <div className="TitleBold">Life</div>
            <div className="Title">My Friends</div>
            <img className="Image" src={mypast1} alt="mypast1"/>
            <p className = "Contents" >2021.02.19</p>
            <img className="Image" src={mypast2} alt="mypast2"/>
            <p className = "Contents" >2021.05.10</p>
            <img className="Image" src={mypast3} alt="mypast3"/>
            <p className = "Contents" >2021.12.01</p>
            <img className="Image" src={mypast4} alt="mypast4"/>
            <p className = "Contents" >2021.12.22</p>
            <div className = "Contents"  className="Title">My Family</div>
            <img className="Image" src={Mysis} alt= "mysis"/>
            <p className = "Contents"  >This is me and my sis.</p>
            <img className="Image" src={mymom} alt= "mymom"/>
            <p className = "Contents" >This is me and my mommy.</p>
            <div className="Title">I like</div>
            <p className = "Contents" >Hiking</p>
            <p className = "Contents" >Reading</p>
            <p className = "Contents" >Watching Movie</p>
            <p className = "Contents" >Cooking</p>
            <p className = "Contents" >Winter</p>
            <p className = "Contents" >Perfume</p>
            <p className = "Contents" >Hot chocolate</p>
        </div>
    );
};
export default Life;