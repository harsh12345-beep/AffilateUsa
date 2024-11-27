import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/Herosection';
import Card from './components/Card';
import bar from './assets/bar.png';
import car from './assets/car.png';
import together from './assets/together.png';
import Footer from './components/Footer';
import Accordion from './components/Accordino';
import SmoothScrollComponent from './components/SmmothScrollComponent';
import imagee from './assets/imagee.jpg';

function App() {
  const [language, setLanguage] = React.useState('English');

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    console.log('Language changed to:', newLanguage);
  };

  return (
    // <SmoothScrollComponent>
      <div>
        <TopBar onLanguageChange={handleLanguageChange} currentLanguage={language} />
        <Navbar />
        <HeroSection />
        <div className="flex flex-col sm:flex-row bg-gray-100 justify-between items-center sm:px-8 px-4 py-6">
          <div className="w-full sm:w-1/2">
            <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left px-4 sm:px-8 pt-4">
              Who we are
            </h1>
            <div className="px-4 sm:px-6 py-4 sm:py-8">
              <p className="text-lg leading-relaxed text-gray-700 font-serif">
                At <span className="font-bold text-fuchsia-900">Vijayvergiya Law Group</span>, we pride
                ourselves on delivering exceptional legal services that extend beyond boundaries.
              </p>
              {/* More content */}
            </div>
          </div>
          <div className="w-full sm:w-1/2 flex justify-center sm:justify-end mt-6 sm:mt-0">
            <img className="w-3/4 sm:w-2/3 rounded-lg" src={imagee} alt="Representation of collaboration" />
          </div>
        </div>

        <div className="bg-slate-300 pt-8">
          <h2 className="flex justify-center text-4xl font-semibold font-serif pt-6 tracking-wide">Our Values</h2>
          <div className="flex sm:justify-evenly pt-4 sm:flex-row space-x-4 flex-col space-y-6 px:4 items-center pb-14">
            <Card
              image={car}
              title="Client Centric"
              text="At Vijayvergiya Law Group, we adopt a client-centric approach. Our commitment tailored legal solutions."
            />
            <Card
              image={together}
              title="Expert Opinion"
              text="When it comes to immigrating to the United States, our clients can rely on the proficient viewpoint."
            />
            <Card
              image={bar}
              title="Speed and Agility"
              text="Vijayvergiya Law Group amalgamates celerity and dexterity to furnish proficient legal remedies."
            />
          </div>
        </div>

        <div className="bg-[#EFEAE3] pt-20">
          <h2 className="flex justify-center text-4xl font-semibold font-serif pt-6 tracking-wide pb-8">Why Us</h2>
          <Accordion />
        </div>

        <Footer />
      </div>
    // </SmoothScrollComponent>
  );
}

export default App;
