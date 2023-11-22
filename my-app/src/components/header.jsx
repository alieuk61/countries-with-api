import '../App.css'
import { useState } from 'react'
import MainPage from './main-page'

function Header (){

    const [theme, setTheme] = useState('light')

    return(
    <section className="w-full h-[24px] px-[16px] py-[32px] flex bg-white box-border shadow-lg shadow-black-500/50">
        <div className='grid justify-between self-center w-full h-fit grid-cols-auto-auto mx-4'>
    <h2 
    className='text-black text-xl pointer'
    onClick={() => {
        // changePage('main-page')
        // console.log(currentPage)
    }}
    >Where in the world?</h2>
    <p className='text-black pointer'>{theme} mode</p>
        </div>
    </section>
  )
}

export default Header