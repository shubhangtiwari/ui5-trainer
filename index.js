// Fetching the libraries
const express = require('express');
const port = process.port || 80;

let app = express();

// Serving the resources
app.use('/', express.static('/source-code'));
app.use('/ui5', express.static('/sap/ui5'));

// Starting the server
app.listen(port, () => {
    console.info(`UI5 Trainer started at port ${port}`);
});