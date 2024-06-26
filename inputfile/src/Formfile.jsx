import React, { useState } from "react";

const FileUploadForm = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [imagen, setImagen] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("https://munayki.cidtec-uc.com/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload file");
      }

      const data = await response.json();
      setMessage(data.message);
      setImagen(data.imageUrl);
      console.log(data.imageUrl);
    } catch (error) {
      console.error("Error uploading file: ", error);
      setMessage("Error uploading file");
    }
  };

  return (
    <div>
      <h2>File Upload Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
      {imagen && (
        <img src={imagen} alt="Uploaded Image" style={{ width: "120px" }} />
      )}
      <p>{imagen}</p>
    </div>
  );
};

export default FileUploadForm;
