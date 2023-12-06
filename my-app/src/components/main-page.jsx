import { getDataEurope, getDataAfrica, getDataAsia, getDataOceania, getDataAmericas, getMainPageData } from "./apiCalls";
import { useState, useEffect, useRef } from "react";
import SearchBar from './searchBar'
import ActionAreaCard from './props/card-prop'

function MainPage() {

    const [currentPage, changePage] = useState('main-page')
    const [data, setData] = useState([]);
    const countryClicked = useRef(false);
    const countryinformation = useRef()
    const countriesDiv = useRef()
    const detailsDiv = useRef()
    
    function pageChanger(e) {
        changePage(e.target.textContent);
    }

    function handleClicker(country) {
        countryClicked.current = true;
        countryinformation.current = country
        countriesDiv.current.style.display = 'none';
        // detailsDiv.current.style.display = 'block';
        // console.log(countryinformation, countryinformation.current.population); // This might log the previous state due to closure
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
        <section className='bg-very-l-grey px-[75px] py-[50px]  h-screen w-full'>
            <div className='flex justify-between'>
                <SearchBar/>
                <div className="cursor-pointer w-[170px] flex justify-around items-center bg-white rounded">
                    Filter by Region
                    <ion-icon className='cursor-pointer' name="chevron-down-outline" size='small' ></ion-icon>
                </div>
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

            {countryClicked.current && (
                <div className="" >
                    <h1>hellooo</h1>
                    <h2>{countryinformation.current.population}</h2>
                </div>
            )}
            
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
    )
}


export default MainPage