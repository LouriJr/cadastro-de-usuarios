import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Button, Text, View } from "react-native";
import { HeaderRequisicao } from "../../AuthContext";

export default function Home() {
  const navigation = useNavigation();

  async function Teste() {
    debugger;
    const header = await HeaderRequisicao();
    console.log(header);
  }
  function navegar(rota) {
    navigation.navigate(rota);
  }
  return (
    <View>
      <Text>Bem-vindos</Text>
      <Button
        title="Cadastrar usuario"
        onPress={() => navegar("CadastroUsuario")}
      ></Button>
      <Button
        title="Listar usuarios"
        onPress={() => navegar("ListagemUsuarios")}
      ></Button>
      <Button
        title="Teste"
        onPress={Teste}
      ></Button>
    </View>
  );
}
