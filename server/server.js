const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, "..", "public");
const port = 3000;

app.use(express.static(publicPath));
app.listen(process.env.PORT || port, () => console.log(`Listening on port ${port}`));