import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaSearch, FaRegBell } from 'react-icons/fa';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header className={`${isScrolled && 'bg-zinc-900'}`}>
            <div className="flex items-center space-x-2 md:space-x-10">
                <img src="https://rb.gy/ulxxee" alt="" width={100} height={100} className="cursor-pointer object-contain" />

                <ul className="hidden space-x-4 md:flex">
                    <li className="headerLink">Home</li>
                    <li className="headerLink">TV Shows</li>
                    <li className="headerLink">Movies</li>
                    <li className="headerLink">New & Features</li>
                    <li className="headerLink">My List</li>
                </ul>
            </div>

            <div className="flex items-center space-x-4 text-base font-medium">
                <FaSearch className="hidden h-4 w-4 sm:inline" />
                <p className="hidden lg:inline">Kids</p>
                <FaRegBell className="h-4 w-4" />
                <Link href="/accounts">
                    <img 
                        src="https://rb.gy/g1pwyx"
                        alt=""
                        className="cursor-pointer rounded"
                    />
                </Link>
            </div>
        </header>
    )
}

export default Header