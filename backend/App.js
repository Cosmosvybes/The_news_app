const express = require("express");
const port = process.env.PORT || 1818;
const app = express();
const bodyParser = require("body-parser");
const { createPost } = require("./Routes/Api");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.post("/api/create", createPost);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
