import React from 'react';
import BookingForm from './components/BookingForm';
import MentorList from './components/MentorList';

const App = () => {
    return (
        <div>
            <h1>1x1 Scheduler</h1>
            <MentorList />
            <BookingForm />
        </div>
    );
};

export default App;
