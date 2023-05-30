import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt from "jwt-decode";

export async function SalvarJWT(jwtData) {
  const userData = jwt(jwtData);

  await AsyncStorage.setItem("@jwt", jwtData);
  await AsyncStorage.setItem("@userData", JSON.stringify(userData));
}

export async function HeaderRequisicao() {

  const token = await AsyncStorage.getItem("@jwt");
  return new Headers({
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  });
}

export async function ChecarLoginUsuario() {
    debugger;
  const token = await AsyncStorage.getItem("@jwt");
  if (!token) {
    return false;
  }

  const userData = JSON.parse(await AsyncStorage.getItem("@userData"));
  const actualDate = Date.parse(new Date()) / 1000;

  if (actualDate > userData.exp) {
    //usuario expirado
    await AsyncStorage.setItem("@jwt", null);
    return false;
  }

  return true;
}
