import { useState } from 'react';

import { ReactComponent as HamburgerIcon } from './../assets/icons/icon-hamburger.svg';
import { ReactComponent as CloseIcon } from './../assets/icons/icon-close.svg';
import { ReactComponent as Logo } from './../assets/icons/logo.svg';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const translateFunction = isOpen ? 'translate-y-0' : '-translate-y-full';
    const transitionTimingFunction = isOpen ? 'ease-out' : 'ease-in';

    const toggleNavHandler = () => {
        setIsOpen((prev) => !prev);
    };
    return (
        <header
            className='bg-transparent absolute top-0 left-0 z-20 flex md:gap-14
        pt-12 px-6 md:pt-16 md:px-16  w-full lg:w-3/5'
        >
            <button
                className='w-1/2 md:hidden'
                aria-label='open navigation icon'
                onClick={toggleNavHandler}
            >
                <HamburgerIcon />
            </button>
            <h1
                className='-translate-x-2/4 md:translate-x-0 grid place-items-center'
                aria-label='Logo of the company: ROOM'
            >
                <Logo />
            </h1>
            <div
                className={`fixed top-0 left-0 w-screen h-screen  bg-black opacity-50 md:hidden $ ${translateFunction} ${transitionTimingFunction} duration-300`}
            />
            <nav
                className={`fixed md:static h-28 md:h-auto top-0 left-0 right-0 px-6 md:px-0 sm:px-10 bg-white md:bg-transparent md:text-white  flex gap-16 sm:gap-24 md:gap-14 ${translateFunction} md:translate-y-0 ${transitionTimingFunction} duration-500`}
            >
                <button
                    className='md:hidden'
                    aria-label='close navigation icon'
                    onClick={toggleNavHandler}
                >
                    <CloseIcon />
                </button>
                <ul className='flex w-full justify-between items-center md:gap-8'>
                    <li>
                        <a href='/'>home</a>
                    </li>
                    <li>
                        <a href='/'>shop</a>
                    </li>
                    <li>
                        <a href='/'>about</a>
                    </li>
                    <li>
                        <a href='/'>contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
