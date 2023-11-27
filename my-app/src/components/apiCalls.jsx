import axios from 'axios';

 async function getDataEurope (){
    try{
        let response = await axios.get('https://restcountries.com/v3.1/region/europe')
            return response.data;
    }catch(error){
        console.log(`Error: ${error}`)
    }
 } 

async function getDataAfrica() {
    try {
        let response = await axios.get('https://restcountries.com/v3.1/region/africa')
            return response.data;        
    } catch (error) {
        console.log(`Error: ${error}`)
    }
} 

async function getDataAsia() {
    try {
        let response = await axios.get('https://restcountries.com/v3.1/region/asia')
        return response.data;
    } catch (error) {
        console.log(`Error: ${error}`)
    }
} 

async function getDataOceania() {
    try {
        let response = await axios.get('https://restcountries.com/v3.1/region/oceania')
        return response.data;
    } catch (error) {
        console.log(`Error: ${error}`)
    }
} 

async function getDataAmericas() {
    try {
        let response = await axios.get('https://restcountries.com/v3.1/region/america');
        return response.data;
    } catch (error) {
        console.log(`Error: ${error}`)
    }
} 

async function getMainPageData(){
    try{
        let response = await axios.get('https://restcountries.com/v3.1/all')
        return response.data;
    }catch (error) {
        console.log(error)
    }
}

export { getDataEurope, getDataAfrica, getDataAsia, getDataOceania, getDataAmericas, getMainPageData}