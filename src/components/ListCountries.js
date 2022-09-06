import React from 'react'
import Btnsolut from './Btnsolut';
import styled from '@emotion/styled';

const ListButtons = styled.div` 
    display: flex;
    flex-direction: column;
    row-gap: 2.5rem;
 
`;



const ListCountries = ({countries, iddRight}) => {

const buttons = ['A', 'B', 'C', 'D'];

  var i =  0;
  var listRandom = [0,1,2,3]
listRandom = listRandom.sort(function() {return Math.random() - 0.5});


  return (
    <ListButtons>
        { buttons.map((btnInd) => {

            i = i + 1;            

                var {idd, name} = countries[listRandom[i-1]] || {}


                return  <Btnsolut 
                  key = {i.toString()}
                  nameCountry = {name?.common} 
                  idd = {(idd?.root + idd?.suffixes).toString()} 
                  btnLetter = {btnInd} 
                  iddRight = {iddRight}
                  newButton = {'normal'}
                  />


          })

          } 
      
    </ListButtons>
  )
}

export default React.memo(ListCountries)
