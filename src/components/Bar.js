import {FaGithub} from 'react-icons/fa';
import './Buttonfont.css';
import styled from 'styled-components';
import React from 'react';
import { Link } from "react-router-dom";

const StyledButton = styled.button`

  margin: 0;
  border: none;
  cursor: pointer;
  font-size: var(--button-font-size, 1rem);
  padding: var(--button-padding, 12px 16px);
  border-radius: var(--button-radius, 8px);
  background: var(--button-bg-color, #ffffff);
  color: var(--button-color, #575858);
  &:focus {
   color: #b6bafa;
  }
`

const Bar = ()=> {
    return (
        <div>
            <Link to = "/" >
                <StyledButton className='Buttonfont' >Home</StyledButton>
            </Link>
            <Link to ="/aboutme">
                <StyledButton className= 'Buttonfont'>About</StyledButton>
            </Link>
            <Link to ="/resume">
                <StyledButton className='Buttonfont'>Resume</StyledButton>
            </Link>
            <Link to ="/life">
                <StyledButton className='Buttonfont'>Life</StyledButton>
            </Link>
            <StyledButton className='Buttonfont' onClick={() => 
                window.open('https://github.com/sohyundoh')}><FaGithub /></StyledButton>

        </div>
    );
}
export default Bar;