import Usuario from "../Usuario/Usuario"
import { useEffect, useState } from "react";
import CadastroDeUsuario from "../CadastroDeUsuario/CadastroDeUsuario";
import './ListaDeUsuarios.css';
import { useNavigate } from "react-router-dom";

function ListaDeUsuarios() {
    const navigate = useNavigate();
    useEffect(() => {
        fetch("https://localhost:44340/api/usuario", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((json) => {
                setUsuarios(json);
            })
            .catch((error) => {
                console.log(error);
                alert("Erro ao buscar usuários");
            });
    }, []);

    const [usuarios, setUsuarios] = useState([]);

    function mudarDePagina() {
        navigate("/cadastrar");
    }

    return (
        <div>
            <div className="usuarios-container">
                {
                    usuarios.map((usuario, index) => (
                        <Usuario usuario={usuario} key={index} />
                    ))
                }
            </div>
            <button onClick={mudarDePagina}>Adicionar usuário</button>
        </div>

    )
}

export default ListaDeUsuarios