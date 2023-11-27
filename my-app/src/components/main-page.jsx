import { getDataEurope, getDataAfrica, getDataAsia, getDataOceania, getDataAmericas, getMainPageData } from "./apiCalls";
import { useState, useEffect } from "react";
import ActionAreaCard from './props/card-prop'

function MainPage() {

    const [currentPage, changePage] = useState('main-page')
    const [data, setData] = useState([]);

    
    function pageChanger(e) {
        changePage(e.target.textContent)
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

    console.log(data)

    return (
        <section className='bg-very-l-grey px-[75px] py-[50px] bg-slate-700 h-screen w-full'>
            <div>
                <input className="shadow-lg" type="text" />
                <div className="cursor-pointer w-[170px]">
                    Filter by Region
                    <ion-icon className='cursor-pointer' name="chevron-down-outline" size='small' ></ion-icon>
                </div>
                <div className="cursor-pointer w-[170px] absolute z-10">
                    <div
                        onClick={(e) => {
                            pageChanger(e)
                        }}
                    >Africa</div>
                    <div
                        onClick={(e) => {
                            pageChanger(e)
                        }}
                    >America</div>
                    <div
                        onClick={(e) => {
                            pageChanger(e)
                        }}
                    >Asia</div>
                    <div
                        onClick={(e) => {
                            pageChanger(e)
                        }}
                    >Europe</div>
                    <div
                        onClick={(e) => {
                            pageChanger(e)
                        }}
                    >Oceania</div>
                </div>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
            {data.map((country, index) => {
                return(
                    <ActionAreaCard
                    key={index}
                    countryImage={country.flags.png}
                    countryName={country.name.common}
                    countryFlagAlt={country.flags.alt}
                    />
                )
            })}
            </div>
        </section>
    )
}

export default MainPage;