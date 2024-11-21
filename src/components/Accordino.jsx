import React, { useState } from "react";

const Accordion = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  return (
    <div id="accordion" className="w-full max-w-md mx-auto mt-4">
      {/* Accordion Item 1 */}
      <div className="border-b">
        <button
          onClick={() => toggleAccordion(1)}
          className="flex items-center justify-between w-full p-4 text-left text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <span className="text-sm md:text-base">Transparent Communication</span>
          <svg
            className={`w-4 h-4 transform ${
              openAccordion === 1 ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            openAccordion === 1 ? "max-h-40" : "max-h-0"
          }`}
        >
          <div className="p-4 text-gray-600 dark:text-gray-400 text-sm">
            Vijayvergiya Law Group places great importance on maintaining open
            and transparent communication with its clients. Throughout their
            legal journey, clients are kept informed at every stage, with
            attorneys readily available to address any queries or concerns they
            may have. This dedication ensures that clients feel fully supported
            throughout their immigration process.
          </div>
        </div>
      </div>

      {/* Accordion Item 2 */}
      <div className="border-b">
        <button
          onClick={() => toggleAccordion(2)}
          className="flex items-center justify-between w-full p-4 text-left text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <span className="text-sm md:text-base">Quality and Excellence</span>
          <svg
            className={`w-4 h-4 transform ${
              openAccordion === 2 ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            openAccordion === 2 ? "max-h-40" : "max-h-0"
          }`}
        >
          <div className="p-4 text-gray-600 dark:text-gray-400 text-sm">
            Vijayvergiya Law Group consistently maintains the highest standards
            of quality and excellence in its legal practice. Clients can depend
            on our competence and dedication to achieving favorable outcomes in
            all aspects of their legal representation.
          </div>
        </div>
      </div>

      {/* Accordion Item 3 */}
      <div className="border-b">
        <button
          onClick={() => toggleAccordion(3)}
          className="flex items-center justify-between w-full p-4 text-left text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <span className="text-sm md:text-base">Personalized Solutions</span>
          <svg
            className={`w-4 h-4 transform ${
              openAccordion === 3 ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            openAccordion === 3 ? "max-h-40" : "max-h-0"
          }`}
        >
          <div className="p-4 text-gray-600 dark:text-gray-400 text-sm">
            Vijayvergiya Law Group offers personalized legal remedies. Each
            client receives tailored solutions to meet their specific needs,
            ensuring trust and confidence in our services.
          </div>
        </div>
      </div>

      {/* Accordion Item 4 */}
      <div className="border-b">
        <button
          onClick={() => toggleAccordion(4)}
          className="flex items-center justify-between w-full p-4 text-left text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <span className="text-sm md:text-base">Result-Oriented</span>
          <svg
            className={`w-4 h-4 transform ${
              openAccordion === 4 ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            openAccordion === 4 ? "max-h-40" : "max-h-0"
          }`}
        >
          <div className="p-4 text-gray-600 dark:text-gray-400 text-sm">
            Vijayvergiya Law Group is dedicated to a results-driven approach,
            striving for optimal outcomes in immigration cases to ensure client
            satisfaction and peace of mind.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
