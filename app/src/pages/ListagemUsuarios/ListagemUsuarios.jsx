import { useEffect, useState } from 'react';
import { View } from 'react-native';
import Usuario from '../../Components/Usuario/Usuario';

export default function ListagemUsuarios() {

    useEffect(() => {
        fetch("https://localhost:44340/api/usuario", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((json) => {
                setUsuarios(json);
            })
            .catch((error) => {
                alert("Erro ao buscar usuários");
            });
    }, []);

    const [usuarios, setUsuarios] = useState([]);
    return (
        <View>
            {
                usuarios.map((usuario, index) => (
                    <Usuario usuario={usuario} key={index} />
                ))
            }
        </View>
    );
}
