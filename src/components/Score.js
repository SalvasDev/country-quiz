import React, {useContext} from 'react'
import illust from "../img/undraw_winners_ao2o 2.svg";
import StaticContext from './context/StaticContext'
import styled from '@emotion/styled';


const ContScore = styled.div`
    padding: 0;
    display: flex;
    flex-direction: column;
    grid-row: 2rem;
    margin-left: auto;
    margin-right: auto;
    text-align: center;

    button {
        background-color: transparent;
        color: #1D355D;
        border:  2px solid #1D355D;;
        border-radius: 12px;
        font-size: 1.8rem;
        font-weight: 600;
        width: 209px;
        height: 62px;
        align-self: center;
        margin-top: 3rem;
        cursor: pointer;
    }

   

        img {
            width: 100%;
        }

        .results{
            font-weight: 700;
            font-size: 4.8rem;
            color: #1D355D;
            margin-bottom: 0;
        }

        .score {
            margin-top: 0;
            font-size: 1.8rem;
            font-weight: 400;
            color: #1D355D;

            span {
                margin-top: 0;
                font-weight: 700;
                font-size: 3.6rem;
                color: #6FCF97;
            }

        }
     
`;



const Score = ({ handleForce}) => {

const { hits } = useContext(StaticContext)

  const handleSubmit = () => {
        handleForce()
    } 

  return (
    <ContScore>
        <img src={illust} alt="" />
        <h2 className="results">Results</h2>
        <p className="score">You got <span>{hits}</span> correct answers</p>
        <button onClick = { () => {handleSubmit()} }>Try again</button>      
    </ContScore>
  )
}

export default React.memo(Score)
