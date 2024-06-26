import React from "react";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { data } from "./data/routes";
import Inicio from "./pages/inicio";

function App() {
  const renderRoutes = (routes) => {
    return routes.map((ruta) => (
      <React.Fragment key={ruta.path}>
        <Route path={ruta.path} element={<ruta.component />} />
        {ruta.children && renderRoutes(ruta.children)}
      </React.Fragment>
    ));
  };

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Inicio />}>
            {renderRoutes(data)}
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
