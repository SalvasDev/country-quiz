import React, { useEffect } from 'react'
import styled from '@emotion/styled';
import getCountries from '../services/getCountries';

const Container = styled.div`

.btn__sol {
    display: flex;
    height: 56px;
    background-color: transparent;
    border: 2px solid rgba(96, 102, 208, 0.7);
    border-radius: 12px;
    color: rgba(96, 102, 208, 0.8);
    text-align: left;
    padding-left: 2rem;
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    font-weight: 500;
    cursor: pointer;
    align-items: center;
    width: 100%;

    &:hover  {
      border: none;
      background-color: #F9A826;
      color: white;
    }    

  }

    .solution {
      font-size: 1.8rem;
      margin-left: 4rem;
    }

    .icon {
      margin-right: 18px;
      margin-left: auto;
      /* color: transparent; */
    }

`;


const Btnsolut = ({nameCountry, btnLetter, idd, status, country, setCountries}) => {

  return (
    <Container>
      <button className="btn__sol">{btnLetter} <span className="solution" id = {idd}>{nameCountry}</span>              
           { status === 'rigth'? <span className="material-symbols-rounded icon"> check_circle</span> 
           : status === 'wrong' ?  <span className="material-symbols-rounded icon"> cancel</span>
           : null} </button>

    </Container>

  )

}

export default Btnsolut
