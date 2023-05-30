using CadastroDeUsuariosAPI.DTO;
using MySqlConnector;
using System;
using System.Collections.Generic;

namespace CadastroDeUsuariosAPI.DAO
{
    public class UsuarioDAO
    {
        public UsuarioDTO Login(UsuarioDTO dadosLogin)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = "SELECT*FROM Usuarios WHERE Email = @email AND Senha = @senha";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@email", dadosLogin.Email);
            comando.Parameters.AddWithValue("@senha", dadosLogin.Senha);

            var dataReader = comando.ExecuteReader();

            var usuario = new UsuarioDTO();
            while (dataReader.Read())
            {
                usuario.ID = int.Parse(dataReader["ID"].ToString());
                usuario.Nome = dataReader["Nome"].ToString();
                usuario.Email = dataReader["Email"].ToString();
                usuario.CPF = dataReader["CPF"].ToString();
                usuario.Celular = dataReader["Celular"].ToString();
                usuario.Imagem = dataReader["Imagem"].ToString();
            }
            conexao.Close();

            return usuario;
        }
        public List<UsuarioDTO> ListarUsuario()
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = "SELECT*FROM Usuarios";

            var comando = new MySqlCommand(query, conexao);
            var dataReader = comando.ExecuteReader();

            var usuarios = new List<UsuarioDTO>();

            while (dataReader.Read())
            {
                var usuario = new UsuarioDTO();
                usuario.ID = int.Parse(dataReader["ID"].ToString());
                usuario.Nome = dataReader["Nome"].ToString();
                usuario.Email = dataReader["Email"].ToString();
                usuario.CPF = dataReader["CPF"].ToString();
                usuario.Celular = dataReader["Celular"].ToString();
                usuario.Imagem = dataReader["Imagem"].ToString();

                usuarios.Add(usuario);
            }
            conexao.Close();

            return usuarios;
        }
        public UsuarioDTO ListarUsuarioPorId(int id)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = "SELECT*FROM Usuarios WHERE Id = @id";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@id", id);

            var dataReader = comando.ExecuteReader();

            var usuario = new UsuarioDTO();
            while (dataReader.Read())
            {
                usuario.ID = int.Parse(dataReader["ID"].ToString());
                usuario.Nome = dataReader["Nome"].ToString();
                usuario.Email = dataReader["Email"].ToString();
                usuario.CPF = dataReader["CPF"].ToString();
                usuario.Celular = dataReader["Celular"].ToString();
                usuario.Imagem = dataReader["Imagem"].ToString();
            }
            conexao.Close();

            return usuario;
        }

        public void CadastrarUsuario(UsuarioDTO usuario)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"INSERT INTO Usuarios (Nome, CPF, Email, Celular, Imagem) VALUES
						(@nome,@cpf,@email,@celular, @imagem)";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@nome", usuario.Nome);
            comando.Parameters.AddWithValue("@cpf", usuario.CPF);
            comando.Parameters.AddWithValue("@email", usuario.Email);
            comando.Parameters.AddWithValue("@celular", usuario.Celular);
            comando.Parameters.AddWithValue("@imagem", usuario.Imagem);

            comando.ExecuteNonQuery();
            conexao.Close();
        }

        public void EditarUsuario(UsuarioDTO usuario)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"UPDATE Usuarios SET 
								Nome = @nome, 
								CPF = @cpf, 
								Email = @email, 
								Celular = @celular, 
								Imagem = @imagem 
						  WHERE ID = @id";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@id", usuario.ID);
            comando.Parameters.AddWithValue("@nome", usuario.Nome);
            comando.Parameters.AddWithValue("@cpf", usuario.CPF);
            comando.Parameters.AddWithValue("@email", usuario.Email);
            comando.Parameters.AddWithValue("@celular", usuario.Celular);
            comando.Parameters.AddWithValue("@imagem", usuario.Imagem);

            comando.ExecuteNonQuery();
            conexao.Close();
        }

        public void RemoverUsuario(int id)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"DELETE FROM Usuarios WHERE ID = @id";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@id", id);

            comando.ExecuteNonQuery();
            conexao.Close();
        }
    }
}
