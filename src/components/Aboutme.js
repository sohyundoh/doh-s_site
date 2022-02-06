import React from "react";
import myface from "./img/myface.png";
import './Aboutme.css'

const Aboutme = () =>{
    return(
        <div>
            <div className="TitleBold">About me</div>
            <img className="Image" src={myface} alt ="myface"/>
            <p/>
            <div className="Title">Motto</div>
            <p className="Contents">Give thanks to unknown blessings already on their way.</p>
            <p className="Contents">Today is my youngest from all my life left.</p>
            <p/>
            <div className="Title">About me</div>
            <p className="Contents">I studied Brain and Neuro Science for a year when I was 20.</p>
            <p className="Contents">And then I learned C language which made me decide to study Computer Science Engineering.</p>
            <p/>        
            <p className="Contents">I'm a reader. I love reading books. I usually read novels, rarely essays.</p>
            <p className="Contents">I'm doing a part time job of teaching 11-17 students at academy.</p>
            <p className="Contents">I'd filmed videos and I posted it in my youtube channel about two months. Those are locked now. </p>
            <div className = "Title">Travel</div>
            <p className="Contents">In 2011, Hongkong</p>
            <p className="Contents">In 2015, Osaka, Japan</p>
            <p className="Contents">In 2017, Praha, Czech and Dresden, Germany</p>
            <p className="Contents">In 2017, Hongkong and Macao, Taiwan</p>
            <p className="Contents">In 2019, Hukuoka, Japan</p>
            <div className='resumefooter'>
                <div className="Title">About site</div>
                <p className="Line">This site belongs to Doh.</p>
                <p className="Line">Font : TitilliumWeb</p>
                <p className="Line"> This site inspired by</p>
                <p className="Line">https://mldangelo.com/</p>
            </div>
        </div>
    );
}
export default Aboutme;