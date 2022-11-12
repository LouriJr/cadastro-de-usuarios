import logo from "./logo.svg";
import "./App.css";
import ListaDeUsuarios from "./Components/ListaDeUsuarios/ListaDeUsuarios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CadastroDeUsuario from "./Components/CadastroDeUsuario/CadastroDeUsuario";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ListaDeUsuarios />,
    },
    {
      path: "/cadastrar",
      element: <CadastroDeUsuario />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
