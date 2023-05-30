using CadastroDeUsuariosAPI.DAO;
using CadastroDeUsuariosAPI.DTO;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CadastroDeUsuariosAPI.Controllers
{
	//Porta de entrada e saída de requisições da API
	[Route("api/[controller]")]
	[ApiController]
    [Authorize]
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

		[HttpGet]
        [Route("{id}")]
		public IActionResult ListarPorID([FromRoute]int id)
		{
			var dao = new UsuarioDAO();
			var usuario = dao.ListarUsuarioPorId(id);

			return Ok(usuario);
		}

		[HttpPost]
		public IActionResult Cadastrar([FromBody] UsuarioDTO usuario)
		{
			var dao = new UsuarioDAO();
			dao.CadastrarUsuario(usuario);

			return Ok();
		}

		[HttpPut]
		public IActionResult Editar([FromBody] UsuarioDTO usuario)
		{
			var dao = new UsuarioDAO();
			dao.EditarUsuario(usuario);

			return Ok();
		}

		[HttpDelete]
		[Route("{id}")]
		public IActionResult Remover([FromRoute] int id)
		{
			var dao = new UsuarioDAO();
			dao.RemoverUsuario(id);

			return Ok();
		}
	}
}
