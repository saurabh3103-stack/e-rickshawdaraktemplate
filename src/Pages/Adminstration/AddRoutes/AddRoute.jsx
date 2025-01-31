import React, { useState, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker, Polyline, Circle } from '@react-google-maps/api';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import SuccessPopup from '../../../Component/SuccessPopup';

const AddRoute = () => {
  const API_URL = 'http://localhost:3002/api/userPath';
  const API_KEY = 'your_secret_key';

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    start_point: '',
    end_point: '',
    start_lat: '',
    start_lng: '',
    end_lat: '',
    end_lng: '',
    distance: ''
  });

  const [markers, setMarkers] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 28.6139, lng: 77.2090 }); // Default center (Delhi)

  const handleClosePopup = () => {
    setIsSubmitted(false);
    fetchData();
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleMapClick = useCallback(
    (e) => {
      const newMarkers = [...markers];
      if (newMarkers.length < 2) {
        const newMarker = { lat: e.latLng.lat(), lng: e.latLng.lng() };
        newMarkers.push(newMarker);
        setMarkers(newMarkers);

        if (newMarkers.length === 1) {
          setFormData({
            ...formData,
            start_point: `(${newMarker.lat}, ${newMarker.lng})`,
            start_lat: newMarker.lat,
            start_lng: newMarker.lng,
          });
        } else {
          setFormData({
            ...formData,
            end_point: `(${newMarker.lat}, ${newMarker.lng})`,
            end_lat: newMarker.lat,
            end_lng: newMarker.lng,
          });
          calculateDistance(newMarker); // Calculate distance when second marker is added
        }
      }
    },
    [markers, formData]
  );

  const calculateDistance = (endMarker) => {
    const { start_lat, start_lng } = formData;

    // Haversine formula to calculate the distance between two points
    const R = 6371; // Radius of the Earth in km
    const dLat = (endMarker.lat - start_lat) * (Math.PI / 180);
    const dLng = (endMarker.lng - start_lng) * (Math.PI / 180);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(start_lat * (Math.PI / 180)) * Math.cos(endMarker.lat * (Math.PI / 180)) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c; // Distance in km
    setFormData((prev) => ({ ...prev, distance: distance.toFixed(2) }));
  };

  const fetchCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setMapCenter({ lat: latitude, lng: longitude });
          setMarkers([{ lat: latitude, lng: longitude }]);
          setFormData((prev) => ({
            ...prev,
            start_point: `(${latitude}, ${longitude})`,
            start_lat: latitude,
            start_lng: longitude,
          }));
        },
        (error) => {
          console.error(error);
          toast.error('Unable to fetch current location. Please enable location services.');
        }
      );
    } else {
      toast.error('Geolocation is not supported by your browser.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.start_point && formData.end_point) {
      try {
        const adminId = localStorage.getItem('user_id');
        await axios.post(`${API_URL}/add_routes`, { ...formData, admin_id: adminId }, { headers: { 'x-api-key': API_KEY } });
        setIsSubmitted(true);
        fetchData();
      } catch (error) {
        handleError(error);
        toast.error('Error adding route.');
      }
    } else {
      toast.error('Please select both start and end points.');
    }
  };

  const handleError = (error) => {
    console.error(error);
    toast.error(error.response?.data?.message || 'An unexpected error occurred');
  };

  // Function to calculate midpoint between start and end points
  const calculateMidpoint = (start, end) => {
    const lat = (start.lat + end.lat) / 2;
    const lng = (start.lng + end.lng) / 2;
    return { lat, lng };
  };

  // Clear Location function
  const clearLocation = () => {
    setMarkers([]); // Clear markers
    setFormData({
      start_point: '',
      end_point: '',
      start_lat: '',
      start_lng: '',
      end_lat: '',
      end_lng: '',
      distance: ''
    }); // Reset form data
    setMapCenter({ lat: 28.6139, lng: 77.2090 }); // Reset map center to default (Delhi)
  };

  return (
    <>
      <div className="mb-3">
        <div className="card">
          <div className="card-header bg-primary text-white">
            <h5 className="card-title m-0">Add E-Rickshaw Route</h5>
          </div>
          {isSubmitted && <SuccessPopup isVisible={isSubmitted} onClose={handleClosePopup} />}
          <div className="card-body">
            <div className="row">
              {/* Google Map Section */}
              <div className="col-md-6 mb-3">
                <LoadScript googleMapsApiKey="AIzaSyCiLRwm29ghwbDc1MrJ9svjNDg-NmQFx5A">
                  <GoogleMap
                    mapContainerStyle={{ height: '400px', width: '100%' }}
                    center={mapCenter}
                    zoom={12}
                    onClick={handleMapClick}
                  >
                    {markers.map((marker, index) => (
                      <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} />
                    ))}
                    {markers.length === 2 && (
                      <>
                        {/* Midpoint Circle */}
                        {(() => {
                          const midpoint = calculateMidpoint(markers[0], markers[1]);
                          const radius = formData.distance / 2 * 1000; // Convert km to meters
                          return (
                            <Circle
                              center={midpoint}
                              radius={radius}
                              options={{
                                fillColor: 'green',
                                fillOpacity: 0.3,
                                strokeColor: 'green',
                                strokeOpacity: 1,
                                strokeWeight: 1,
                              }}
                            />
                          );
                        })()}
                      </>
                    )}
                  </GoogleMap>
                </LoadScript>
              </div>

              {/* Form Section */}
              <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="start_point">Starting Point</label>
                                <input
                                type="text"
                                className="form-control"
                                id="start_point"
                                value={formData.start_point}
                                onChange={handleInputChange}
                                placeholder="Enter Starting Point"
                                />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="end_point">End Point</label>
                                <input
                                type="text"
                                className="form-control"
                                id="end_point"
                                value={formData.end_point}
                                onChange={handleInputChange}
                                placeholder="Enter End Point"
                                />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="start_lat">Start Latitude</label>
                                <input
                                type="text"
                                className="form-control"
                                id="start_lat"
                                value={formData.start_lat}
                                disabled
                                placeholder="Start Latitude"
                                />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="start_lng">Start Longitude</label>
                                <input
                                type="text"
                                className="form-control"
                                id="start_lng"
                                value={formData.start_lng}
                                disabled
                                placeholder="Start Longitude"
                                />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="end_lat">End Latitude</label>
                                <input
                                type="text"
                                className="form-control"
                                id="end_lat"
                                value={formData.end_lat}
                                disabled
                                placeholder="End Latitude"
                                />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="end_lng">End Longitude</label>
                                <input
                                type="text"
                                className="form-control"
                                id="end_lng"
                                value={formData.end_lng}
                                disabled
                                placeholder="End Longitude"
                                />
                            </div>
                        </div>
                    </div>
                  
                  {formData.distance && (
                    <div className="mb-3">
                      <label className="form-label">Distance</label>
                      <input
                        type="text"
                        className="form-control"
                        value={`${formData.distance} km`}
                        disabled
                      />
                    </div>
                  )}
                  <button type="button" className="btn btn-primary btn-sm mb-3 m-1" onClick={fetchCurrentLocation}>
                    Use Current Location
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm mb-3 m-1"
                    onClick={clearLocation}
                  >
                    Clear Location
                  </button>
                  <div className="d-flex gap-2 justify-content-end">
                    <button type="reset" className="btn btn-danger btn-sm m-1">Reset</button>
                    <button type="submit" className="btn btn-success btn-sm m-1">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-right" />
    </>
  );
};

export default AddRoute;
