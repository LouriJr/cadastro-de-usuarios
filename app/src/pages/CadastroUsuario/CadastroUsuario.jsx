import React, { useState } from 'react';
import { Button, Image, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
// import { KeyboardAvoidingView } from 'react-native-keyboard-aware-scroll-view';
import * as ImagePicker from 'expo-image-picker';

function CadastroUsuario() {

    const [nome, setNome] = useState("");
    const [cpf, setCPF] = useState("");
    const [celular, setCelular] = useState("");
    const [email, setEmail] = useState("");
    const [imagem, setImagem] = useState("");

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
    function Cadastrar() {

        const body = { nome, cpf, email, celular, imagem };

        fetch("https://localhost:44340/api/usuario", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        })
            .then((response) => { alert("Usuário cadastrado com sucesso"); })
            .catch((error) => {
                console.log(error);
                alert("Erro ao cadastrar resultado");
            });
    }

    return (
        <View>
            {/* <KeyboardAvoidingView > */}
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
            <Button title="Cadastrar" onPress={Cadastrar} />

            {/* </KeyboardAvoidingView> */}
        </View>
    );
}

export default CadastroUsuario;
