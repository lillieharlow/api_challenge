const express = require("express");
const app = express();

// Route" /calculator/:num1/:operation/:num2
app.get("/calculator/:num1/:operation/:num2", (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    const op = req.params.operation.toLowerCase();

    let result;
    let operationString;

    switch(op) {
        case "add":
            result = num1 + num2;
            operationString = `${num1} plus ${num2}`;
            break;

        case "subtract":
            result = num1 - num2;
            operationString = `${num1} minus ${num2}`;
            break;

        case "multiply":
            result = num1 * num2;
            operationString = `${num1} multiplied by ${num2}`;
            break;

        case "divide":
            result = num1 / num2;
            operationString = `${num1} divided by ${num2}`;
            break;

        default:
            return res.status(404).send("404 NOT FOUND");
    }

    res.json({
        operation: operationString,
        result: result,
    });
});

// Start the server
app.listen(3000, () => console.log("Calculator API runnning on port 3000"));

