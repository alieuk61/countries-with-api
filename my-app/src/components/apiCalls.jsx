import axios from 'axios';

 async function getDataEurope (){
    try{
        let response = await axios.get('https://restcountries.com/v3.1/region/europe')
            return [response.data];
    }catch(error){
        console.log(`Error: ${error}`)
    }
 } 

async function getDataAfrica() {
    try {
        let response = await axios.get('https://restcountries.com/v3.1/region/africa')
            return [response.data];        
    } catch (error) {
        console.log(`Error: ${error}`)
    }
} 

async function getDataAsia() {
    try {
        let response = await axios.get('https://restcountries.com/v3.1/region/asia')
        return [response.data];
    } catch (error) {
        console.log(`Error: ${error}`)
    }
} 

async function getDataOceania() {
    try {
        let response = await axios.get('https://restcountries.com/v3.1/region/oceania')
        return [response.data];
    } catch (error) {
        console.log(`Error: ${error}`)
    }
} 

async function getDataAmericas() {
    try {
        let response = await axios.get('https://restcountries.com/v3.1/region/america');
        return [response.data];
    } catch (error) {
        console.log(`Error: ${error}`)
    }
} 

async function getMainPageData(){
    try{
        let responses = await Promise.all([ axios.get('https://restcountries.com/v3.1/name/germany'),
        axios.get('https://restcountries.com/v3.1/name/america'),
        axios.get('https://restcountries.com/v3.1/name/brazil'),
        axios.get('https://restcountries.com/v3.1/name/iceland'),
        axios.get('https://restcountries.com/v3.1/name/afghanistan'),
        axios.get('https://restcountries.com/v3.1/alpha/AX'),
        axios.get('https://restcountries.com/v3.1/name/albania'),
        axios.get('https://restcountries.com/v3.1/name/algeria')])

        const dataArray = responses.map(response => response.data);

        const combinedArray = [].concat(...dataArray);

        return combinedArray
    }catch (error) {
        console.log(error)
    }
}

export { getDataEurope, getDataAfrica, getDataAsia, getDataOceania, getDataAmericas, getMainPageData}