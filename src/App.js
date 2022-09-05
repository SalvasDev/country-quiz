import React, {useState, Fragment} from 'react'
import Card from './components/Card';
import Footer from './components/Footer';



function App() {

const dataFlag = localStorage.getItem('Flag' || false)  
const [ flag, setFlag ] = useState(dataFlag)

let numTimes = 0;
let numHits = 0;

 return (
    <Fragment>
          <Card 
            flag = {flag}
            setFlag = {setFlag} 
            numTimes = {numTimes}
            numHits = {numHits}
          />             
      <Footer author = "Salvador Sánchez"/> 
    </Fragment>

  );
}

export default App


// const [any, forceUpdate] = useReducer(num => num + 1, 0);
// function handleForce(){
//    forceUpdate()
// }
// handleForce = {handleForce}
