using CadastroDeUsuariosAPI.DAO;
using CadastroDeUsuariosAPI.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CadastroDeUsuariosAPI.Controllers
{
	//Porta de entrada e saída de requisições da API
	[Route("api/[controller]")]
	[ApiController]
	public class UsuarioController : ControllerBase
	{
		//Método, rota e status
		[HttpGet]
		public IActionResult Listar()
		{
			var dao = new UsuarioDAO();
			var usuarios = dao.ListarUsuario();

			return Ok(usuarios);
		}

		[HttpPost]
		public IActionResult Cadastrar([FromBody] UsuarioDTO usuario)
		{
			var dao = new UsuarioDAO();
			dao.CadastrarUsuario(usuario);

			return Ok();
		}
	}
}
