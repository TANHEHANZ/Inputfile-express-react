import FileUploadForm from "../Formfile";
import ElultimoHijo from "../pages/elultimoHijo";
import Hijo from "../pages/hijo";
import Page2 from "../pages/page2";

export const data = [
  {
    name: "Inicio",
    path: "home",
    component: Hijo, 
    children: [
      {
        path: "saveInput", 
        name: "Guardar imagen",
        component: FileUploadForm,
        children: [
          {
            name: "desde el hijo",
            path: "mashijo",  
            component: ElultimoHijo,
          },
        ],
      },
      {
        name: "componente 1",
        path: "compo1", 
        component: Hijo,
      },
      {
        name: "componente 1",
        path: "compo1", 
        component: Hijo,
      },
    ],
  },
  {
    name: "componente padre",
    path: "compPadreE", // Cambiado a una ruta relativa
    component: Page2,
  },
];
