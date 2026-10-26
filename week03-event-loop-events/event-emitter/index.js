// EventEmitter: one listener reacts to the current doctor/patient state,
// instead of two listeners each guessing at it.
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

let doctorAvailable = true;

eventEmitter.on('patientComes', () => {
    if (doctorAvailable) {
        console.log('Doctor is available');
        console.log('Patient is being treated');
        doctorAvailable = false;
    } else {
        console.log('Doctor is unavailable');
        console.log('Patient is waiting');
    }
});

console.log('Patient 1 takes appointment');
eventEmitter.emit('patientComes'); // doctor is available

console.log('Patient 2 takes appointment');
eventEmitter.emit('patientComes'); // doctor is now unavailable

doctorAvailable = true; // doctor finishes with patient 1

console.log('Patient 3 takes appointment');
eventEmitter.emit('patientComes'); // doctor is available again
