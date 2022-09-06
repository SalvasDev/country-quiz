import React, {useContext, useEffect, useState} from 'react'
import StaticContext from './context/StaticContext'
import styled from '@emotion/styled';


const Container = styled.div`
    
      
button {
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
    
    @media (max-width: 443px ){      
      font-size: 1.8rem;

    }


  }

    .solution {
      font-size: 1.8rem;
      margin-left: 3rem;

      @media (max-width: 443px ){      
        margin-left: 1.5rem;
        font-size: 1.6rem;

      }
    }

    .icon {
      margin-right: 18px;
      margin-left: auto;
    }

    .normal button {
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
    .correct {
      background-color: #60BF88;
      border: none;
      color: white;
      cursor: not-allowed;
  
    &:hover  {
      cursor: not-allowed; 
      background-color: #60BF88;

    } 

    }

    .incorrect {
      background-color: #EA8282;
      border: none;
      color: white;
      cursor: not-allowed;
      
    &:hover  {
      cursor: not-allowed; 
      background-color:  #EA8282;
    } 

    .normal {
      background-color: transparent;
    }

    }
`;



const Btnsolut = ({nameCountry, btnLetter, idd, iddRight, newButton}) => {

  const [ typeResp, setTypeResp ] = useState('');
  const { hits, setHits } = useContext(StaticContext)


  useEffect( () => { 
   setTypeResp(newButton);
  }, [iddRight])  



  
  const handleClick = (e, idd, iddRight, setTypeResp, hits, setHits) => {
    e.preventDefault()

    let respSolution = idd

    if (respSolution === iddRight) {
      setTypeResp('correct')
      setHits(hits+1)

      

    } else {      
      setTypeResp('incorrect')

      
    }    
}

  
   
    return (
    <Container>
      
      <button 
        value = {idd}
        disabled = {false}
        key = {idd} 
        onClick= {(e) => {handleClick(e, idd, iddRight, setTypeResp, hits, setHits) }}
        className={typeResp}
        >{btnLetter} 
        <span className="solution" 
        id = {idd} >
        {nameCountry}
        </span> 

        { typeResp === 'correct' ? <span className="material-symbols-rounded icon"> check_circle</span> 
        : typeResp === 'incorrect' ?  <span className="material-symbols-rounded icon"> cancel</span>
        : null} </button>
        
    </Container>
    
  )

}

export default React.memo(Btnsolut)






