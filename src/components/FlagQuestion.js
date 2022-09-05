import React from 'react'
import styled from '@emotion/styled'

const FlagImg = styled.img `
    width: 30%;
`;

const FlagQuestion = ({flags}) => {
  return (
    <div>
        <FlagImg className="flag__img"  src={flags?.svg} alt="" /> 
        <h2 className="question">Which country does this flag belong to?  </h2>      
    </div>
  )
}

export default FlagQuestion
