import { useEffect, useState } from "react";
import SeletorDeImagem from "../../Components/SeletorDeImagem/SeletorDeImagem";
import { useLocation } from 'react-router-dom';

function EditarUsuario() {
    const location = useLocation();
    const id = location.state.id;
    
    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    const [email, setEmail] = useState();
    const [celular, setCelular] = useState();
    const [imagem, setImagem] = useState();

    useEffect(() => {
        fetch("https://localhost:44340/api/usuario/" + id, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((usuario) => {
                console.log(usuario);
                setNome(usuario.nome);
                setCpf(usuario.cpf);
                setCelular(usuario.celular);
                setEmail(usuario.email);
                setImagem(usuario.imagem);
            })
            .catch((error) => {
                alert("Erro ao buscar usuário");
            });
    }, []);

    function editarUsuario(evento) {
        evento.preventDefault();

        const body = { nome, cpf, email, celular, imagem };

        fetch("https://localhost:44340/api/usuario", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        })
            .then((response) => { alert("Usuário alterado com sucesso"); })
            .catch((error) => {
                console.log(error);
                alert("Erro ao alterar usuario");
            });
    }

    return (
        <form onSubmit={e => { editarUsuario(e) }}>
            <label>Nome:
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
            </label>
            <label>CPF:
                <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} />
            </label>
            <label>Email:
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>Celular:
                <input type="text" value={celular} onChange={(e) => setCelular(e.target.value)} />
            </label>

            <div>
                <label for="image">Selecionar Imagem</label>
                {imagem && <SeletorDeImagem setImagem={setImagem} imagem={imagem}></SeletorDeImagem>}
            </div>

            <input type="submit" value="Editar" />


        </form>
    )
}

export default EditarUsuario;