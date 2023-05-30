
import { useNavigation } from '@react-navigation/native';
import { Text, View, Image, Button } from 'react-native';
import { HeaderRequisicao } from '../../AuthContext';

export default function Usuario({ usuario }) {
    const navigation = useNavigation();

    function navegar() {
        navigation.navigate("EditarUsuario", { id: usuario.id });
    }
    async function removerUsuario() {
        const headers = await HeaderRequisicao();
           
        fetch("https://localhost:44340/api/usuario/" + usuario.id, {
            method: "DELETE",
            headers
        })
            .then((response) => {
                if (response.ok) {
                    alert("Usuario removido com sucesso!");
                }
                else {
                    alert("Erro ao remover usuário");
                }
            })
            .catch((error) => {
                alert("Erro ao remover usuário");
            });
    }
    return (
        <View>
            <Text>Nome: {usuario.nome}</Text>
            <Text>CPF: {usuario.cpf}</Text>
            <Text>Celular: {usuario.celular}</Text>
            <Text>Email: {usuario.email}</Text>
            <Image source={{ uri: usuario.imagem }} style={{ width: 200, height: 200 }}></Image>
            <Button title="Editar" onPress={() => navegar(usuario.id)}></Button>
            <Button title="Remover" onPress={removerUsuario}></Button>
        </View>
    );
}