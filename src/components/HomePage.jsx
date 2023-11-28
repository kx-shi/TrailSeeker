import React, { useState, useEffect } from 'react';
import TrailContainer from './TrailContainer';

const HomePage = ({ userLocation }) => {
    const [trails, setTrails] = useState([]);

    useEffect(() => {
        const fetchTrails = async () => {
            try {
                const apiKey = 'yourtest-outdoora-ctiveapi';
                const apiUrl = `https://www.outdooractive.com/api/project/api-dev-oa/nearby/tour?location=${userLocation}&radius=5000&limit=50&sortby=distance&key=${apiKey}`;

                const response = await fetch(apiUrl);
                const data = await response.json();

                // Assuming the API response has a 'tours' property containing the trail data
                setTrails(data.tours);
            } catch (error) {
                console.error('Error fetching trail data:', error);
            }
        };

        fetchTrails();
    }, [userLocation]);

    return (
        <div>
            <h1>Trail Explorer</h1>

            {/* <NavBar /> */}
            <div>Navbar</div>

            {/* <TrailContainer trails={trails} /> */}
            <div>Trail Container</div>

        </div>
    );
};

export default HomePage;