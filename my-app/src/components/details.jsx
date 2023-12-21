import MainPage from "./main-page"
import ActionAreaCard from './props/card-prop'
import { useState, useContext } from "react";
import {CountryContext} from '../context/CountryContext'

export default function Details (){
    const { countryData, setCountryData } = useContext(CountryContext);
    console.log(countryData.languages)
    return(
        <div className='flex h-[550px] w-full bg-very-l-grey justify-center items-center'>
        <section className=""> 
            <img src={countryData && countryData.flags.png} alt="" />
        </section>
        <section>
            <h1 className="">{countryData && countryData.name.common}</h1>
            <div>
                <h5>Native Name: </h5>
                <h5>Population: {countryData.population}</h5>
                <h5>Region: {countryData.region}</h5>
                <h5>Sub Region: {countryData.subregion}</h5>
                <h5>Capital: {countryData.capital}</h5>
                <h5>Top Level Domain: {countryData.tld[0]}</h5>
                <h5>Currencies: {countryData.currencies.name}</h5>
                <h5>Languages: {}</h5>
            </div>
            <div>
                <h5>
                    Border Countries: {
                        // countryData.
                    }
                </h5>
            </div>
        </section>
        </div>
    )
}