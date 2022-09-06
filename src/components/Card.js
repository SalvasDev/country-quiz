import React, { useState } from 'react';
import logo from "../img/image1.svg";
import { useCountries } from '../hooks/useCountries';
import CapitalQuestion from './CapitalQuestion';
import FlagQuestion from './FlagQuestion';
import ListCountries from './ListCountries';
import Score from './Score';
import styled from '@emotion/styled';


const Container = styled.div`
  width: min(95%, 464px);
  margin: 10rem auto 10rem auto;

@media (max-width: 443px ){
  margin-top: 6rem;
  }  


  .card {
    width: 464px;
    height: 100%;
    padding: 68px 32px;
    padding-bottom: 4rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    border-radius: 24px;
    row-gap: 2.5rem;

   @media (max-width: 543px ){
    width: min(95%, 464px);
    margin-right: auto;
    margin-left: auto;
  }

  @media (max-width: 443px ){
    width: min(95%, 375px);
    margin-right: auto;
    margin-left: auto;
    max-width: 80%;
  }  


  }

  .title__quiz {
    color: #F2F2F2;
    font-size: 36px;
    margin-bottom: 1rem;

    @media (max-width: 543px ){
     font-size: 32px;
    }

    @media (max-width: 443px ){
     font-size:20px;
     margin-left: 4rem;
    }
  }
  

  .logo {
    width: 162px;
    margin-right: -32px;
    margin-left: auto;
    margin-top: -14.5rem;

    @media (max-width: 443px ){
      width: 120px;
      margin-top: -12rem;

    }

  }


  .question {
    color: #2F527B;
    font-size: 24px;

    @media (max-width: 443px ){
    font-size: 20px;
     }  
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
    
       @media (max-width: 443px ){
        width: 40%;
       } 
    }

`;


const Card = ({ dataFlag, numTimes, handleForce }) => {

const [ times, setTimes ] = useState(numTimes)
const { countries } = useCountries(times)
const [ flag, setFlag ] = useState(dataFlag)


console.log(times)

const handleSubmit = (e, flag) => {
    e.preventDefault()

    if (flag === false) {
      setFlag(true)
      setTimes(times+1)      

    } else {
      setFlag(false)
      setTimes(times+1)   
    }
  }

  
  let { capital, flags, idd, } = countries[0] || {}
  let iddRight = (idd?.root + idd?.suffixes).toString()
  let limitTimes = 5;

  return (
    <Container>
      <h1 className="title__quiz">COUNTRY QUIZ</h1>
      <div className="card">
          { times < limitTimes ?  <img className="logo" src={logo} alt="world" /> : null  }                           
          
      
          { !flag && times < limitTimes ?  <CapitalQuestion capital = {capital} /> : flag && times < limitTimes ? <FlagQuestion flags = {flags}/> : null }   

          { times < limitTimes
            ?
            <ListCountries 
              countries={countries}
              iddRight = {iddRight}
            />  

            :
            <Score  
              handleForce = {handleForce}            
             />
          }        
          
          { times < limitTimes ?  <button className="next" onClick = { e => {handleSubmit(e, flag)} }>Next</button> : null  }

      </div>
    </Container>
  )
}

export default React.memo(Card)

// {dataArr.map(data => <Button isDisabled={selectedButtonId === data.id} /> )}


   
