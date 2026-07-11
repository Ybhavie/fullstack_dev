const checkMarks = (marks) => {
    return new Promise((resolve, reject) => {
        if (marks >= 75) {
            resolve("Distinction with " + marks + " Marks");
        } else if (marks >= 60) {
            resolve("FirstClass with " + marks + " Marks");
        } else if (marks >= 50) {
            resolve("SecondClass with " + marks + " Marks");
        } else {
            reject("Fail with " + marks + " Marks");
        }
    });
};

module.exports = { checkMarks };