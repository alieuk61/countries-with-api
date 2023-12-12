import { getDataEurope, getDataAfrica, getDataAsia, getDataOceania, getDataAmericas, getMainPageData } from "./apiCalls";
import { useState, useEffect, useRef, createContext } from "react";
import SearchBar from './searchBar'
import ActionAreaCard from './props/card-prop'

export const CountryContext = createContext({});

function MainPage() {

    const [currentPage, changePage] = useState('main-page');
    const [data, setData] = useState([]);
    const [countryData, setCountryData] = useState({});
    const countriesDiv = useRef();
    const detailsDiv = useRef();

    function pageChanger(e) {
        changePage(e.target.textContent);
    }
    
    function handleClicker(country) {
        setCountryData(country)
        countriesDiv.current.style.display = 'none';
       }

    useEffect(() => {
        const fetchData = async () => {
            switch (currentPage) {
                case 'Africa':
                    setData(await getDataAfrica()); //in this async function we set the state when the promise has been fulfilled, so that it doesnt try to set state before the promise has been fulfilled
                    break;
                case 'America':
                    setData(await getDataAmericas());
                    break;
                case 'Asia':
                    setData(await getDataAsia());
                    break;
                case 'Europe':
                    setData(await getDataEurope());
                    break;
                case 'Oceania':
                    setData(await getDataOceania());
                    break;
                default:
                    setData(await getMainPageData());
            }
        };

        fetchData();
    }, [currentPage]);

    return (
    <CountryContext.Provider value={{countryData, setCountryData}}>
        <section className='bg-very-l-grey px-[75px] py-[50px]  h-screen w-full'>
            <div className='flex justify-between'>
                <SearchBar/>
                <div className="cursor-pointer w-[170px] flex justify-around items-center bg-white rounded">
                    Filter by Region
                    <ion-icon className='cursor-pointer' name="chevron-down-outline" size='small' ></ion-icon>
                </div>
                {/* TODO: NEED TO MAKE THIS AN INDIV COMPONENT */}
                <div className="cursor-pointer w-[170px] absolute right-[75px] top-[175px] z-10 bg-white rounded p-[5px]">
                    <div className='pl-[10px]'
                        onClick={(e) => {
                            pageChanger(e)
                        }}
                    >Africa</div>
                    <div className='pl-[10px]'
                        onClick={(e) => {
                            pageChanger(e)
                        }}
                    >America</div>
                    <div className='pl-[10px]'
                        onClick={(e) => {
                            pageChanger(e)
                        }}
                    >Asia</div>
                    <div className='pl-[10px]'
                        onClick={(e) => {
                            pageChanger(e)
                        }}
                    >Europe</div>
                    <div className='pl-[10px]'
                        onClick={(e) => {
                            pageChanger(e)
                        }}
                    >Oceania</div>
                </div>
            </div>
            
            <div className="grid grid-cols-4 gap-4 mt-[50px]" ref={countriesDiv}>
            
            {data.map((country, index) => {
                return(
                    <ActionAreaCard
                    key={index}
                    countryFlag={country.flags.png}
                    countryName={country.name.common}
                    countryFlagAlt={country.flags.alt}
                    population={country.population}
                    region={country.region}
                    countryInfo={country}
                    // capital={country.capital[0]}
                    onPress={() => {                    
                        handleClicker(country);
                    }}
                    />
                )
            })}
            </div>
        </section>
        </CountryContext.Provider>
    )
}

export default MainPage