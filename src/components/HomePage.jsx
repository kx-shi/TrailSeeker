import React, { useState, useEffect } from 'react';
import TrailContainer from './TrailContainer';

function HomePage({ userLocation }) {
  const [trails, setTrails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // URL of your API request
    const apiUrl = `https://www.outdooractive.com/api/project/api-dev-oa/nearby/tour?location=${userLocation}&sortby=distance&radius=500000&limit=50`;

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
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Check if the response status is 'OK'
        if (data.status === 'OK') {
          // Handle the JSON response here
          if (data.result && data.result.length > 0) {
            setTrails(data.result);
          } else {
            // No trails found
            setTrails(null);
            setError('No trails found for the specified location. Try increasing the search radius.');
          }
          console.log('Data:', data.result);  // Log the data set
        } else if (data.status === 'ZERO_RESULTS') {
          // Handle case where no results were found
          setTrails(null);
          setError('No trails found for the specified location. Try increasing the search radius.');
        } else {
          console.error('Error:', data);
          setError('Error fetching data');
        }
      })
      .catch(error => {
        // Handle errors here
        console.error('Error:', error);
        setError('Error fetching data');
      })
      .finally(() => {
        // Set loading to false when request is complete
        setIsLoading(false);
      });
  }, [userLocation]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading && trails === null && !error && <p>No trails available. Try increasing the search radius.</p>}
      {!isLoading && trails !== null && (
        <TrailContainer trails={trails} />
      )}
    </div>
  );
}

export default HomePage;