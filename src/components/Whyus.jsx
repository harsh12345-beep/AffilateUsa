import React, { useState } from 'react';

// Define the Card component
const Card = ({ title, content }) => {
    return (
      <div
        className="max-w-sm rounded-lg shadow-2xl border bg-cover border-gray-200 group relative overflow-hidden transition-all duration-300"
        style={{ height: '200px' }} // Fixed height for the card
      >
        <div className="px-6 py-4">
          <div className="font-extrabold text-2xl mb-2 text-center tracking-wide">{title}</div>
          <div
            className="font-extrabold  overflow-auto" // Make content scrollable
         
          >
            <p>{content}</p>
          </div>
        </div>
      </div>
    );
  };
  

// Whyus Component
const Whyus = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track which item is hovered

  const items = [
    {
      title: 'Quality and Excellence',
      card: <Card   content="Vijayvergiya Law Group consistently maintains the highest standards of quality and excellence in its legal practice. Our steadfast commitment to providing exceptional service and achieving favorable outcomes sets us apart as a reliable option. Clients can depend on our competence and unwavering dedication to excellence in all aspects of their legal representation." />
    },
    {
      title: 'Transparent Communication',
      card: <Card content="Vijayvergiya Law Group places great importance on maintaining open and transparent communication with its clients. Throughout their legal journey, clients are kept informed at every stage, with attorneys readily available to address any queries or concerns they may have. This unwavering dedication to clear and ongoing dialogue ensures that clients feel fully supported and well-informed throughout their immigration process" />
    },
    {
      title: 'Personalized Solutions',
      card: <Card content="Vijayvergiya Law Group is renowned for its exceptional ability to offer personalized legal remedies. We acknowledge the distinctiveness of each client's circumstances and endeavor to create tailored solutions. Our comprehensive and customized guidance in areas such as family immigration, employment-based visas, business immigration, consular processing, and deportation defense instills trust and confidence in clients, aligning with their specific needs and aspirations." />
    },
    {
      title: 'Results-Oriented',
      card: <Card content="Vijayvergiya Law Group is steadfastly dedicated to a results-driven approach, tirelessly striving to attain optimal outcomes for its clientele. Our legal methodologies are not merely theoretical but rather pragmatic, with a focus on achieving success in immigration cases, thereby ensuring our clients' peace of mind and contentment with our services." />
    },
  ];

  const handleMouseEnter = (index) => {
    setHoveredIndex(index); // Update the hovered item index
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null); // Reset hovered item index
  };

  return (
    <div id="page3" className="min-h-screen bg-[#EFEAE3] p-[4vw]">
      <div id="elem-container" className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative h-[150px] w-full border-b border-[#38383864] overflow-visible flex items-center px-[2vw] group"
            onMouseEnter={() => handleMouseEnter(index)} // Hover to show card
            onMouseLeave={handleMouseLeave} // Remove hover effect
          >
            <div
              className={`absolute top-0 right-[32px] transition-all duration-300 transform ${
                hoveredIndex === index
                  ? 'opacity-100 translate-y-0 scale-100 z-30 bg-[#f0e68c]' // Change background on hover
                  : 'opacity-0 translate-y-[-100%] scale-90 z-10'
              }`}
              style={{ width: '100%', maxWidth: '400px' }} // Ensure the card doesn't get cut off
            >
              {item.card}
            </div>
            <h2 className="font-extrabold text-[3vw] relative z-10 text-center tracking-wide">
              {item.title}
            </h2>
          </div>
        ))}
      </div>


      
    </div>
  );
};

export default Whyus;
