import { ReactComponent as HamburgerIcon } from './../assets/icons/icon-hamburger.svg';
import { ReactComponent as CloseIcon } from './../assets/icons/icon-close.svg';
import { ReactComponent as Logo } from './../assets/icons/logo.svg';

function Header() {
    return (
        <header className='bg-gray-700'>
            <button>
                <HamburgerIcon />
            </button>
            <h1>
                <Logo />
            </h1>
            <nav>
                <button>
                    <CloseIcon />
                </button>
                <ul>
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
        //
        //     <button class="mobile-nav-toggle" aria-controls="primary-navigation"><span class="sr-only" aria-expanded="false">Menu</span></button>
        //     <nav>
        //         <ul id="primary-navigation" data-visible="false" class="primary-navigation underline-indicators flex">
        //             <li class="active"><a class="ff-sans-cond uppercase text-white letter-spacing-2" href="index.html"><span aria-hidden="true">00</span>Home</a>
        //             <li><a class="ff-sans-cond uppercase text-white letter-spacing-2" href="destination.html"><span aria-hidden="true">01</span>Destination</a>
        //             <li><a class="ff-sans-cond uppercase text-white letter-spacing-2" href="crew.html"><span aria-hidden="true">02</span>Crew</a>
        //             <li><a class="ff-sans-cond uppercase text-white letter-spacing-2" href="technology.html"><span aria-hidden="true">03</span>Technology</a>
        //         </ul>
        //     </nav>
        //   </header>
    );
}

export default Header;
