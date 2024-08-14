import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MentorList = () => {
    const [mentors, setMentors] = useState([]);

    useEffect(() => {
        axios.get('/api/mentors')
            .then(response => setMentors(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h2>Available Mentors</h2>
            <ul>
                {mentors.map(mentor => (
                    <li key={mentor.id}>{mentor.name} - {mentor.area}</li>
                ))}
            </ul>
        </div>
    );
};

export default MentorList;
