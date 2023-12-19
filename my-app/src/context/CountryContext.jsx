import { createContext, useContext, useEffect, useState } from 'react'
import * as api from "../components/apiCalls";

export const CountryContext = createContext({})

function CountryContextProvider({ children }) {

    const [countryData, setCountryData] = useState({});
    const [currentPage, changePage] = useState('main-page');
    const [data, setData] = useState([]);

    function pageChanger(e) {
        changePage(e.target.textContent);
    }
    

    useEffect(() => {
        const fetchData = async () => {
            switch (currentPage) {
                case 'Africa':
                    setData(await api.getDataAfrica()); 
                    break;
                case 'America':
                    setData(await api.getDataAmericas());
                    break;
                case 'Asia':
                    setData(await api.getDataAsia());
                    break;
                case 'Europe':
                    setData(await api.getDataEurope());
                    break;
                case 'Oceania':
                    setData(await api.getDataOceania());
                    break;
                default:
                    setData(await api.getMainPageData());
            }
        };

        fetchData();
    }, [currentPage]);

	return (
		<CountryContext.Provider
			value={{
                countryData,
                setCountryData,
                pageChanger,
                data
			}}
		>
			{children}
		</CountryContext.Provider>
	)
}

export default CountryContextProvider