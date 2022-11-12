using MySqlConnector;

namespace CadastroDeUsuariosAPI.DAO
{
	public class ConnectionFactory
	{
		public static MySqlConnection Build()
		{
			return new MySqlConnection("Server=localhost;Database=CadUsuario;Uid=root;Pwd=root;");
		}
	}
}
