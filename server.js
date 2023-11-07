const express = require("express");
const dotnet = require("dotenv").config();

const app = express();
app.use("/api/contacts", require("./routes/contactRoutes"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
