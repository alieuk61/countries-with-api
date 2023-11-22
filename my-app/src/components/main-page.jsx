import {getDataEurope, getDataAfrica, getDataAsia, getDataOceania, getDataAmericas, getMainPageData} from "./apiCalls";
import { useState } from "react";

function MainPage(){

    const [ currentPage, changePage ] = useState('main-page')

    const AmericaData = getDataAmericas();
    const africaData = getDataAfrica();
    const europeData = getDataEurope();
    const asiaData = getDataAsia();
    const oceaniaData = getDataOceania();
    const mainData = getMainPageData();
    
    console.log(AmericaData, africaData, europeData, asiaData, oceaniaData, mainData)

    // const dataFilter = (currentPage) => {
    //     switch (currentPage) {
                // case 'Africa':
                //     return africaData.data
                // break;
    //     }
    // }

    return(
        <section className='bg-very-l-grey px-[75px] py-[50px] bg-slate-700 h-screen w-full'>
            <div>
                <input className="shadow-lg" type="text" />
                <div className="cursor-pointer w-[170px]">
                    Filter by Region
                    <ion-icon className='cursor-pointer' name="chevron-down-outline" size='small' ></ion-icon>
                </div>
                <div className="cursor-pointer w-[170px] absolute">
                    <div>Africa</div>
                    <div>America</div>
                    <div>Asia</div>
                    <div>Europe</div>
                    <div>Oceania</div>
                </div>
            </div>

            {/* here we ill get the main page countries array, loop through it and then make a grid col temp of 4 */}

        </section>
    )
}

export default MainPage;