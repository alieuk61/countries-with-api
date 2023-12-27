import { useState, useContext, useEffect } from "react";
import { CountryContext } from '../context/CountryContext';
import * as api from '../components/apiCalls'

export default function Borders () {
    const { countryData, setCountryData } = useContext(CountryContext);
    const [border, setBorder] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            if (border) {
                const data = await api.getAlpha(border);
                setCountryData(data);
            }
        };

        fetchData();
        console.log(countryData)
    }, [border, setCountryData]);

    return(
        <div className='flex gap-x-[5px]'>
            <h5 className='py-[5px] px-[15px]'>
                Border Countries:
            </h5> {
                countryData.borders.map(
                    (country, index) => {
                        return (
                            <button 
                            className="bg-white py-[5px] px-[15px]"
                            onClick={(e) => {
                                setBorder(e.target.textContent)
                            }}
                            // when we click on thiese borders we want to have get the textcontent of the borderbtn and with that we will pass it through as an input and into an async function and then we will make an api call 
                            //this api call we will get a country based off of its alpha 3 code
                            >{country}</button>
                        )
                    }
                )
            }
        </div>
    )
}