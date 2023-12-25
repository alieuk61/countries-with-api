import MainPage from "./main-page"
import { useState, useContext } from "react";
import {CountryContext} from '../context/CountryContext'
import BackButton from './button'

export default function Details (){
    const { countryData, setCountryData } = useContext(CountryContext);
    return(
        <div className='flex gap-[90px] h-[550px] w-full bg-very-l-grey justify-center items-center'>
        <BackButton/>
        <section className=""> 
            <img src={countryData && countryData.flags.png} alt="" />
        </section>
        <section>
            <h1 className="font-Rubik font-extrabold text-3xl ">{countryData && countryData.name.common}</h1>
                <div className="grid grid-cols-2 gap-[60px]">
                <div>
                        <h5>Native Name: </h5>
                        <h5>Population: {countryData.population}</h5>
                        <h5>Region: {countryData.region}</h5>
                        <h5>Sub Region: {countryData.subregion}</h5>
                        <h5>Capital: {countryData.capital}</h5></div>
                <div>
                        <h5>Top Level Domain: {countryData.tld[0]}</h5>
                        <h5>Currencies: {countryData.currencies.name}</h5>
                        <h5>Languages: {Object.values(countryData.languages).join(", ")}</h5>
                </div>
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