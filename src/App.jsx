
import './App.css'
import Navbar from './components/Navbar' 
import HeroSection from './components/Herosection'
import Card from './components/Card'
import bar from './assets/bar.png'
import car from './assets/car.png'
import together from './assets/together.png'
import Whyus from './components/Whyus'
import imagee from './assets/imagee.jpg'
import Footer from './components/Footer'
function App() {
  return(
    <>
     <Navbar />
    <HeroSection />
    <div className="flex flex-col sm:flex-row bg-gray-100 justify-between items-center sm:px-8 px-4 py-6">
  <div className="w-full sm:w-1/2">
    <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left px-4 sm:px-8 pt-4">
      Who we are
    </h1>
    <div className="px-4 sm:px-6 py-4 sm:py-8">
      <p className="text-lg leading-relaxed text-gray-700 font-serif">
        At <span className="font-bold text-fuchsia-900">Vijayvergiya Law Group</span>, we pride ourselves on delivering exceptional legal services that extend beyond boundaries. With a strong presence in the <span className="font-semibold text-gray-900">United States</span> and <span className="font-semibold text-gray-900">India</span>, we act as a link between these two jurisdictions. We are distinguished by our commitment to clients, meticulous proficiency, dedication to client welfare, and an international outlook, enabling us to cater to the legal requirements of our clients with unparalleled accuracy.
      </p>
      <p className="mt-6 text-lg leading-relaxed text-gray-700 font-serif">
        Our experienced team is dedicated to offering comprehensive and creative solutions by leveraging the diverse legal traditions of the United States and India. We assist our clients throughout the process of immigrating or setting up businesses. Be it requiring advice on complex international transactions or needing assistance navigating local regulations, we support our clients with the same zeal.
      </p>
    </div>
  </div>
  <div className="w-full sm:w-1/2 flex justify-center sm:justify-end mt-6 sm:mt-0">
    <img className="w-3/4 sm:w-2/3 rounded-lg" src={imagee} alt="Representation of collaboration" />
  </div>
</div>

    <div className='bg-slate-300 pt-8'>
    <h2 className='flex justify-center text-4xl font-semibold font-serif pt-6 tracking-wide'>Our Values</h2>
  <div className='flex sm:justify-evenly pt-4 sm:flex-row space-x-4  flex-col space-y-6 px:4 items-center pb-14'>

  <Card 
    image={car}
    title="Client Centric"
    text="At Vijayvergiya Law Group, we adopt a client-centric approach. Our commitment  tailored legal solutions to meet the specific requirements of our clients. You can reach out to our office to get clarity on the process or to arrange a consultation with our attorneys."
    />
      <Card 
    image={together}
    title="Expert Opinion"
    text="When it comes to immigrating to the United States, our clients can rely on the proficient viewpoint of our attorneys with substantial experience. Arrange a consultation to receive tailored direction for your immigration needs so that they can be expedited."
    />
      <Card 
    image={bar}
    title="Speed and Agility"
    text="Vijayvergiya Law Group amalgamates celerity and dexterity to furnish proficient legal remedies customized to your requisites. We encourage you to contact us promptly for matters that demand swift and timely resolutions."
    />
  </div>
    </div>

    <div className='bg-[#EFEAE3] pt-20'>
     <h2 className='flex justify-center text-4xl font-semibold font-serif pt-6 tracking-wide'>Our Values</h2>
    </div>
    <Whyus/>
    <Footer/>
    </>
  )
}

export default App
