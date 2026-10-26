// Each admission step returns a Promise that resolves after a short delay.
const buyProspectus = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Prospectus Bought'), 500);
    });
};

const fillForm = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Form Filled'), 500);
    });
};

const submitForm = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Form Submitted'), 500);
    });
};

const formVerification = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Form Verified'), 500);
    });
};

const ansEntranceExam = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Entrance Exam Answered'), 500);
    });
};

const payFees = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Fees Paid'), 500);
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
