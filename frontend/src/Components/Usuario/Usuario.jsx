import { useNavigate } from "react-router-dom";

function Usuario({ usuario }) {

    const navigate = useNavigate();
    function navegarEditar() {
        navigate("/editar", { state: { id: usuario.id } });
    }
    return (
        <div>
            <h1>{usuario.nome}</h1>
            <h3>CPF: {usuario.cpf}</h3>
            <h3>Email: {usuario.email}</h3>
            <h3>Celular: {usuario.celular}</h3>
            <label>
                <img src={usuario.imagem} style={{ width: 200, height: 200 }} />
            </label>
            <button onClick={navegarEditar}>Editar</button>
        </div>
    )
}

export default Usuario