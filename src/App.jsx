import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/Herosection';
import Card from './components/Card';
import bar from './assets/bar.png';
import car from './assets/car.png';
import together from './assets/together.png';
import Footer from './components/Footer';
import Accordion from './components/Accordino';
import SmoothScrollProvider from './components/SmmothScrollComponent';
import imagee from './assets/imagee.jpg';
function App() {
  return (
    <SmoothScrollProvider>
      <div>
        <Navbar className="fade-in" />
        <HeroSection className="fade-in" />
        <div className="fade-in min-h-screen bg-gray-100 flex flex-col sm:flex-row justify-between items-center sm:px-8 px-4 py-6">
          <div className="w-full sm:w-1/2">
            <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left px-4 sm:px-8 pt-4">
              Who we are
            </h1>
            <p className="text-lg leading-relaxed text-gray-700 font-serif">
              At <span className="font-bold text-fuchsia-900">Vijayvergiya Law Group</span>, we pride
              ourselves on delivering exceptional legal services that extend beyond boundaries.
            </p>
          </div>
          <div className="w-full sm:w-1/2 flex justify-center sm:justify-end mt-6 sm:mt-0">
            <img className="fade-in w-3/4 sm:w-2/3 rounded-lg" src={imagee} alt="Representation" />
          </div>
        </div>
        <Footer className="fade-in" />
      </div>
    </SmoothScrollProvider>
  );
}

export default App;
