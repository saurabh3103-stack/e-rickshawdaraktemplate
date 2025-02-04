import React, { useState, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker, Polyline, Circle } from '@react-google-maps/api';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import SuccessPopup from '../../../Component/SuccessPopup';

const AddRoute = () => {
  const API_URL = 'https://backend-wheat-gamma.vercel.app/api/userPath';
  const API_KEY = 'your_secret_key';
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [inputFields, setInputFields] = useState([{ value: '' }]);
  const [formData, setFormData] = useState({
    start_point: '',
    end_point: '',
  });
  const validateForm = () => {
    return formData.start_point !== '' && formData.end_point !== '';
  };
  const handleClosePopup = () => {
    setIsSubmitted(false);
    navigate('/route');
  };
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const adminId = localStorage.getItem('user_id');
        const response = await axios.post(
          'https://backend-wheat-gamma.vercel.app/api/userPath/add_routes',
          {
            ...formData,
            admin_id: adminId, // Add admin_id to the request
          },
          {
            headers: {
              'x-api-key': 'your_secret_key',
            },
          },
        );
        setError('');
        setIsSubmitted(true);
        setIsVisible(true);
        setFormData({ start_point: '', end_point: '' });
        fetchData(); // Refresh the data after successful addition
      } catch (error) {
        setError('Failed to add route.');
      }
    } else {
      setError('Please fill in all fields.');
    }
  };

  const handleError = (error) => {
    console.error(error);
    toast.error(error.response?.data?.message || 'An unexpected error occurred');
  };

  

  return (
    <>
      <div className="row gx-3">
          <div className="col-sm-12">
            <div className="card mb-3">
              <div className="card-header bg-primary text-white">
                <h5 className="card-title text-light m-0">
                  Add E-Rickshaw Route
                </h5>
              </div>
              {isSubmitted && (
                <SuccessPopup
                  isVisible={isVisible}
                  onClose={handleClosePopup}
                />
              )}
              <form onSubmit={handleSubmit}>
                <div className="card-body">
                  <div className="row gx-3">
                    <div className="col-lg-3 col-sm-4 col-12">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="start_point">
                          Starting Point
                        </label>
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
                    <div className="col-lg-3 col-sm-4 col-12">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="end_point">
                          End Point
                        </label>
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
                  </div>
                </div>
                <div className="card-footer">
                  <div className="d-flex gap-2 justify-content-end">
                    <button type="reset" className="btn btn-danger btn-sm m-1">
                      Reset
                    </button>
                    <button type="submit" className="btn btn-success btn-sm m-1">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      <Toaster position="top-right" />
    </>
  );
};

export default AddRoute;
