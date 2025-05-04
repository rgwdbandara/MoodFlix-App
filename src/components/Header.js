import React, { useEffect, useState } from 'react'
import { href, Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import userIcon from '../assets/user.png'
import { IoSearchOutline } from 'react-icons/io5';
import { navigation } from '../contant/navigation';

const Header = () => {
    const location = useLocation()
    const removeSpace = location?.search?.slice(3)?.split("%20")?.join("")
    const [searchInput, setSearchInput] = useState(removeSpace)
    const navigate = useNavigate()
    
    console.log("location",)

    useEffect(() => {
        if(searchInput){
            navigate(`/search?q=${searchInput}`) 
        }
       
    }, [searchInput])

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <header className='fixed top-0 z-40 w-full h-16 bg-black bg-opacity-50'>
            <div className='container flex items-center h-full px-3 mx-auto'>
                <Link to={"/"}>
                    <div>
                        <h1 className="text-[25px] font-bold text-red-700 h-full flex items-center mr-8">MoodFlix</h1>
                    </div>
                </Link>
               

               
                <nav className='items-center hidden gap-3 ml-5 lg:flex'>
                    {
                        navigation.map((nav, index) => {
                            return (
                                <div key={index}>
                                    <NavLink to={nav.href}>
                                        {nav.label}
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </nav>
                <div className='flex items-center gap-5 ml-auto'>
                    <form className='flex items-center gap-2' onSubmit={handleSubmit}>
                        <input
                            type='text'
                            placeholder='Search...'
                            className='px-4 py-0 bg-transparent border-none outline-none hidden-lg:block'
                            onChange={(e) => setSearchInput(e.target.value)}
                            value={searchInput}
                        />
                        <button className='text-2xl text-white'>
                            <IoSearchOutline />
                        </button>
                    </form>
                    <div className='h-8 overflow-hidden transition-all rounded-full cursor-pointer w-9 active:scale-50'>
                        <img
                            src={userIcon}
                            alt="User Icon" 
                            className='w-10 h-10'
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header