import React from "react";
import mypicture from "./img/mypicture.jpg";
import './Home.css';
import { FaRegSmileWink } from "react-icons/fa";
function Home(){
    return(
        <div>
             <div className="TitleBold">Home</div>
             <img className="Image" src = {mypicture} alt = "mypicture" />
             <p className="Contents">This is Me!  <FaRegSmileWink/></p>
             <p className="Contents">I'm a beginner programmer.</p>
             <div className="Title">Contact</div>
             <p className="Contents">Email : lyny123@naver.com</p>
        </div>
    );
};
export default Home;