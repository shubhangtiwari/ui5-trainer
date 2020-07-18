// Fetching the libraries
const express = require('express');
const fs = require('fs');
const port = process.port || 80;

let app = express();

// Serving the resources
if (fs.existsSync('/source')) {
    app.use('/', express.static('/source'));
    app.use('/sample', express.static(__dirname + '/sample'));
} else {
    app.use('/', express.static(__dirname + '/sample'));
}
app.use('/ui5', express.static('/sap/ui5'));

// Starting the server
app.listen(port, () => {
    console.info(`UI5 Trainer started at port ${port}`);
});