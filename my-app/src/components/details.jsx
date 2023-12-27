import MainPage from "./main-page"
import { useState, useContext } from "react";
import {CountryContext} from '../context/CountryContext'
import BackButton from './button'
import Borders from './borders'

export default function Details (){
    const { countryData, setCountryData } = useContext(CountryContext);
    console.log(countryData)
    return(
        <div className='flex gap-[90px] h-[550px] w-full bg-very-l-grey items-center'>
        <BackButton/>
            <section className="">
                { countryData?.flags && (
                <img className='w-[540px]' src={countryData.flags.png} alt="" />
                )}
                </section>
        <section>
                <h1 className="font-Rubik font-extrabold text-3xl leading-[5.5rem]">{countryData?.name?.common}</h1>
                <div className="grid grid-cols-2 gap-[60px]">
                <div>
                        <h5>Native Name: </h5>
                        <h5>Population: {countryData && countryData.population}</h5>
                        <h5>Region: {countryData && countryData.region}</h5>
                        <h5>Sub Region: {countryData && countryData.subregion}</h5>
                        <h5>Capital: {countryData && countryData.capital}</h5></div>
                <div>
                        <h5>Top Level Domain: {countryData && countryData.tld && countryData.tld[0]}</h5>
                        <h5>Currencies: {countryData && countryData.currencies && countryData.currencies.name}</h5>
                        <h5>Languages: {countryData && countryData.languages && Object.values(countryData.languages).join(", ")}</h5>
                </div>
            </div>
            {countryData && countryData.borders ?
           <Borders/>
            : null}
        </section>
        </div>
    )
}