using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SPMedicalGroup.Domains;
using SPMedicalGroup.Interfaces;
using SPMedicalGroup.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SPMedicalGroup.Controllers
{
    [Produces ("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private IUsuarioRepository _usuarioRepository { get; set; }

        public UsuarioController()
        {
            _usuarioRepository = new UsuarioRepository();
        }

        [HttpGet]
        public IActionResult Read()
        {
            return Ok(_usuarioRepository.Read());
        }

        [HttpGet("{id}")]
        public IActionResult ReadById(int id)
        {
            return Ok(_usuarioRepository.ReadById(id));
        }

        [Authorize (Roles = "1")]
        [HttpPost]
        public IActionResult Create(Usuario novoUsuario)
        {
            _usuarioRepository.Create(novoUsuario);
            return Ok(novoUsuario.IdUsuario);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, Usuario usuarioAtualizado)
        {
            _usuarioRepository.Update(id, usuarioAtualizado);
            return StatusCode(200);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _usuarioRepository.Delete(id);
            return StatusCode(200);
        }
    }
}
