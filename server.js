const express = require('express');
const app = express();
const port = 3000;
const { findAvailableMentor, scheduleMeeting } = require('./scheduler');

app.use(express.json());

app.get('/api/mentors', (req, res) => {
    const { area, preferredMentorId } = req.query;
    const mentor = findAvailableMentor(area, preferredMentorId);
    if (mentor) {
        res.status(200).json(mentor);
    } else {
        res.status(404).json({ message: 'No available mentor found' });
    }
});

app.post('/api/book', (req, res) => {
    const { studentId, mentorId, duration } = req.body;
    const booking = scheduleMeeting(studentId, mentorId, duration);
    if (booking) {
        res.status(200).json(booking);
    } else {
        res.status(400).json({ message: 'Booking failed' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
