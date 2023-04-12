
import { useNavigation } from '@react-navigation/native';
import { Text, View, Image, Button } from 'react-native';


export default function Usuario({ usuario }) {
    const navigation = useNavigation();

    function navegar() {
        navigation.navigate("EditarUsuario", { id: usuario.id });
    }
    function removerUsuario(){
        fetch("https://localhost:44340/api/usuario/" + usuario.id, {
            method: "DELETE",
        })
            .then((usuario) => {
                alert("Usuario removido com sucesso!");
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
            <Button title="Remover" onPress={ removerUsuario}></Button>
        </View>
    );
}