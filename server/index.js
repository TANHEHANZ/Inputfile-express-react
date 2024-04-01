const express = require("express");

const saveFile1 = require("./controller/opcion1");
const saveFile2 = require("./controller/opcion2");

var cors = require("cors");

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(saveFile1);
app.use(saveFile2);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
