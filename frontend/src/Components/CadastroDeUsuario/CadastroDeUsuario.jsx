import { useState } from "react";

function CadastroDeUsuario() {
    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    const [email, setEmail] = useState();
    const [celular, setCelular] = useState();

    const cadastrarUsuario = (e) => {
        e.preventDefault();

        const body = { nome, cpf, email, celular };

        fetch("https://localhost:44340/api/usuario", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        })
            .then((response) => { alert("Usuário cadastrado com sucesso"); })
            .catch((error) => {
                console.log(error);
                alert("Erro ao buscar resultado");
            });
    }

    return (
        <form onSubmit={e => { cadastrarUsuario(e) }}>
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

            <input type="submit" value="Cadastrar" />
        </form>
    )
}

export default CadastroDeUsuario