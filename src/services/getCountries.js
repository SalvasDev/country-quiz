

 function random(min, max) {
            return Math.floor((Math.random() * (250 - 0 + 1)) + 0);
        }
        

const getCountries =  async () => {

   const api = await fetch('https://restcountries.com/v3.1/all?fields=idd,name,capital,flags')

    const countries = await api.json();

    var numAleat = random(0, 250);

    var nameCountry = countries[numAleat].name.common;
    var capital = countries[numAleat].capital.toString();
    var idd = countries[numAleat].idd.root +  countries[numAleat].idd.suffixes.toString()
    var flag = countries[numAleat].flags.svg;

    return (
        {nameCountry, idd, capital, flag}
    )
}
   
 
export default getCountries
