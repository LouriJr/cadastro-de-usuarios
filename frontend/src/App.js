import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CadastroDeUsuario from "./Pages/CadastroDeUsuario/CadastroDeUsuario";
import ListaDeUsuarios from "./Pages/ListaDeUsuarios/ListaDeUsuarios";
import { FilePond, File, registerPlugin } from 'react-filepond'
// Import FilePond styles
import 'filepond/dist/filepond.min.css'
// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import EditarUsuario from "./Pages/EditarUsuario/EditarUsuario";
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

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
    {
      path: "/editar",
      element: <EditarUsuario />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
