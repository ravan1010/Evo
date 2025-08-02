// src/components/OrganizerCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin } from 'lucide-react';

const OrganizerCard = ({ organizer }) => {
  
    const reversedID = organizer._id.split("").reverse().join(""); // => "tcaer"
    
    const onlandmark = (category) => {
      if(category === "adminlandmark"){
        return "onOwner" 
      }else if(category === "clientslandmark"){
        return "onYour"
      }
    }
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 group">
      <Link to={`/event?d=${reversedID}`}>
        <div className="relative">
          <img className="w-full h-56 object-cover" src={organizer.image} alt={organizer.name} />
          <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 m-2 rounded-full text-sm font-semibold">
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              {organizer.cityTown}
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 truncate">{organizer.name}</h3>
          <p className="text-gray-500 mt-1 h-10">{organizer.description}</p>
          <h1 className='font-bold text-3xl'>{organizer.companyName}</h1>
          <h3>{onlandmark(organizer.category)}</h3>
          <div className="flex items-center mt-3">
            <div className="flex items-center text-yellow-500">
              <Star size={20} fill="currentColor" />
              <span className="ml-1.5 text-gray-700 font-bold">{organizer.rating}</span>
            </div>
            <span className="ml-2 text-gray-500">({organizer.reviews} reviews)</span>
          </div>
          <p className="text-lg font-semibold text-gray-800 mt-4">{organizer.price}Rs</p>
        </div>
      </Link>
    </div>
  );
};

export default OrganizerCard;