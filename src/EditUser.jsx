// src/components/EditUserModal.jsx
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './EditUser.css';

Modal.setAppElement('#root');

const EditUser = ({ isOpen, onRequestClose, user, onSave }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  const handleChange = (e) => {e
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Edit User">
      <h2>Edit Details</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name || ''} onChange={handleChange} required />
        <label>Email:</label>
        <input type="email" name="email" value={formData.email || ''} onChange={handleChange} required />
        <label>Phone:</label>
        <input type="text" name="phone" value={formData.phone || ''} onChange={handleChange} required />
        <label>Website:</label>
        <input type="text" name="website" value={formData.website || ''} onChange={handleChange} required />
        <div className="modal-buttons">
          <button type="button" onClick={onRequestClose}>Cancel</button>
          <button type="submit">OK</button>
        </div>
      </form>
    </Modal>
  );
};

export default EditUser;