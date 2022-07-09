import { ReactComponent as IconAngleRight } from './../assets/icons/icon-angle-right.svg';
import { ReactComponent as IconAngleLeft } from './../assets/icons/icon-angle-left.svg';

function SliderButtons({ next, prev }) {
    return (
        <>
            <button
                className='w-14 h-14 bg-black grid place-items-center'
                aria-label='previous slide'
                onClick={prev}
            >
                <IconAngleLeft />
            </button>
            <button
                className='w-14 h-14 bg-black grid place-items-center'
                aria-label='next slide'
                onClick={next}
            >
                <IconAngleRight />
            </button>
        </>
    );
}

export default SliderButtons;
