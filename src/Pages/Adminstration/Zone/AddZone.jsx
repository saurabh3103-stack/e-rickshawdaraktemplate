import React, { useState } from 'react';
import axios from 'axios';
import SuccessPopup from '../../../Component/SuccessPopup';
import { Toaster, toast } from 'react-hot-toast';

const AddZone = () => {
  const [formData, setFormData] = useState({
    zone_id: '',
    zone_name: '',
    zone_region: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState('');

  // Handle form input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;

    setFormData((prev) => {
      let updatedData = { ...prev, [id]: value };

      // Auto-generate zone_id from zone_name
      if (id === 'zone_name') {
        updatedData.zone_id = value
          .toLowerCase()
          .trim()
          .replace(/\s+/g, '_'); // Replace spaces with underscores
      }

      return updatedData;
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.zone_id || !formData.zone_name || !formData.zone_region) {
      setError('All fields are required.');
      toast.error('All fields are required.');
      return;
    }

    try {
      const response = await axios.post(
        'https://backend-wheat-gamma.vercel.app/api/zones/add_zone',
        formData,
        {
          headers: {
            'x-api-key': 'your_secret_key', // Replace with your actual key
          },
        }
      );

      if (response.status === 201) {
        toast.success('Zone added successfully!');
        setError('');
        setIsSubmitted(true);
        setIsVisible(true);
        setFormData({ zone_id: '', zone_name: '', zone_region: '' }); // Reset form data
      } else {
        toast.error('Failed to add zone.');
      }
    } catch (error) {
      console.error('API Error:', error);
      toast.error('Failed to add zone. Please check your connection or API endpoint.');
    }
  };

  // Handle success popup close
  const handleClosePopup = () => {
    setIsVisible(false);
    setIsSubmitted(false);
  };

  return (
    <>
      <Toaster position="top-right" />
      <div className="row gx-3">
        <div className="col-sm-12">
          <div className="card mb-3">
            <div className="card-header bg-primary text-white">
              <h5 className="card-title text-light m-0">Add Zone</h5>
            </div>

            {/* Success Popup */}
            {isVisible && <SuccessPopup isVisible={isVisible} onClose={handleClosePopup} />}

            <form onSubmit={handleSubmit}>
              <div className="card-body">
                <div className="row gx-3">
                  <div className="col-lg-3 col-sm-4 col-12">
                    <div className="mb-3">
                      <label className="form-label" htmlFor="zone_id">
                        Zone ID
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="zone_id"
                        value={formData.zone_id}
                        readOnly // Prevent manual editing
                        placeholder="Auto-generated Zone ID"
                      />
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-4 col-12">
                    <div className="mb-3">
                      <label className="form-label" htmlFor="zone_name">
                        Zone Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="zone_name"
                        value={formData.zone_name}
                        onChange={handleInputChange}
                        placeholder="Enter Zone Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-4 col-12">
                    <div className="mb-3">
                      <label className="form-label" htmlFor="zone_region">
                        Zone Region
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="zone_region"
                        value={formData.zone_region}
                        onChange={handleInputChange}
                        placeholder="Enter Zone Region"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="d-flex gap-2 justify-content-end">
                  <button
                    type="reset"
                    className="btn btn-danger me-2 m-1"
                    onClick={() =>
                      setFormData({
                        zone_id: '',
                        zone_name: '',
                        zone_region: '',
                      })
                    }
                  >
                    Reset
                  </button>
                  <button type="submit" className="btn btn-success m-1" >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddZone;
