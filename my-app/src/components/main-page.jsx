import {
  getDataEurope,
  getDataAfrica,
  getDataAsia,
  getDataOceania,
  getDataAmericas,
  getMainPageData,
} from './apiCalls'
import { useState, useEffect, useRef, createContext, useContext } from 'react'
import SearchBar from './searchBar'
import ActionAreaCard from './props/card-prop'
import { CountryContext } from '../context/CountryContext'

function MainPage() {
  const { data, countryData, setCountryData, pageChanger } =
    useContext(CountryContext)

  const countriesDiv = useRef()
  const detailsDiv = useRef()

  const [open, setOpen] = useState(false)

  function handleClicker(country) {
    setCountryData(country)
    countriesDiv.current.style.display = 'none'
  }

  return (
    <section className='bg-very-l-grey font-Nunito px-[75px] py-[50px] h-screen w-full'>
      <div className='flex justify-between'>
        <SearchBar />
        <div onClick={() => setOpen(e => !e)} className='cursor-pointer w-[170px] flex justify-around items-center bg-white rounded'>
          Filter by Region
          <ion-icon
            className='cursor-pointer'
            name='chevron-down-outline'
            size='small'
          ></ion-icon>
        </div>
        {/* TODO: NEED TO MAKE THIS AN INDIV COMPONENT */}
        {open ? (
          <div className='cursor-pointer w-[170px] absolute right-[75px] top-[175px] z-10 bg-white rounded p-[5px]'>
            <div
              className='pl-[10px]'
              onClick={(e) => {
                pageChanger(e)
              }}
            >
              Africa
            </div>
            <div
              className='pl-[10px]'
              onClick={(e) => {
                pageChanger(e)
              }}
            >
              America
            </div>
            <div
              className='pl-[10px]'
              onClick={(e) => {
                pageChanger(e)
              }}
            >
              Asia
            </div>
            <div
              className='pl-[10px]'
              onClick={(e) => {
                pageChanger(e)
              }}
            >
              Europe
            </div>
            <div
              className='pl-[10px]'
              onClick={(e) => {
                pageChanger(e)
              }}
            >
              Oceania
            </div>
          </div>
        ) : null}
      </div>

      <div className='grid grid-cols-4 gap-8 mt-[50px]' ref={countriesDiv}>
        {data.map((country, index) => {
          return (
            <ActionAreaCard
              key={country.name.common}
              countryFlag={country.flags.png}
              countryName={country.name.common}
              countryFlagAlt={country.flags.alt}
              population={country.population}
              region={country.region}
              countryInfo={country}
              // capital={country.capital[0]}
              onPress={() => {
                console.log(country)
                setCountryData(country)
              }}
            />
          )
        })}
      </div>
    </section>
  )
}

export default MainPage
