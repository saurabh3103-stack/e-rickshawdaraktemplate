import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Brandcrump from '../../../Component/Brandcrump';
import SuccessPopup from '../../../Component/SuccessPopup';
import { useEffect } from 'react';

import { Toaster, toast } from 'react-hot-toast';
const PreviewVerifier = () => {
  const location = useLocation();
  const { data } = location.state; 
  console.log(data);
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setisVisible] = useState(false);
  const handleClosePopup = () => {
    setIsSubmitted(false); 
  };
  const [imageSrc, setImageSrc] = useState(null);
  useEffect(() => {
    if (
      data?.photo &&
      data.photo instanceof File &&
      data.photo.type.startsWith('image/')
    ) {
      const imageUrl = URL.createObjectURL(data.photo);
      setImageSrc(imageUrl);
      // Cleanup the URL when the component unmounts
      return () => URL.revokeObjectURL(imageUrl);
    }
  }, [data]);
  // Handle form submission and API call
  const handleSubmit = async () => {
    console.log('Form Data:', data); // Log the form data
    try {
      const response = await axios.post(
        'https://backend-wheat-gamma.vercel.app/api/verifier/register', // Your API endpoint
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data', // For file upload
            'x-api-key': 'your_secret_key', // Your secret key if needed
          },
        },
      );
      if (response.status === 201) {
        setError('');
        setIsSubmitted(true);
        setisVisible(true);
         toast.success('Verifier added successfully!');
      } else {
        toast.error('failed to add a verifier!');
        setError('Failed to add verifier. Please try again.');
      }
    } catch (error) {
      toast.error('unexpected error occured',error);
      console.error('API Error:', error.message);
      setError(
        'Failed to add verifier. Please check your connection or API endpoint.',
      );
    }
  };
  return (
    <div class="content-wrapper">
      <Brandcrump
        pageName="Dashboard"
        title="Preview Verifier Details"
        url="/dashboard"
        breadcrumb="Verifier Details"
      />
       <section class="content-header">
        <div class="container-fluid">
          <div className="card mb-3">
            {data && (
              <div>
                <div class="card-header bg-primary text-white">
                  <h5 class="card-title text-light m-0">Preview Verifier</h5>
                  </div>
                <div className='card-body'>  
                {isSubmitted && (
                  <SuccessPopup isVisible={isVisible} onClose={handleClosePopup} />
                )}
                {/* Grid for Input Fields */}
                  <div className="row g-3">
                    <div className="col-md-4">
                      <label htmlFor="zone_name" className="form-label">
                        Zone Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="zone_id"
                        value={data.zone_id}
                        disabled
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={data.name}
                        disabled
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="mobile" className="form-label">
                        Mobile
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="mobile"
                        value={data.mobile}
                        disabled
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        value={data.email}
                        disabled
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="designation" className="form-label">
                        Designation
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="designation"
                        value={data.designation}
                        disabled
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="dob" className="form-label">
                        Date of Birth
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="dob"
                        value={data.dob || 'N/A'}
                        disabled
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="aadhaar_number" className="form-label">
                        Aadhaar Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="aadhaar_number"
                        value={data.aadhaar_number}
                        disabled
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="address" className="form-label">
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        value={data.address}
                        disabled
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="police_name" className="form-label">
                        Police Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="police_name"
                        value={data.police_name}
                        disabled
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="police_id" className="form-label">
                        Police ID
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="police_id"
                        value={data.police_id}
                        disabled
                      />
                    </div>
                  </div>
                {/* Photo Preview */}
                  <div className="my-4 text-center">
                    <label htmlFor="photo" className="form-label d-block">
                      Photo
                    </label>
                    <div>
                      {imageSrc ? (
                        <img
                          src={imageSrc}
                          alt={data.photo.name}
                          style={{
                            width: '300px',
                            height: '100px',
                            objectFit: 'cover',
                          }}
                        />
                      ) : (
                        <p>No image available</p>
                      )}
                    </div>
                  </div>
                {/* Error and Success Messages */}
                  {error && <p className="text-danger">{error}</p>}
                  {isSubmitted && isVisible && (
                    <p className="text-success fw-bold">
                      Verifier Added Successfully!
                    </p>
                  )}
                {/* Submit Button */}
                  <div className="text-center">
                    <button
                      onClick={handleSubmit}
                      className="btn btn-success px-4 py-2 mt-3"
                    >
                      Submit
                    </button>
                  </div>
                </div>  
              </div>
            )}
         
          </div>
        </div>
      </section>

      <Toaster  position="top-right"
            toastOptions={{
              style: {
                transition: 'transform 0.3s ease-in-out', // Smooth sliding animation
              }}}/>
    </div>
  );
};

export default PreviewVerifier;
