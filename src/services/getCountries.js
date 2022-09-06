
import axios from 'axios';

function random() {
   return Math.floor((Math.random() * (250 - 0 + 1)) + 0);
} 

const getCountries =  async () => {


   const resultado = await axios.get('https://restcountries.com/v3.1/all?fields=idd,name,capital,flags')
   

        var countGroup = [];

        for ( let i = 1; i <= 4; i++ ) {
                
            let numAleat = random();
            
            if ((resultado.data[numAleat] !== undefined) && (resultado.data[numAleat].capital !== []) && (resultado.data[numAleat].capital))  {
                countGroup.push(resultado.data[numAleat])                
            } else {
                return   
            }
                        
        }
    return (
        countGroup
    )
}
   
 
export default getCountries