import { useState, useEffect } from 'react';

import { ReactComponent as ArrowRight } from './../assets/icons/icon-arrow.svg';
import { ReactComponent as IconAngleRight } from './../assets/icons/icon-angle-right.svg';
import { ReactComponent as IconAngleLeft } from './../assets/icons/icon-angle-left.svg';
import { heroData } from '../data/heroData';

function Hero() {
    const [slideIndex, setSlideIndex] = useState(0);
    const [slideArr, setSlideArr] = useState(null);

    useEffect(() => {
        const heroDataClone = [...heroData];
        heroDataClone.unshift(heroDataClone[heroDataClone.length - 1]);
        heroDataClone.push(heroDataClone[1]);
        setSlideArr(heroDataClone);
    }, []);

    if (!slideArr) {
        return;
    }

    const translatePhoto = `-translate-x-[${slideIndex * 100}%]`;
    console.log(translatePhoto);

    const prevSlideHandler = () => {
        setSlideIndex((prev) => prev - 1);
    };

    const nextSlideHandler = () => {
        setSlideIndex((prev) => prev + 1);
    };

    const photoSlider = slideArr.map((slide, index) => {
        const { id, mobilePhoto, desktopPhoto, alt } = slide;
        return (
            <div key={index} className='w-full shrink-0 '>
                <picture>
                    <source srcSet={desktopPhoto} media='(min-width: 1024px)' />
                    <img
                        src={mobilePhoto}
                        alt={alt}
                        className='w-full h-full'
                    />
                </picture>
            </div>
        );
    });

    const descriptionsSlider = slideArr.map((slide, index) => {
        const { id, title, desc } = slide;
        return (
            <div
                key={index}
                className='px-8 py-18 lg:px-14 xl:px-24 w-full lg:w-2/5 shrink-0 '
            >
                <h2 className='text-3xl lg:text-4xl font-semibold tracking-negative04 leading-8 '>
                    {title}
                </h2>
                <p className='mt-3.5 font-medium text-xs md:text-base lg:text-xs leading-5 text-darkGray'>
                    {desc}
                </p>
                <a
                    href='/'
                    className='inline-block uppercase landing-4 font-medium text-xs tracking-extraBig mt-13'
                >
                    shop now
                    <span className='inline-block align-middle ml-11'>
                        <ArrowRight />
                    </span>
                </a>
            </div>
        );
    });

    return (
        <section>
            <div className='flex flex-col '>
                <div className='relative  overflow-hidden'>
                    <div
                        className={`flex lg:w-3/5  ${translatePhoto} ease-linear duration-200`}
                    >
                        {photoSlider}
                    </div>
                    <div className='flex absolute bottom-0 right-0 lg:right-auto lg:left-full'>
                        <button
                            className='w-14 h-14 bg-black grid place-items-center'
                            aria-label='previous slide'
                            onClick={prevSlideHandler}
                        >
                            <IconAngleLeft />
                        </button>
                        <button
                            className='w-14 h-14 bg-black grid place-items-center'
                            aria-label='next slide'
                            onClick={nextSlideHandler}
                        >
                            <IconAngleRight />
                        </button>
                    </div>
                </div>
                <div className='flex overflow-hidden lg:w-2/5'>
                    {descriptionsSlider}
                </div>
            </div>
        </section>
    );
}

export default Hero;
