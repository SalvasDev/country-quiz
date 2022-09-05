import React, { useState } from 'react';
import logo from "../img/image1.svg";
import { useCountries } from '../hooks/useCountries';
import CapitalQuestion from './CapitalQuestion';
import FlagQuestion from './FlagQuestion';
import ListCountries from './ListCountries';
import styled from '@emotion/styled';



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


  .next {
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

  .link__style {
    margin-right: 0;
    margin-left: auto;
  }

`;


const Card = ({ flag, setFlag, numTimes, numHits }) => {

const { countries } = useCountries(flag)
const [ showNext, setShowNext] = useState(true)
const [ times, setTimes ] = useState(numTimes)
console.log(times)


  const handleSubmit = (e, flag) => {
    e.preventDefault()

    if (flag === false) {
      localStorage.setItem('Flag', true )
      setFlag(true)
      setTimes(times+1)      
      console.log(`Estas son las veces ${times}`)

    } else {
      localStorage.setItem('Flag', false )
      setFlag(false)
      setTimes(times+1)   
      console.log(`Estas son las veces ${times}`)

    }
  }

  
  let { capital, flags, idd, } = countries[0] || {}
  let iddRight = (idd?.root + idd?.suffixes).toString()

  return (
    <Container>
      <h1 className="title__quiz">COUNTRY QUIZ</h1>
      <div className="card">
          <img className="logo" src={logo} alt="world" />                             
          

          { !flag ?  <CapitalQuestion capital = {capital} /> : <FlagQuestion flags = {flags}/> }   

          <ListCountries 
            countries={countries}
            iddRight = {iddRight}
            numHits = {numHits}
          />  
                  
              
          { showNext ?  <button className="next" onClick = { e => {handleSubmit(e, flag)} }>Next</button> : null  }

      </div>
    </Container>
  )
}

export default React.memo(Card )

// {dataArr.map(data => <Button isDisabled={selectedButtonId === data.id} /> )}


   
          
          // { !flag ?  <CapitalQuestion capital = {capital} /> : <FlagQuestion flags = {flags}/> }   

          // <ListCountries 
          //   countries={countries}
          //   iddRight = {iddRight}
          //   numHits = {numHits}
          // />  
                  
              
          // { showNext ?  <button className="next" onClick = { e => {handleSubmit(e, flag)} }>Next</button> : null  }
