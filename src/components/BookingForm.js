import React, { useState } from 'react';

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: 1,
    occasion: 'Birthday'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Table booked for ${formData.name} on ${formData.date} at ${formData.time} for ${formData.guests} guests.`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book a Table</h2>
      <label>Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <br />
      <label>Date:
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      </label>
      <br />
      <label>Time:
        <input type="time" name="time" value={formData.time} onChange={handleChange} required />
      </label>
      <br />
      <label>Number of Guests:
        <input type="number" name="guests" value={formData.guests} min="1" max="10" onChange={handleChange} />
      </label>
      <br />
      <label>Occasion:
        <select name="occasion" value={formData.occasion} onChange={handleChange}>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </label>
      <br />
      <button type="submit">Book Now</button>
    </form>
  );
}

export default BookingForm;

