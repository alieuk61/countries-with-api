import { createContext, useContext, useEffect, useState } from 'react'
import * as api from '../components/apiCalls'

export const CountryContext = createContext({})

function CountryContextProvider({ children }) {
  const [countryData, setCountryData] = useState({})
  const [currentPage, changePage] = useState('main-page')
  const [data, setData] = useState([])
  const [countryInput, setCountryInput] = useState('')

  function pageChanger(e) {
    changePage(e.target.textContent)
  }

  async function fetchCountry() {
    const countries = await api.getCountry(countryInput)

    if(countries){
        setData(countries)
    }
  }

  const changeData = async(request) => setData(await request());

  
  useEffect(() => {
    fetchCountry()

    if (!data.length && !countryInput) {
      changeData(api.getMainPageData)
    }

  }, [countryInput])

  useEffect(() => {
    const fetchData = async () => {
      switch (currentPage) {
        case 'Africa':
          changeData(api.getDataAfrica)
          break
        case 'America':
          changeData(api.getDataAmericas)
          break
        case 'Asia':
          changeData(api.getDataAsia)
          break
        case 'Europe':
          changeData(api.getDataEurope)
          break
        case 'Oceania':
          changeData(api.getDataOceania)
          break
        default:
          changeData(api.getMainPageData)
      }
    }

    fetchData()
  }, [currentPage])

  return (
    <CountryContext.Provider
      value={{
        countryData,
        setCountryData,
        pageChanger,
        data,
        countryInput,
        setCountryInput,
      }}
    >
      {children}
    </CountryContext.Provider>
  )
}

export default CountryContextProvider
