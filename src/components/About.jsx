import darkChairs from './../assets/images/image-about-dark.jpg';
import whiteChair from './../assets/images/image-about-light.jpg';

function About() {
    return (
        <section className='flex flex-col lg:flex-row '>
            <div className=' lg:w-1/3 xl:w-30%'>
                <img
                    src={darkChairs}
                    alt='two black chairs'
                    className='w-full h-full'
                />
            </div>
            <div className='  lg:w-1/3 xl:w-2/5  py-14 px-8 lg:px-12 lg:py-6 lg:self-center'>
                <h3 className='font-bold text-xs md:text-2xl lg:text-xs leading-6 text-justify tracking-positive42'>
                    ABOUT OUR FURNITURE
                </h3>
                <p className='font-medium text-xs  md:text-lg lg:text-xs leading-5 tracking-tight text-darkGray mt-2'>
                    Our multifunctional collection blends design and function to
                    suit your individual taste. Make each room unique, or pick a
                    cohesive theme that best express your interests and what
                    inspires you. Find the furniture pieces you need, from
                    traditional to contemporary styles or anything in between.
                    Product specialists are available to help you create your
                    dream space.
                </p>
            </div>
            <div className=' lg:w-1/3 xl:w-30%'>
                <img
                    src={whiteChair}
                    alt='white chair'
                    className='w-full h-full'
                />
            </div>
        </section>
    );
}

export default About;
