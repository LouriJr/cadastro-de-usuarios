import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { View, Pressable, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import "../../AuthContext";
import { ChecarLoginUsuario, SalvarJWT } from "../../AuthContext";

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function Navegar(rota) {
    navigation.navigate(rota);
  }

  useEffect(() => {
    verificarLogin();
  });

  async function verificarLogin() {
    const usuarioLogado = await ChecarLoginUsuario();
    if (usuarioLogado) {
      Navegar("Home");
    }
  };

  function Login() {
    fetch("https://localhost:44340/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        email,
        senha,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        SalvarJWT(json.token);
      })
      .then(() => Navegar("Home"))
      .catch((error) => {
        console.log(error);
        alert("Erro ao cadastrar resultado");
      });
  }

  return (
    <View>
      <TextInput
        placeholder="Digite o e-mail"
        value={email}
        onChangeText={(texto) => setEmail(texto)}
      />
      <TextInput
        placeholder="Senha"
        value={senha}
        secureTextEntry={true}
        onChangeText={(texto) => setSenha(texto)}
      />
      <Pressable onPress={Login}>
        <Text>Entrar</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          Navegar("CadastroUsuario");
        }}
      >
        <Text>Criar usuario</Text>
      </Pressable>
    </View>
  );
}
