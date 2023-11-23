import { getDataEurope, getDataAfrica, getDataAsia, getDataOceania, getDataAmericas, getMainPageData } from "./apiCalls";
import { useState, useEffect } from "react";

function MainPage() {

    const [currentPage, changePage] = useState('main-page')
    const [data, setData] = useState([]);

    
    function pageChanger(e) {
        changePage(e.target.textContent)
    }

    useEffect(() => {
        const fetchData = async () => {
            let newData;
            switch (currentPage) {
                case 'Africa':
                    newData = await getDataAfrica();
                    break;
                case 'America':
                    newData = await getDataAmericas();
                    break;
                case 'Asia':
                    newData = await getDataAsia();
                    break;
                case 'Europe':
                    newData = await getDataEurope();
                    break;
                case 'Oceania':
                    newData = await getDataOceania();
                    break;
                default:
                    newData = await getMainPageData();
            }
            setData(newData.data || []);
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
                <div className="cursor-pointer w-[170px] absolute">
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

            {data.map((country, index) => {
                
            })}
        </section>
    )
}

export default MainPage;