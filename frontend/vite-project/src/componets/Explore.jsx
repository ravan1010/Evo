// src/pages/Explore.jsx
import React, { useEffect, useState } from 'react';
import OrganizerCard from './OrganizerCard';
// import { SlidersHorizontal } from 'lucide-react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';

const Explore = () => {
  const [organizersData, setorganizersData] = useState([])
  const [filters, setFilters] = useState({
    Eventcategory: 'All',
    cityTown: '',
    budget: 1000000,
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const fetchEventData = async() => {
  try {
    const res = await axios.get('http://localhost:5001/api/explore', { withCredentials: true });
    setorganizersData(res.data);
    console.log(res.data);
  } catch (error) {
    console.error("Error fetching event data:", error);
  }
  };

  useEffect(() => {
    fetchEventData();
  }, []);
  

  const filteredOrganizers = organizersData.filter(org => {
    const eventMatch = filters.Eventcategory === 'All' ? true : org.Eventcategory.includes(filters.Eventcategory);
    const locationMatch = filters.cityTown ? org.cityTown.toLowerCase().includes(filters.cityTown.toLowerCase()) : true;
    // const budgetMatch = org.price 
    return eventMatch && locationMatch 
  });
  
  const Eventcategorys = ['All', 'birthday', 'wedding'];

  return (
    <>
    <Navbar />
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Explore Event Planners</h1>
        <p className="text-gray-600 mb-8">Find the perfect match for your celebration in Bangalore.</p>

        {/* Filter Bar */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Event Type Filter */}
            <div>
              <label htmlFor="Eventcategory" className="block text-sm font-medium text-gray-700">Event Type</label>
              <select name="Eventcategory" id="Eventcategory" value={filters.Eventcategory} onChange={handleFilterChange} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                {Eventcategorys.map(type => <option key={type}>{type}</option>)}
              </select>
            </div>
            {/* Location Filter */}
            <div>
              <label htmlFor="cityTown" className="block text-sm font-medium text-gray-700">Location</label>
              <input type="text" name="cityTown" id="cityTown" value={filters.cityTown} onChange={handleFilterChange} placeholder="e.g., Koramangala" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
            {/* Budget Filter */}
            {/* <div className="md:col-span-1">
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700">Max Budget: ₹{Number(filters.budget).toLocaleString('en-IN')}</label>
              <input type="range" id="budget" name="budget" min="25000" max="1000000" step="25000" value={filters.budget} onChange={handleFilterChange} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 mt-2" />
            </div> */}
          </div>
        </div>

        {/* Results */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">{filteredOrganizers.length} Planners Found</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredOrganizers.map(organizer => (
              <OrganizerCard key={organizer._id} organizer={organizer} />
            ))}
          </div>
           {filteredOrganizers.length === 0 && (
            <div className="text-center py-16">
                <p className="text-gray-600 text-lg">No planners match your criteria. Try adjusting your filters!</p>
            </div>
           )}
        </div>
      </div>
    </div>
    <Footer />
  </>
  );
};

export default Explore;