import  { useState } from 'react';
import {  Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import Navbar from './Navbar';
import { PartyPopper, Cake, BellRing } from 'lucide-react';
import Footer from './Footer';
// import ImageSliderforAds from './ads';

const Home = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const [query, setQuery] = useState('');
  // const [results, setResults] = useState([]);
  // const [image, setimage] = useState([])
  // const [link, setlink] = useState([])


 
   
    useEffect(() => {
       const isOnlyPath = !location.search && !location.hash;
       const isNotHome = location.pathname !== "/";
   
       if (isOnlyPath && isNotHome) {
         navigate("/"); // redirect to home
       }
    }, [location, navigate]);
  

    // useEffect(() => {
    //  if (query.trim().length === 0) {
    //      setResults([]); // Clear results when input is empty
    //      return;
    //    }
    //    const fetchData = async () => {
    //      const res = await axios.get(`http://localhost:5001/api/search?q=${query}`);
    //      setResults(res.data);
   
    //      console.log(results)
    //    };
   
    //    fetchData();
    // }, [query]);
   
  //  const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (!query.trim()) return;

  //     if(results) {
  //       {
  //         Array.isArray(results) && results.map((item) => {
  //           navigate(`/search?R=${encodeURIComponent(item.name)}`);
  //           setResults('');
  //       })}
  //     }
  //     if(results.length === 0){
  //       navigate(`/search?R=${encodeURIComponent(query)}`);
  //       setResults('');
  //     }

  //   };
   
    // const tosearch = (result) => {
    //        navigate(`/search?R=${encodeURIComponent(result)}`);
    //        setResults([])
    // }

  //   const getdata = async() => {
  //   const res = await axios.get('http://localhost:5001/api/owner/getdata',
  //       {withCredentials: true})
  //       const images = res.data.map(item => item.image);
  //       const links = res.data.map(item => item.link);
  //       setimage(images)
  //       setlink(links)

  // }

  // useEffect(() => {

  //   getdata();
  // },[])


  return (
    <>
      <Navbar />
      <div>
      {/* Hero Section */}
      <section className="relative bg-gray-800">
        <div className="absolute inset-0">
           {/* <img src="https://placehold.co/1600x900/1f2937/ffffff?text=Grand+Event" className="w-full h-full object-cover opacity-30" alt="Event background"/> */}
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Plan Your Perfect Event in <span className="text-indigo-400">Bangalore</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
            Discover and book the city's top-rated event organizers for any occasion.
          </p>
          <div className="mt-8">
            <Link to="/explore">
              <button className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-indigo-700 transition-transform hover:scale-105">
                Explore Planners
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Whatever the Occasion, We've Got You</h2>
            <p className="text-gray-500 mb-12">From intimate gatherings to grand celebrations.</p>
            <div className="grid grid-cols-3 gap-8 ">
                <div className="flex flex-col items-center">
                  <Link to={'events?category=birthday'} >
                    <div className="bg-pink-100 p-6 rounded-full">
                        <Cake className="h-12 w-12 text-pink-600" />
                    </div>
                    <h3 className="mt-4 font-semibold text-lg">Birthdays</h3>
                  </Link>
                </div>
                <div className="flex flex-col items-center">
                  <Link to={'events?category=wedding'} >
                    <div className="bg-purple-100 p-6 rounded-full">
                        <BellRing className="h-12 w-12 text-purple-600" />
                    </div>
                    <h3 className="mt-4 font-semibold text-lg">Weddings</h3>
                  </Link>
                </div>
                 <div className="flex flex-col items-center">
                  <Link to={'events?category=houseParties'} >
                    <div className="bg-green-100 p-6 rounded-full">
                        <PartyPopper className="h-12 w-12 text-green-600" />
                    </div>
                    <h3 className="mt-4 font-semibold text-lg">House Parties</h3>
                  </Link>
                </div>
            </div>
        </div>
      </section>

    </div>

      <Footer />
                

  </>
  )}

export default Home;