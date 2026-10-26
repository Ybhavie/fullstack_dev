import express from 'express';
import { compoundInterest, simpleInterest } from './math.js';

const app = express();

app.get('/', (req, res) => {
    const ci = compoundInterest(1000, 0.10, 1, 3);
    const ci2 = compoundInterest(1000, 0.10, 1, 5);
    const ci3 = compoundInterest(1000, 0.10, 1, 10);
    const si = simpleInterest(1000, 10, 3);
    const si2 = simpleInterest(1000, 10, 5);
    const si3 = simpleInterest(1000, 10, 10);

    res.send(`
        <h1>Interest Calculator</h1>

        <h2>Compound Interest</h2>
        <p>Final Amount:</p>
        <p>In 3 Years: Rs ${ci.A}</p>
        <p>In 5 Years: Rs ${ci2.A}</p>
        <p>In 10 Years: Rs ${ci3.A}</p>

        <p>Interest Earned:</p>
        <p>In 3 Years: Rs ${ci.interest}</p>
        <p>In 5 Years: Rs ${ci2.interest}</p>
        <p>In 10 Years: Rs ${ci3.interest}</p>

        <h2>Simple Interest</h2>
        <p>Final Amount:</p>
        <p>In 3 Years: Rs ${si.A}</p>
        <p>In 5 Years: Rs ${si2.A}</p>
        <p>In 10 Years: Rs ${si3.A}</p>

        <p>Interest Earned:</p>
        <p>In 3 Years: Rs ${si.interest}</p>
        <p>In 5 Years: Rs ${si2.interest}</p>
        <p>In 10 Years: Rs ${si3.interest}</p>
    `);
});

app.get('/simple-interest', (req, res) => {
    const { init, intRate, years } = req.query;
    const si = simpleInterest(Number(init), Number(intRate), Number(years));
    res.json(si);
});

app.get('/compound-interest', (req, res) => {
    const { init, intRate, years } = req.query;
    const ci = compoundInterest(Number(init), Number(intRate) / 100, 1, Number(years));
    res.json(ci);
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
