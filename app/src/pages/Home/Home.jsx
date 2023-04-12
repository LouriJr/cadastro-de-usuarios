import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';

export default function Home() {
    const navigation = useNavigation();

    function navegar(rota) {
        navigation.navigate(rota);
    }
    return (
        <View>
            <Text>Bem-vindos</Text>
            <Button title="Cadastrar usuario" onPress={() => navegar("CadastroUsuario")}></Button>
            <Button title="Listar usuarios" onPress={() => navegar("ListagemUsuarios")}></Button>
        </View>
    );
}
