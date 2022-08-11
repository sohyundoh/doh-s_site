import React from 'react';
import Resumepic from '../../assets/image/Resumepic.jpg';
import './Resume.css';
import Skills from '../../components/skills/Skills';
import {skills,categories} from '../../components/skills/skills_categories';

function Resume(){
    return(
        <div>
            <div className="TitleBold">Resume</div>
            <img className="Image" src={Resumepic} alt="Resumepic"/>
            <div className='Title'>Profile</div>
            <p className='Contents'>2020 - : major Computer Science Engineering, Ewha Womans University.</p>
            <p  className='Contents'>2021.9 -: minor Cyber Security, Ewha Womans University.</p>
            <p className='Contents'>2021.3 - 2021.8: 이화여자대학교 동아리연합회 집행부</p>
            <p className='Contents'>2021.3 - 2021.8: 신촌지역 생명과학 연합동아리 BARA</p>
            <p className='Contents'>2021.12 -: 이화여자대학교 소프트웨어학부 알고리즘 동아리 EDOC</p>
            <p className='Contents'>2022.3 -: 이화여자대학교 개발 동아리 EFUB</p>
            <p className='Contents'>2022.7: EPITA 'ÉCOLE DES INGÉNIEURS EN INTELLIGENCE INFORMATIQUE SUMMER PROGRAM</p>
            <p/>
            <div className='Title'>Linguistic Ability</div>
            <p className='Contents'>TOEIC: 895</p>
            <p className='Contents'>OPIc:</p>
            <Skills skills = {skills} categories = {categories}/>
        </div>
    )
}
export default Resume;