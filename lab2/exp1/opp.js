import express from "express"                       
import { compoundInterest } from "./math.js";
import { simpleInterest } from "./math.js";
 
const opp = express(); 

opp.get("/", (req, res) => {  
    const { init, intRate, NoFyears } = req.query;

    const P = parseFloat(init); 
    const r = parseFloat(intRate);
    const t = parseFloat(NoFyears);

    console.log(P, r, t);

    const ci = compoundInterest(P, r/100, 1, t);
    const si = simpleInterest(P, r, t);

    res.send(`
        <h1>Compound Interest: ₹${ci.A}</h1>
        <h1>Simple Interest: ₹${si.A} </h1>
    `);
});



opp.get("/CalculateSimpleInterest", (req, res) => {  
    const { init, intRate, NoFyears } = req.query; 

    const P = parseFloat(init); 
    const r = parseFloat(intRate);
    const t = parseFloat(NoFyears);

    console.log(P, r, t);

    const si = simpleInterest(P, r, t);

    res.send(`
        <h1>Simple Interest</h1>
        <p>Final Amount: ₹${si.A}</p>
        <p>Interest Earned: ₹${si.interest}</p>
    `);
});

opp.get("/CalculateCompoundInterest", (req, res) => {  
    const { init, intRate, NoFyears } = req.query; 

    const P = parseFloat(init); 
    const r = parseFloat(intRate);
    const t = parseFloat(NoFyears);

    console.log(P, r, t);

    const ci = compoundInterest(P, r/100, 1, t);

    res.send(`
        <h1>Compound Interest</h1>
        <p>Final Amount: ₹${ci.A}</p>
        <p>Interest Earned: ₹${ci.interest}</p>
    `);
});

opp.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});