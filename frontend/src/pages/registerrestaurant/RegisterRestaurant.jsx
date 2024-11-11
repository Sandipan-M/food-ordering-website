import React, { useState } from 'react';
import'./RegisterRestaurant.css'
import { useNavigate } from 'react-router-dom';

const RegisterRestaurant = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    cuisine: '',
  });

  // State to handle validation messages
  const [errors, setErrors] = useState({});


  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Restaurant name is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.cuisine) newErrors.cuisine = 'Cuisine type is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // If no errors, process the form (e.g., send data to the backend)
      console.log('Form submitted:', formData);
      setFormData({ name: '', address: '', phone: '', email: '', cuisine: '' });
      setErrors({});
      alert('Restaurant registered successfully!');
    }
  };

  return (
    <div className="container">
      <h2>Restaurant Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Restaurant Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter restaurant name"
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        
        <div>
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter restaurant address"
          />
          {errors.address && <p className="error">{errors.address}</p>}
        </div>

        <div>
          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div>
          <label>Cuisine Type</label>
          <input
            type="text"
            name="cuisine"
            value={formData.cuisine}
            onChange={handleChange}
            placeholder="Enter cuisine type"
          />
          {errors.cuisine && <p className="error">{errors.cuisine}</p>}
        </div>

        <button type="submit">Register Restaurant</button>
      </form>
    </div>
  );
};

export default RegisterRestaurant;
