import React from 'react';
import '../../styles/RestaurantCards.css';
import { Link } from 'react-router-dom';


function RestaurantCard({ name }) {
  return (
    <Link to="/menu">
    <button className="restaurant-card">
    <h2>{name} <span className="arrow">&rsaquo;</span></h2>
  </button>
  </Link>

  );
}

function App() {
  return (
    <div className="app">
      <div className="restaurant-set">
        <RestaurantCard name="Agra Restaurant" />
        <RestaurantCard name="Alappuzha Restaurants" />
        <RestaurantCard name="Amristar Restaurants" />
        <RestaurantCard name="Bhopal Restaurants" />
        <RestaurantCard name="Chennai Restaurants" />
        <RestaurantCard name="Darjeeling Restaurants" />
        <RestaurantCard name="Gorakhpur Restaurants" />
        <RestaurantCard name="Gwalior Restaurants" />
        <RestaurantCard name="Indoor Restaurants" />
        <RestaurantCard name="Jalandhar Restaurants" />
        <RestaurantCard name="Jamshedpur Restaurants" />
        <RestaurantCard name="Junagadh Restaurants" />
        <RestaurantCard name="Khamgaon Restaurants" />
        <RestaurantCard name="Kolhapur Restaurants" />
        <RestaurantCard name="Lucknow Restaurants" />
        <RestaurantCard name="Manali Restaurants" />
        <RestaurantCard name="Meerut Restaurants" />
        <RestaurantCard name="Mysore Restaurants" />
        <RestaurantCard name="Nashik Restaurants" />
        <RestaurantCard name="Palakkad Restaurants" />
        <RestaurantCard name="Puducherry Restaurants" />
        <RestaurantCard name="Raipur Restaurants" />
        <RestaurantCard name="Rishikesh Restaurants" />
        <RestaurantCard name="Siliguri Restaurants" />
        <RestaurantCard name="Thrissur Restaurants" />
        <RestaurantCard name="Trivandrum Restaurants" />
        <RestaurantCard name="Varanasi Restaurants" />
        {/* <RestaurantCard name="Visakhapatnam Restaurants" /> */}
      </div>

      <div className="restaurant-set">
        <RestaurantCard name="Alahabad Restaurants" />
        <RestaurantCard name="Auranagabad Restaurants" />
        <RestaurantCard name="Bhubaneswar Restaurants" />
        <RestaurantCard name="Coimbatore Restaurants" />
        <RestaurantCard name="Deharadun Restaurants" />
        <RestaurantCard name="Gangtok Restaurants" />
        <RestaurantCard name="Guntur Restaurants" />
        <RestaurantCard name="Haridwar Restaurants" />
        <RestaurantCard name="Jabalpur Restaurants" />
        <RestaurantCard name="Jammu Restaurants" />
        <RestaurantCard name="Jhansi Restaurants" />
        <RestaurantCard name="Kanpur Restaurants" />
        <RestaurantCard name="Kharagpur Restaurants" />
        <RestaurantCard name="Kolkata Restaurants" />
        <RestaurantCard name="Ludhiana Restaurants" />
        <RestaurantCard name="Mangalore Restaurants" />
        <RestaurantCard name="Mumbai Restaurants" />
        <RestaurantCard name="Nagpur Restaurants" />
        <RestaurantCard name="Neemrana Restaurants" />
        <RestaurantCard name="Patiala Restaurants" />
        <RestaurantCard name="Pune Restaurants" />
        <RestaurantCard name="Rajkot Restaurants" />
        <RestaurantCard name="Salem Restaurants" />
        <RestaurantCard name="Srinagar Restaurants" />
        <RestaurantCard name="Tirupati Restaurants" />
        <RestaurantCard name="Udaipur Restaurants" />
        <RestaurantCard name="Vellore Restaurants" />
      </div>

      <div className="restaurant-set">
        <RestaurantCard name="Amaravati Restaurants" />
        <RestaurantCard name="Bengaluru Restaurants" />
        <RestaurantCard name="Chandigarh Restaurants" />
        <RestaurantCard name="Cuttack Restaurants" />
        <RestaurantCard name="Delhi NCR Restaurants" />
        <RestaurantCard name="Goa Restaurants" />
        <RestaurantCard name="Guwahati Restaurants" />
        <RestaurantCard name="Hyderabad Restaurants" />
        <RestaurantCard name="Jaipur Restaurants" />
        <RestaurantCard name="Jamnagar Restaurants" />
        <RestaurantCard name="Jodhpur Restaurants" />
        <RestaurantCard name="Khajuraho Restaurants" />
        <RestaurantCard name="Kochi Restaurants" />
        <RestaurantCard name="Kota Restaurants" />
        <RestaurantCard name="Madurai Restaurants" />
        <RestaurantCard name="Manipal Restaurants" />
        <RestaurantCard name="Mussoorie Restaurants" />
        <RestaurantCard name="Ooty Restaurants" />
        <RestaurantCard name="Patna Restaurants" />
        <RestaurantCard name="Pushkar Restaurants" />
        <RestaurantCard name="Ranchi Restaurants" />
        <RestaurantCard name="Shimla Restaurants" />
        <RestaurantCard name="Surat Restaurants" />
        <RestaurantCard name="Trichy Restaurants" />
      </div>

    </div>
  );
}

export default App;
