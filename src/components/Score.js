import React from 'react'
import illust from "../img/undraw_winners_ao2o 2.svg";
import styled from '@emotion/styled';

const ContScore = styled.div`
    display: flex;
    flex-direction: column;
    grid-row: 2rem;

        img {
            width: 30%
        }

        .results{
            font-weight: 700;
            font-size: 4.8rem;
            color: #1D355D;
        }

        .socre {
            font-size: 1.8rem;
            font-weight: 400;
            color: #1D355D;

            span {
                font-weight: 700;
                font-size: 3.6rem;
                color: #6FCF97;
            }

        }
    .truy button {
        background-color: transparent;
        color: #1D355D;
        border:  2px solid #1D355D;;
        border-radius: 12px;
        font-size: 1.8rem;
        width: 209px;
        height: 62px;
    }

`;

const Score = ({hits}) => {
    hits = 10;
  return (
    <ContScore>
        <img src={illust} alt="" />
        <h2 className="results">Results</h2>
        <p className="score">You got <span>{hits}</span> correct answers</p>
        <button className="try">Trye again</button> 
  
      
    </ContScore>
  )
}

export default Score
