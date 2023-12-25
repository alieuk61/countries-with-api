import { NavLink } from 'react-router-dom'

export default function BackButton(){

    return(
        <NavLink to='/countries-with-api'>
        <button>
            <span>Back</span>
        </button>
        </NavLink>
    )
}

