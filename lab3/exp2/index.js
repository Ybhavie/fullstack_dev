const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
let doctorAvailable = 1;

eventEmitter.on("Patient Comes", () => {
    if (!doctorAvailable) {
        doctorAvailable = 0
        console.log("Doctor is unavailable");
        console.log("Patient is waiting");
    } else {}
    doctorAvailable = doctorAvailable === 0 ? 1 : 0;
});

eventEmitter.on("Patient Comes", () => {
    if (!doctorAvailable) {
        doctorAvailable = 1
        console.log("Doctor is available");
        console.log("Patient is being treated");
    } else {}

    doctorAvailable = doctorAvailable === 1 ? 0 : 1;
});



console.log("Patient Takes Appointment");
eventEmitter.emit("Patient Comes");


