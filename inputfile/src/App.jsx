import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FileUploadForm from "./Formfile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FileUploadForm></FileUploadForm>
    </>
  );
}

export default App;
