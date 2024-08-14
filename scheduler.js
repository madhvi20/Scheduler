const data = require('./data/data.json');

const findAvailableMentor = (area, preferredMentorId = null) => {
    if (preferredMentorId) {
        return data.mentors.find(m => m.id === preferredMentorId && m.availability.length > 0);
    }
    return data.mentors.find(m => m.area === area && m.availability.length > 0);
};

const scheduleMeeting = (studentId, mentorId, duration) => {
    const mentor = data.mentors.find(m => m.id === mentorId);
    if (!mentor) return null;

    const availableSlot = mentor.availability.find(slot => !slot.isBooked);
    if (!availableSlot) return null;

    mentor.availability = mentor.availability.map(slot => slot === availableSlot ? { ...slot, isBooked: true } : slot);
    return { studentId, mentorId, slot: availableSlot, duration };
};

module.exports = {
    findAvailableMentor,
    scheduleMeeting
};
