import TextField from '@mui/material/TextField';
import {useContext, useState} from 'react';
import { CountryContext } from '../context/CountryContext';

export default function SearchBar(){

    const { countryInput, setCountryInput  } = useContext(CountryContext);

    return(
    <TextField 
    className='shadow-lg bg-white w-[450px]' 
    id="outlined-basic" variant="outlined"
    value={countryInput}
    onChange={(e) => {
        setCountryInput(e.target.value)
    }}
    />
    )
};

// IN THIS PAGE WE WILL WORK ON THE FILTERING ASPECT

