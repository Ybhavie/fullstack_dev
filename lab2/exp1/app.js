import express from "express"                       
import { compoundInterest } from "./math.js";
import { simpleInterest } from "./math.js";

const app = express();                               

app.get("/", (req, res) => {                         
    const ci =  compoundInterest(1000, 0.10, 1, 3);
    const ci2 = compoundInterest(1000, 0.10, 1, 5);
    const ci3 = compoundInterest(1000, 0.10, 1, 10);
    const si = simpleInterest(1000, 10, 3);
    const si2 = simpleInterest(1000, 10, 5);
    const si3 = simpleInterest(1000, 10, 10);

    res.send(`
        <h1>Interest Calculator</h1>

        <h2>Compound Interest</h2>
        <p>Final Amount:</p>
        <p>In 3 Years: ₹${ci.A}</p>
        <p>In 5 Years: ₹${ci2.A}</p>
        <p>In 10 Years: ₹${ci3.A}</p>
        
        <p>Interest Earned:</p>
        <p>In 3 Years: ₹${ci.interest}</p>
        <p>In 5 Years: ₹${ci2.interest}</p>
        <p>In 10 Years: ₹${ci3.interest}</p>

        <h2>Simple Interest</h2>
        <p>Final Amount:</p>
        <p>In 3 Years: ₹${si.A}</p>
        <p>In 5 Years: ₹${si2.A}</p>
        <p>In 10 Years: ₹${si3.A}</p>
        
        <p>Interest Earned:</p>
        <p>In 3 Years: ₹${si.interest}</p>
        <p>In 5 Years: ₹${si2.interest}</p>
        <p>In 10 Years: ₹${si3.interest}</p>
    `);
});

app.get("/simpleInterest", (req, res) => {                         
    const si = simpleInterest(1000, 10, 3);
    const si2 = simpleInterest(1000, 10, 5);
    const si3 = simpleInterest(1000, 10, 10);

    res.send(` 
        <h2>Simple Interest</h2>
        <p>Final Amount:</p>
        <p>In 3 Years: ₹${si.A}</p>
        <p>In 5 Years: ₹${si2.A}</p>
        <p>In 10 Years: ₹${si3.A}</p>
        
        <p>Interest Earned:</p>
        <p>In 3 Years: ₹${si.interest}</p>
        <p>In 5 Years: ₹${si2.interest}</p>
        <p>In 10 Years: ₹${si3.interest}</p>
    `);
});

app.get("/compoundInterest", (req, res) => {                         
    const ci =  compoundInterest(1000, 0.10, 1, 3);
    const ci2 = compoundInterest(1000, 0.10, 1, 5);
    const ci3 = compoundInterest(1000, 0.10, 1, 10);

    res.send(`
        <h2>Compound Interest</h2>
        <p>Final Amount:</p>
        <p>In 3 Years: ₹${ci.A}</p>
        <p>In 5 Years: ₹${ci2.A}</p>
        <p>In 10 Years: ₹${ci3.A}</p>
        
        <p>Interest Earned:</p>
        <p>In 3 Years: ₹${ci.interest}</p>
        <p>In 5 Years: ₹${ci2.interest}</p>
        <p>In 10 Years: ₹${ci3.interest}</p>

    `);
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});