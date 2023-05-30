import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './src/pages/Home/Home'
import ListagemUsuarios from './src/pages/ListagemUsuarios/ListagemUsuarios';
import CadastroUsuario from './src/pages/CadastroUsuario/CadastroUsuario';
import EditarUsuario from './src/pages/EditarUsuario/EditarUsuario';
import Login from './src/pages/Login/Login';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="CadastroUsuario" component={CadastroUsuario}></Stack.Screen>
        <Stack.Screen name="ListagemUsuarios" component={ListagemUsuarios}></Stack.Screen>
        <Stack.Screen name="EditarUsuario" component={EditarUsuario}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}