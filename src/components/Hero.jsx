import { ReactComponent as ArrowRight } from './../assets/icons/icon-arrow.svg';
import { ReactComponent as IconAngleRight } from './../assets/icons/icon-angle-right.svg';
import { ReactComponent as IconAngleLeft } from './../assets/icons/icon-angle-left.svg';
import { photos } from './../data/photos';

function Hero() {
    return (
        <section className='flex flex-col lg:flex-row '>
            <div className='relative lg:w-3/5 '>
                <img
                    src={photos.hero.mobile[0]}
                    className='w-full h-full'
                    alt=''
                ></img>
                <div className='flex absolute bottom-0 right-0 lg:right-auto lg:left-full'>
                    <button className='w-14 h-14 bg-black grid place-items-center'>
                        <IconAngleLeft />
                    </button>
                    <button className='w-14 h-14 bg-black grid place-items-center'>
                        <IconAngleRight />
                    </button>
                </div>
            </div>
            <div className='px-8 py-18 lg:px-14 xl:px-24 lg:w-2/5 lg:self-center '>
                <h2 className='text-3xl lg:text-4xl font-semibold tracking-negative04 leading-8 '>
                    Discover innovative ways to decorate
                </h2>
                <p className='mt-3.5 font-medium text-xs md:text-base lg:text-xs leading-5 text-darkGray'>
                    We provide unmatched quality, comfort, and style for
                    property owners across the country. Our experts combine form
                    and function in bringing your vision to life. Create a room
                    in your own style with our collection and make your property
                    a reflection of you and what you love.
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
        </section>
    );
}

export default Hero;
