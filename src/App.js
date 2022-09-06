import React, {useState, Fragment} from 'react'
import Card from './components/Card';
import Footer from './components/Footer';
import { HitsContextProvider } from './components/context/StaticContext';


function App() {


function handleForce(){
   window.location.reload()
}

let numTimes = 0;
let dataFlag = false;

 return (
    <Fragment>
        <HitsContextProvider>
          <Card   
            numTimes = {numTimes}
            handleForce = {handleForce}
            dataFlag = {dataFlag}
          />             
      </HitsContextProvider>
      <Footer author = "Salvador Sánchez"/> 
    </Fragment>

  );
}

export default App


