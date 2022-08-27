import React, { useState, useEffect} from 'react';
import logo from "../img/image1.svg";
import illust from "../img/undraw_winners_ao2o 2.svg";
import styled from '@emotion/styled';
import getCountries from '../services/getCountries';
import Btnsolut from './Btnsolut';

const Container = styled.div`
  width: min(95%, 464px);
  margin: 10rem auto 10rem auto;

  .card {
    width: 464px;
    height: 100%;
    padding: 68px 32px;
    background-color: white;
    display: flex;
    flex-direction: column;
    border-radius: 24px;
    row-gap: 2.5rem;
  }

  .title__quiz {
    color: #F2F2F2;
    font-size: 36px;
    margin-bottom: 1rem;

  }

  .logo {
    width: 162px;
    margin-right: -32px;
    margin-left: auto;
    margin-top: -14.5rem;
  }


  .question {
    color: #2F527B;
    font-size: 24px;
  }

    .next  {
      border: none;
      border-radius: 12px;
      margin-right: 0;
      margin-left: auto;
      height: 56px;
      width: 117px;
      background-color: #F9A826;
      color: white;
      text-align: center;
      font-size: 18px;
      padding: 0;
      box-shadow: 0px 2px 4px rgba(252, 168, 47, 0.4);
      cursor: pointer;

      &:hover {
      background-color:#fac269;
      
    } 


    }


`;


const Card = () => {

    const [ country, setCountries ] = useState([])
 
        
     useEffect( () => {       
        return getCountries().then(country => setCountries(country))
      
     
    }, [])

   console.log(country)
    
    var {capital, flag, idd, nameCountry } = country;

    const buttons = ['A', 'B', 'C', 'D'];
    var i =  0;

  return (
    <Container>
      <h1 className="title__quiz">COUNTRY QUIZ</h1>
      <div className="card">
          <img className="logo" src={logo} alt="world" />          

          <h2 className="question">{capital} is the capital of</h2>

          { buttons.map((btnInd) => {
            i = i + 1;
            
            return  <Btnsolut 
              key = {i.toString()}
              nameCountry = {nameCountry} 
              idd = {idd} 
              btnLetter = {btnInd} status = ''
              country= {country}
              setCountries = {setCountries}
               />
             
          })

          }                  

          <button className="next">Next</button> 

          {/* <img src={logo} alt="flag" /> */}
          {/* <img src={illust} alt="" />
          <h2 className="results">Results</h2>
          <p className="score">You got 4 correct answers</p>
          <button className="try">Trye again</button> */}       

      </div>
    </Container>
  )
}

export default Card
