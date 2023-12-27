import { NavLink } from 'react-router-dom'

export default function BackButton(){

    return(
        <NavLink to='/countries-with-api'>
            <button className='py-[10px] px-[40px] rounded shadow-xl bg-white absolute top-[110px] left-[90px] shadow-[0 0 3px 3px rgb(0 0 0/ 3 %)]'>
            <span>Back</span>
        </button>
        </NavLink>
    )
}

