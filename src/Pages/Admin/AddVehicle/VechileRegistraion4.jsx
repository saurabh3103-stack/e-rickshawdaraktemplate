import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../../context/AppContext';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';


const VehicleRegistration4 = () => {
  const { vehicleId, registration_number } = useContext(AppContext);
  console.log(registration_number);

  const [formData, setFormData] = useState({
    vehicle_id: vehicleId || '',
    rc: registration_number,
    insurance_date: '',
    insurance_exp_date: '',
    fitness_date: '',
    fitness_exp_date: '',
    pollution_date: '',
    pollution_exp_date: '',
    added_by: 'admin',
    added_id: localStorage.getItem("user_id"),
  });

  const [files, setFiles] = useState({
    insurance_image: null,
    fitness_image: null,
    pollution_image: null,
    ownership_image: null,
    photos: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files: selectedFiles } = e.target;
    if (name === 'photos') {
      setFiles((prevFiles) => ({
        ...prevFiles,
        [name]: Array.from(selectedFiles),
      }));
    } else {
      setFiles((prevFiles) => ({
        ...prevFiles,
        [name]: selectedFiles[0] || null,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    Object.keys(files).forEach((key) => {
      if (key === 'photos') {
        files[key].forEach((file) => {
          formDataToSend.append(key, file);
        });
      } else {
        formDataToSend.append(key, files[key]);
      }
    });

    try {
      const response = await axios.post('https://backend-wheat-gamma.vercel.app/api/vehicle-document/create', formDataToSend, {
        headers: {
          'x-api-key': 'your_secret_key',
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        toast.success('Vehicle document created successfully!');
        setFormData({
          vehicle_id: vehicleId || '',
          rc: '',
          insurance_date: '',
          insurance_exp_date: '',
          fitness_date: '',
          fitness_exp_date: '',
          pollution_date: '',
          pollution_exp_date: '',
        });
        setFiles({
          insurance_image: null,
          fitness_image: null,
          pollution_image: null,
          ownership_image: null,
          photos: [],
        });
      }
    } catch (error) {
      toast.error('Error creating vehicle document: ' + (error.response?.data?.message || 'Unknown error'));
      console.error(error);
    }
  };

  return (
    <><Toaster />
    <div className="container mt-4">
      
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="insurance_date" className="form-label">Insurance Date</label>
            <input
              type="date"
              id="insurance_date"
              name="insurance_date"
              className="form-control"
              value={formData.insurance_date}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="insurance_exp_date" className="form-label">Insurance Expiry Date</label>
            <input
              type="date"
              id="insurance_exp_date"
              name="insurance_exp_date"
              className="form-control"
              value={formData.insurance_exp_date}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="fitness_date" className="form-label">Fitness Date</label>
            <input
              type="date"
              id="fitness_date"
              name="fitness_date"
              className="form-control"
              value={formData.fitness_date}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="fitness_exp_date" className="form-label">Fitness Expiry Date</label>
            <input
              type="date"
              id="fitness_exp_date"
              name="fitness_exp_date"
              className="form-control"
              value={formData.fitness_exp_date}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="pollution_date" className="form-label">Pollution Date</label>
            <input
              type="date"
              id="pollution_date"
              name="pollution_date"
              className="form-control"
              value={formData.pollution_date}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="pollution_exp_date" className="form-label">Pollution Expiry Date</label>
            <input
              type="date"
              id="pollution_exp_date"
              name="pollution_exp_date"
              className="form-control"
              value={formData.pollution_exp_date}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="insurance_image" className="form-label">Insurance Image</label>
            <input
              type="file"
              id="insurance_image"
              name="insurance_image"
              className="form-control"
              onChange={handleFileChange}
              accept="image/*"
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="fitness_image" className="form-label">Fitness Image</label>
            <input
              type="file"
              id="fitness_image"
              name="fitness_image"
              className="form-control"
              onChange={handleFileChange}
              accept="image/*"
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="pollution_image" className="form-label">Pollution Image</label>
            <input
              type="file"
              id="pollution_image"
              name="pollution_image"
              className="form-control"
              onChange={handleFileChange}
              accept="image/*"
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="ownership_image" className="form-label">Ownership Image</label>
            <input
              type="file"
              id="ownership_image"
              name="ownership_image"
              className="form-control"
              onChange={handleFileChange}
              accept="image/*"
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="photos" className="form-label">Additional Photos</label>
            <input
              type="file"
              id="photos"
              name="photos"
              className="form-control"
              onChange={handleFileChange}
              accept="image/*"
              multiple
            />
          </div>
        </div>
        <button type="submit" className="btn btn-success mt-3">Upload Vehicle Documents</button>
        
      </form>
    </div>
    </>
  );
};

export default VehicleRegistration4;