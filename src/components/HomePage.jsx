import { useState, useEffect } from 'react';
import { TrailContainer } from './TrailContainer';
import { LikedTrailsContainer } from './LikedTrailsContainer';
import { NavBar } from './NavBar';
import { Filter } from './Filter';
import { IntermediatePage } from './IntermediatePage';
import '../styles/HomePage.css';

export const HomePage = ({ userLocation, savedTrails }) => {
    const [backupTrailObjects, setBackupTrailObjects] = useState(null);
    const [trails, setTrails] = useState(null); // State for storing trail data from our first API request for a specific location
    const [trailObjects, setTrailObjects] = useState([]); // State for storing detailed trail objects, we will pass these to container to use them inside there
    const [isLoading, setIsLoading] = useState(true); // State for loading status (we can use it later for better user experience)
    const [error, setError] = useState(null);

    // Effect to fetch trail data when user location changes (we might change this to another style)
    useEffect(() => {
        // API URL for fetching nearby trails
        // I used hardcoded radius, we can discuss about it
        const apiUrl = `https://www.outdooractive.com/api/project/api-dev-oa/nearby/tour?location=${userLocation}&sortby=distance&radius=500000&limit=15`;
        // Headers for the API request to get JSON body response
        const headers = new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        });

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
                if (data.status === 'OK') {
                    if (data.result && data.result.length > 0) {
                        setTrails(data.result);
                        // Fetching the trail objects here with using ID's
                        fetchTrailObjects(data.result);           
                    } else {
                        setTrails(null);
                        setError('No trails found for the specified location. Try increasing the search radius.');
                    }
                } else if (data.status === 'ZERO_RESULTS') {
                    setTrails(null);
                    setError('No trails found for the specified location. Try increasing the search radius.');
                } else {
                    console.error('Error:', data);
                    setError('Error fetching data');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                setError('Error fetching data');
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [userLocation]);

    // Function to fetch detailed trail objects
    const fetchTrailObjects = async (trailData) => {
        try {
            const trailObjectArray = [];
            // Looping through each trail ID and fetch detailed data for that ID
            for (const trail of trailData) {
                const trailId = trail.id;
                const trailObject = await fetchTrailData(trailId);
                trailObjectArray.push(trailObject);
            }
            setTrailObjects(trailObjectArray);
            setBackupTrailObjects([...trailObjectArray]);
            setTimeout(() => {
            }, 700); // to get one log for not to confuse
        } catch (error) {
            console.error('Error fetching trail objects:', error);
        }
    };

    // Function to fetch detailed trail data
    const fetchTrailData = async (trailId) => {
        const trailUrl = `https://www.outdooractive.com/api/project/api-dev-oa/oois/${trailId}?key=yourtest-outdoora-ctiveapi&lang=en`;

        const headers = new Headers({
            'Accept': 'application/json',
        });

        try {
            const response = await fetch(trailUrl, {
                method: 'GET',
                headers: headers,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            if (data.tour && data.tour.length > 0) {
                return data.tour[0];
            } else {
                console.error('Invalid trail data:', data);
                return null;
            }
        } catch (error) {
            console.error('Error fetching trail data:', error);
            return null;
        }
    };
    // Rendering zone might require some update

    return (
        <div className='homepage-container'>
            <NavBar/>
            <Filter
                trailObjects={backupTrailObjects} 
                setTrailObjects={setTrailObjects} 
                backupTrailObjects={backupTrailObjects}
                setBackupTrailObjects={setBackupTrailObjects}
            />
            {(isLoading && <IntermediatePage message="Loading..." />)}
            {error && <p>{error}</p>}
            {!isLoading && trails === null && !error && (
                <p>No trails available. Try increasing the search radius.</p>
            )}
            {!isLoading && trails !== null && !savedTrails && ( // Render all trail objects
                <div>
                    <h2 className='trail-search-title'>Trails Near Stockholm</h2>
                    <TrailContainer trailObjects={trailObjects} />
                </div>
            )}
            {!isLoading && trails !== null && savedTrails && ( // Render only liked trail objects
                <div>
                    <h2>Liked Trails</h2>
                    <LikedTrailsContainer />
                </div>
            )}
        </div>
    );
}

