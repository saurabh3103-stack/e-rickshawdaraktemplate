import { useState, useEffect } from 'react';

function RouteNameComponent({ routeId }) {
    console.log(routeId);
    const [routeData, setRouteData] = useState({ start_point: '', end_point: '' });

    useEffect(() => {
        async function getRouteDetails() {
            const data = await fetchRouteDetails(routeId);
            console.log(data);
            setRouteData({
                start_point: data.start_point ,
                end_point: data.end_point
            });
        }
        if (routeId) {
            getRouteDetails();
        }
    }, [routeId]);
    async function fetchRouteDetails(routeId) {
        try {
            const response = await fetch(`http://localhost:3002/api/userPath/${routeId}`, {
                method: 'GET',
                headers: {
                    'x-api-key': 'your_secret_key',
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) throw new Error(`Error: ${response.status}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching route details:', error);
            // return { start_point: 'No Route Assign'};
        }
    }
    return (
        <div>
            <p> {routeData.start_point}-{routeData.end_point}</p>
        </div>
    );
}

export default RouteNameComponent;
