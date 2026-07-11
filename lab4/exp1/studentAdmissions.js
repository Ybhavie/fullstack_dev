const buyProspectus = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Prospectus Bought");
        }, 1000);
    });
};

const fillForm = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Form Filled");
        }, 1000);
    });
};

const submitForm = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Form Submitted");
        }, 1000);
    });
};

const formVerification = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Form Verified");
        }, 1000);
    });
};

const ansEntranceExam = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Entrance Exam Answered");
        }, 1000);
    });
};

const payFees = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Fees Paid");
        }, 1000);
    });
};

module.exports = {
    buyProspectus,
    fillForm,
    submitForm,
    formVerification,
    ansEntranceExam,
    payFees,
};