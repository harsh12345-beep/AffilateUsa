import React from 'react';

const Card = ({ image, title, text, tags }) => {
  return (
<div className="max-w-sm rounded-lg overflow-hidden shadow-2xl border border-gray-200 hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
  <img 
    className="w-20 h-20 rounded-full object-cover mx-auto mt-4" 
    src={image} 
    alt={title} 
  />
  <div className="px-6 py-4">
    <div className="font-extrabold text-2xl mb-2 text-center tracking-wide">{title}</div>
    <p className="text-gray-600 text-base leading-relaxed font-serif">
      {text}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    {tags && tags.map((tag, index) => (
      <span
        key={index}
        className="inline-block bg-fuchsia-100 text-fuchsia-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 shadow-sm">
        #{tag}
      </span>
    ))}
  </div>
</div>

  
  );
}

export default Card;
