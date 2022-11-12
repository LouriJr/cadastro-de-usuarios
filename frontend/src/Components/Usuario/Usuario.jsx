function Usuario({usuario}) {
    return (
        <div>
            <h1>{usuario.nome}</h1>
            <h3>CPF: {usuario.cpf}</h3>
            <h3>Email: {usuario.email}</h3>
            <h3>Celular: {usuario.celular}</h3>
        </div>
    )
}

export default Usuario