import React, { useEffect, useState } from 'react';
import { Button, Image, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';

export default function EditarUsuario({ route }) {
    const { id } = route.params;
    const [nome, setNome] = useState("");
    const [cpf, setCPF] = useState("");
    const [celular, setCelular] = useState("");
    const [email, setEmail] = useState("");
    const [imagem, setImagem] = useState("");

    useEffect(() => {
        fetch("https://localhost:44340/api/usuario/" + id, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((usuario) => {
                setNome(usuario.nome);
                setCPF(usuario.cpf);
                setCelular(usuario.celular);
                setEmail(usuario.email);
                setImagem(usuario.imagem);
            })
            .catch((error) => {
                alert("Erro ao buscar usuário");
            });
    }, []);

    const selecionarImagem = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        });

        if (result.canceled) {
            return;
        }

        setImagem(result.assets[0].uri);
    }

    function Editar() {
        const body = { id, nome, cpf, email, celular, imagem };

        fetch("https://localhost:44340/api/usuario", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        })
            .then(() => { alert("Usuário editado com sucesso"); })
            .catch((error) => {
                console.log(error);
                alert("Erro ao editar resultado");
            });
    }

    return (
        <View>
            <TextInput
                placeholder='Digite o nome'
                value={nome}
                onChangeText={(texto) => setNome(texto)}
            />
            <TextInput
                placeholder='Digite o e-mail'
                value={email}
                onChangeText={(texto) => setEmail(texto)}
            />
            <TextInput
                placeholder='Digite o CPF'
                value={cpf}
                onChangeText={(texto) => setCPF(texto)}
            />
            <TextInput
                placeholder='Digite o número de celular'
                value={celular}
                onChangeText={(texto) => setCelular(texto)}
            />

            <Button title="Selecione a imagem" onPress={selecionarImagem} />
            <Image source={{ uri: imagem }} style={{ width: 200, height: 200 }} />
            <Button title="Editar usuário" onPress={Editar} />
        </View>
    );
}