import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookingForm = () => {
    const [mentors, setMentors] = useState([]);
    const [selectedMentor, setSelectedMentor] = useState(null);
    const [duration, setDuration] = useState(30);

    useEffect(() => {
        axios.get('/api/mentors')
            .then(response => setMentors(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleBooking = () => {
        axios.post('/api/book', {
            studentId: 1, // example student ID
            mentorId: selectedMentor,
            duration
        }).then(response => {
            alert('Booking successful!');
        }).catch(error => {
            alert('Booking failed!');
        });
    };

    return (
        <div>
            <h2>Book a Meeting</h2>
            <select onChange={(e) => setSelectedMentor(e.target.value)}>
                {mentors.map(mentor => (
                    <option key={mentor.id} value={mentor.id}>
                        {mentor.name}
                    </option>
                ))}
            </select>
            <select onChange={(e) => setDuration(e.target.value)}>
                <option value={30}>30 mins</option>
                <option value={45}>45 mins</option>
                <option value={60}>60 mins</option>
            </select>
            <button onClick={handleBooking}>Book Now</button>
        </div>
    );
};

export default BookingForm;
