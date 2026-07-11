const { checkMarks } = require('./studentExam');
const { buyProspectus, fillForm, submitForm, formVerification, ansEntranceExam, payFees } = require('./studentAdmissions');

checkMarks(50)
    .then((result) => {
        console.log(result);
    })
    .catch((result) => {
        console.log(result);
    });

const admission = () => {
    return buyProspectus()
        .then((result) => {
            console.log(result);
            return fillForm();
        })
        .then((result) => {
            console.log(result);
            return submitForm();
        })
        .then((result) => {
            console.log(result);
            return formVerification();
        })
        .then((result) => {
            console.log(result);
            return ansEntranceExam();
        })
        .then((result) => {
            console.log(result);
            return checkMarks(80);
        })
        .then((result) => {
            console.log(result);
            return payFees();
        })
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.error(error);
        });
};

admission();
