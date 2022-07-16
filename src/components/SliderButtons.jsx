import { ReactComponent as IconAngleRight } from './../assets/icons/icon-angle-right.svg';
import { ReactComponent as IconAngleLeft } from './../assets/icons/icon-angle-left.svg';

function SliderButtons({ next, prev }) {
    return (
        <>
            <button
                className='w-14 lg:w-20 h-14 lg:h-20 bg-black hover:bg-darkGray focus:outline-yellow-400  grid place-items-center transition'
                aria-label='previous slide'
                onClick={prev}
            >
                <IconAngleLeft />
            </button>
            <button
                className='w-14 lg:w-20 h-14 lg:h-20 bg-black hover:bg-darkGray focus:outline-yellow-400 grid place-items-center transition'
                aria-label='next slide'
                onClick={next}
            >
                <IconAngleRight />
            </button>
        </>
    );
}

export default SliderButtons;
