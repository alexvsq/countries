import React, { useState } from 'react'
import countries from '../data/countries.json'
import { useNavigate } from 'react-router-dom';




export default function Nav({ search, setSearch }) {
    const regions = ['All', 'Asia', 'Europe', 'Africa', 'Americas', 'Oceania']
    const countriesNames = countries.map(country => country.name.common)

    const [menu, setMenu] = useState(false)
    const [textInput, setTextInput] = useState('')

    const navigate = useNavigate();

    const handleButtonClick = (x) => {
      // Cambiar la ruta cuando se hace clic en el botón
      navigate(`/country/${x}`);
    };

    return (
        <nav className="fixed w-full  border-gray-200 bg-[#00091d]">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                <a href="/">
                    <p className="  self-center text-3xl font-bold whitespace-nowrap cursor-pointer text-gray-300">Countries</p>
                </a>

                <div className="flex md:order-2">
                    <button
                        onClick={() => setMenu(!menu)}
                        type="button"
                        data-collapse-toggle="navbar-search"
                        aria-controls="navbar-search" aria-expanded="false"
                        className="md:hidden text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                    <div className="relative hidden md:block">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search icon</span>
                        </div>
                        <form
                            className='flex '
                           onSubmit={()=>handleButtonClick(textInput)}
                            >

                            <input
                                type="text"
                                id="search-navbar"
                                className="block w-full p-2 ps-10 text-sm border rounded-lg  focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                                placeholder="Search..."
                                onChange={(e) => setTextInput(e.target.value)}


                            />
                            <div className={`flex flex-col fixed bg-slate-600/90 rounded-lg max-h-[400px] w-56 overflow-y-scroll top-14 ${textInput ? '' : 'hidden'} `}>

                                {countriesNames.map((item) => {
                                    if (item.toLowerCase().startsWith(textInput.toLowerCase())) {
                                        return <p
                                            key={item}
                                            onClick={() => {handleButtonClick(item.toLowerCase())
                                                    setTextInput('')     
                                            }}
                                            className=' text-white cursor-pointer p-2 border-b '>{item }</p>
                                    }
                                })}
                            </div>

                        </form>
                    </div>
                    <button
                        onClick={() => setMenu(!menu)}
                        data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className={`items-center justify-between  w-full md:flex md:w-auto md:order-1 ${menu ? '' : "hidden"}`} id="navbar-search">
                    <div className="relative mt-3 md:hidden">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>

                        <form onSubmit={() => alert('gaaa')}>

                            <input
                                type="text"
                                id="search-navbar"
                                className="block w-full p-2 ps-10 text-sm  border rounded-lg  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Search..."
                                onChange={(e) => setTextInput(e.target.value)}
                            />
                            <div className={`flex flex-col m-2 fixed bg-slate-600/90 rounded-lg max-h-[400px] w-full overflow-y-scroll top-28 ${textInput ? '' : 'hidden'} `}>

                                {countriesNames.map((item) => {
                                     if (item.toLowerCase().startsWith(textInput.toLowerCase())) {
                                        return <p
                                            key={item}
                                            onClick={() => {handleButtonClick(item.toLowerCase())
                                                    setTextInput('')
                                                    setMenu(!menu)     
                                            }}
                                            className=' text-white cursor-pointer p-2 border-b '>{item}</p>
                                    }
                                })}
                            </div>
                        </form>

                    </div>
                    <ul className="flex flex-col p-1 px-3  mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0  bg-gray-800 md:bg-gray-900 border   border-gray-600 rounded-lg">
                        {regions.map(region =>
                            <li key={region}

                                onClick={() => {
                                    setSearch(region)
                                    setMenu(!menu)
                                }}

                                className={`block py-2 px-3 ${search === region ? "text-blue-600" : "text-gray-300"} rounded   md:p-0 md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent cursor-pointer`}>
                                {region}
                            </li>
                        )}


                    </ul>
                </div>
            </div>
        </nav>

    )
}


