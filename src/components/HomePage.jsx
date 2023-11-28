import React, { useState, useEffect } from 'react';
import TrailContainer from './TrailContainer';

function HomePage({ userLocation }) {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    // URL of your API request
    const apiUrl = `https://www.outdooractive.com/api/project/api-dev-oa/nearby/tour?location=${userLocation}&sortby=distance&radius=5000&limit=50&key=yourtest-outdoora-ctiveapi`;

    // Set the headers to accept JSON
    const headers = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',  // Optional: If you're sending data, set Content-Type
    });

    // Make the API request with the specified headers
    fetch(apiUrl, {
      method: 'GET',
      headers: headers
    })
      .then(response => response.json())
      .then(data => {
        // Handle the JSON response here
        setTrails(data.results || []);
        console.log(data);
      })
      .catch(error => {
        // Handle errors here
        console.error('Error:', error);
      });
  }, [userLocation]);

  return (
    <div>
      {/* Pass the trails data to TrailContainer component */}
      <TrailContainer trails={trails} />
    </div>
  );
}

export default HomePage;