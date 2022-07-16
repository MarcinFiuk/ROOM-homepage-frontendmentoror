import { useState, useEffect } from 'react';

import { ReactComponent as ArrowRight } from './../assets/icons/icon-arrow.svg';
import { heroData } from '../data/heroData';
import SliderButtons from './SliderButtons';

function Hero() {
    const [slideIndex, setSlideIndex] = useState(1);
    const [slideArr, setSlideArr] = useState([]);
    const [stopTransition, setStopTransition] = useState(false);

    useEffect(() => {
        const heroDataClone = [...heroData];
        heroDataClone.unshift(heroDataClone[heroDataClone.length - 1]);
        heroDataClone.push(heroDataClone[1]);
        setSlideArr(heroDataClone);
    }, []);

    useEffect(() => {
        // first delay must to match duration time assigned to slider wrapper
        if (slideIndex === 0) {
            setTimeout(() => {
                setStopTransition(true);
                setSlideIndex(slideArr.length - 2);
            }, 200);
            setTimeout(() => {
                setStopTransition(false);
            }, 300);
        }

        if (slideIndex === slideArr.length - 1) {
            setTimeout(() => {
                setStopTransition(true);
                setSlideIndex(1);
            }, 200);
            setTimeout(() => {
                setStopTransition(false);
            }, 300);
        }
    }, [slideIndex]);

    const prevSlideHandler = () => {
        setSlideIndex((prev) => prev - 1);
    };

    const nextSlideHandler = () => {
        setSlideIndex((prev) => prev + 1);
    };

    const SliderButtonsUpdated = (
        <SliderButtons next={nextSlideHandler} prev={prevSlideHandler} />
    );

    const photoSlider = slideArr.map((slide, index) => {
        const { mobilePhoto, desktopPhoto, alt } = slide;
        return (
            <div key={index} className='relative w-full shrink-0'>
                <div
                    className={`absolute top-0 left-0 w-full h-full bg-black opacity-0 md:opacity-20  `}
                />
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
        const { title, desc } = slide;
        return (
            <div
                key={index}
                className='px-8 lg:px-14 xl:px-24 py-18 lg:py-0 lg:pb-4 xl:pb-0 w-full shrink-0'
            >
                <h2 className='text-3xl lg:text-4xl font-semibold tracking-negative04 leading-8'>
                    {title}
                </h2>
                <p className='mt-3.5 font-medium text-xs md:text-base lg:text-xs leading-5 text-darkGray'>
                    {desc}
                </p>
                <a
                    href='/'
                    className='inline-block uppercase landing-4 font-medium text-xs tracking-extraBig mt-13 hover:text-darkGray'
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
            <div className='flex flex-col lg:flex-row '>
                <div className='relative overflow-hidden lg:w-[58.4%]'>
                    <div
                        style={{
                            transform: `translateX(-${slideIndex * 100}%)`,
                        }}
                        className={`flex ease-linear  ${
                            stopTransition ? 'transition-none' : 'duration-200'
                        }`}
                    >
                        {photoSlider}
                    </div>
                    <div className='flex absolute bottom-0 right-0 lg:hidden'>
                        {SliderButtonsUpdated}
                    </div>
                </div>
                <div className='relative overflow-hidden lg:w-[41.6%]'>
                    <div
                        style={{
                            transform: `translateX(-${slideIndex * 100}%)`,
                        }}
                        className={`flex lg:min-h-full items-center ease-linear ${
                            stopTransition ? 'transition-none' : 'duration-200'
                        }`}
                    >
                        {descriptionsSlider}
                    </div>
                    <div className=' absolute bottom-0 left-0 hidden lg:flex'>
                        {SliderButtonsUpdated}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
