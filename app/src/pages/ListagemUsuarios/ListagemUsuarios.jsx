import { useEffect, useState } from 'react';
import { View } from 'react-native';
import Usuario from '../../Components/Usuario/Usuario';
import { HeaderRequisicao } from '../../AuthContext';

export default function ListagemUsuarios() {
    const [usuarios, setUsuarios] = useState([]);

    async function ListarUsuarios() {
        const headers = await HeaderRequisicao();

        fetch("https://localhost:44340/api/usuario", {
            method: "GET",
            headers
        })
            .then((response) => response.json())
            .then((json) => {
                setUsuarios(json);
            })
            .catch((error) => {
                alert("Erro ao buscar usuários");
            });
    }
    
    useEffect(() => {
        ListarUsuarios();
    }, []);

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
