import MainPage from "./main-page"
import ActionAreaCard from './props/card-prop'
import { useState, useContext } from "react";
import {CountryContext} from './main-page'

export default function Details (){
    const { countryData, setCountryData } = useContext(CountryContext);
    return(
        <section className="h-screen w-full bg-very-l-grey"> 
            <img src={countryData && countryData.flags.png} alt="" />
            <h1>{countryData && countryData.population}</h1>
        </section>
    )
}