using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SPMedicalGroup.Domains;
using SPMedicalGroup.Interfaces;
using SPMedicalGroup.Repositories;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;

namespace SPMedicalGroup.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class ConsultaController : ControllerBase
    {
        private IConsultaRepository _consultaRepository { get; set; }

        public ConsultaController()
        {
            _consultaRepository = new ConsultaRepository();
        }

        //[Authorize(Roles = "2")]
        [HttpGet]
        public IActionResult Read()
        {
            return Ok(_consultaRepository.Read());
        }

        [HttpGet("minhas/{id}")]
        public IActionResult ReadById(int id)
        {
            Console.WriteLine(id);
            return Ok(_consultaRepository.ReadById(id));
        }

        [Authorize(Roles = "1")]
        [HttpPost]
        public IActionResult Create(Consulta novaConsulta)
        {
            _consultaRepository.Create(novaConsulta);
            return StatusCode(200);
        }

        [Authorize(Roles = "2")]
        [HttpPut("{id}")]
        public IActionResult Update(int id, Consulta consultaAtualizada)
        {
            _consultaRepository.Update(id, consultaAtualizada);
            return StatusCode(200);
        }

        [Authorize(Roles = "1")]
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _consultaRepository.Delete(id);
            return StatusCode(200);
        }
    }
}
