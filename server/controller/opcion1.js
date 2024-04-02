const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("node:fs");
const app = express();

// const upload = multer({ dest: "controller/uploads1/" });
const upload = multer({ dest: "/tmp/" });

app.use(
  "/uploads1",
  express.static(path.join(__dirname, "controller", "uploads1"))
);

app.post("/upload1", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  const newPath = saveimage(req.file);
  res.json({
    message: "File uploaded successfully"+newPath,
  });
});

function saveimage(file) {
  const fileExtension = path.extname(file.originalname);
  const newPath = `${file.filename}${fileExtension}`;
  fs.renameSync(file.path, `controller/uploads1/${newPath}`);
  console.log(newPath);
  return newPath;
}

module.exports = app;
