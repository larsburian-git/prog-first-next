'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Wichtig für Navigation

const Checkout = ({ openingHours }) => {
  const router = useRouter(); // Initialisiere Router

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const generateTimeSlots = (start, end) => {
    const slots = [];
    const [startHour, startMinute] = start.split(':').map(Number);
    const [endHour, endMinute] = end.split(':').map(Number);

    let current = new Date();
    current.setHours(startHour, startMinute, 0, 0);
    const endTime = new Date();
    endTime.setHours(endHour, endMinute, 0, 0);

    while (current <= endTime) {
      const hours = current.getHours().toString().padStart(2, '0');
      const minutes = current.getMinutes().toString().padStart(2, '0');
      slots.push(`${hours}:${minutes}`);
      current.setMinutes(current.getMinutes() + 15);
    }

    return slots;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && selectedDay && selectedTime) {
      // Übergabe der Daten per URL-Parameter oder Query
      const query = new URLSearchParams({
        firstName,
        lastName,
        day: selectedDay,
        time: selectedTime,
      }).toString();

      router.push(`/bestaetigung?${query}`);
    }
  };

  const availableDays = openingHours.days
    .map((day, index) => ({ day, index }))
    .filter(d => !openingHours.closedDays.includes(d.index));

  const timeSlots = generateTimeSlots(openingHours.start, openingHours.end);

  return (
    <div className="checkout-container">
      <h2>Reservierung</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Vorname:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </label>
        <label>
          Nachname:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </label>
        <label>
          Tag:
          <select value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)} required>
            <option value="">-- Wähle einen Tag --</option>
            {availableDays.map(({ day, index }) => (
              <option key={index} value={day}>{day}</option>
            ))}
          </select>
        </label>
        <label>
          Uhrzeit:
          <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} required>
            <option value="">-- Wähle eine Zeit --</option>
            {timeSlots.map((time, idx) => (
              <option key={idx} value={time}>{time}</option>
            ))}
          </select>
        </label>
        <button type="submit">Reservieren</button>
      </form>
    </div>
  );
};

export default Checkout;
