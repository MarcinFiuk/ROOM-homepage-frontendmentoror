import { photos } from './../data/photos';
function About() {
    return (
        <section className='flex flex-col lg:flex-row '>
            <div className=' lg:w-1/3 xl:w-30%'>
                <img src={photos.about[0]} alt='' className='w-full' />
            </div>
            <div className='  lg:w-1/3 xl:w-2/5  py-14 px-8 lg:px-12 lg:py-0 lg:self-center'>
                <h3 className='font-bold text-xs leading-6 text-justify tracking-positive42'>
                    ABOUT OUR FURNITURE
                </h3>
                <p className='font-medium text-xs leading-5 tracking-tight text-darkGray mt-2'>
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
                <img src={photos.about[1]} alt='' className='w-full' />
            </div>
        </section>
    );
}

export default About;
