import About from './components/About';
import Hero from './components/Hero';
import Header from './components/Header';

function App() {
    return (
        <>
            {/* <Header /> */}
            <main className='box-border font-Spartan max-w-4xl lg:max-w-1440 overflow-hidden mx-auto'>
                <Hero />
                <About />
            </main>
        </>
    );
}

export default App;
