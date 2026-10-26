// Same admission flow as the promise chain, written with async/await.
const express = require('express');
const app = express();
const PORT = 3000;
const { checkMarks } = require('../admission-promise-chain/studentExam');
const {
    buyProspectus,
    fillForm,
    submitForm,
    formVerification,
    ansEntranceExam,
    payFees,
} = require('../admission-promise-chain/studentAdmissions');

const studentAdmission = async () => {
    try {
        const steps = [];
        steps.push(await buyProspectus());
        steps.push(await fillForm());
        steps.push(await submitForm());
        steps.push(await formVerification());
        steps.push(await ansEntranceExam());
        steps.push(await checkMarks(80));
        steps.push(await payFees());
        return steps.join('<br>');
    } catch (error) {
        return error;
    }
};

app.get('/', (req, res) => {
    res.send('Main Page');
});

app.get('/admission', async (req, res) => {
    const result = await studentAdmission();
    res.send(result);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
