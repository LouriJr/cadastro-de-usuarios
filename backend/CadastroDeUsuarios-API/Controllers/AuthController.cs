using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace CadastroDeUsuariosAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {

        [HttpGet]
        [Route("Login")]
        public IActionResult Cadastrar()
        {

            var token = GenerateJwtToken("", "PU8a9W4sv2opkqlOwmgsn3w3Innlc4D5");
            return Ok(token);
        }

        string GenerateJwtToken(string username, string secretKey)
        {

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey));
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, "nome-do-usuario"),
                    new Claim(ClaimTypes.Email, "email-do-usuario"),

                };


            var token = new JwtSecurityToken(
                "","",
                claims,
                expires: DateTime.UtcNow.AddMinutes(30),
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
