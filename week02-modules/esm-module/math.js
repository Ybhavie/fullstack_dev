// ES module: export/import instead of module.exports/require().
export function compoundInterest(P, r, n, t) {
    // n = times compounded per year, t = years.
    // Exponent must be n * t, not n + t.
    const A = P * Math.pow(1 + r / n, n * t);
    const interest = A - P;
    return { A: A.toFixed(2), interest: interest.toFixed(2) };
}

export function simpleInterest(P, r, t) {
    const interest = (P * r * t) / 100;
    const A = P + interest;
    return { A: A.toFixed(2), interest: interest.toFixed(2) };
}
