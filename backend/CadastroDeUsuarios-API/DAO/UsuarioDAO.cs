using CadastroDeUsuariosAPI.DTO;
using MySqlConnector;
using System.Collections.Generic;

namespace CadastroDeUsuariosAPI.DAO
{
	public class UsuarioDAO
	{
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

				usuarios.Add(usuario);
			}
			conexao.Close();

			return usuarios;
		}

		public void CadastrarUsuario(UsuarioDTO usuario)
		{
			var conexao = ConnectionFactory.Build();
			conexao.Open();

			var query = @"INSERT INTO Usuario (Nome, CPF, Email, Celular) VALUES
						(@nome,@cpf,@email,@celular)";

			var comando = new MySqlCommand(query, conexao);
			comando.Parameters.AddWithValue("@nome", usuario.Nome);
			comando.Parameters.AddWithValue("@cpf", usuario.CPF);
			comando.Parameters.AddWithValue("@email", usuario.Email);
			comando.Parameters.AddWithValue("@celular", usuario.Celular);

			comando.ExecuteNonQuery();
			conexao.Close();
		}
	}
}
