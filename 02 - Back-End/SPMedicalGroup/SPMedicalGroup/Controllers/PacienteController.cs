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
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class PacienteController : ControllerBase
    {
        private IPacienteRepository _pacienteRepository { get; set; }

        public PacienteController()
        {
            _pacienteRepository = new PacienteRepository();
        }

        [HttpGet]
        public IActionResult Read()
        {
            return Ok(_pacienteRepository.Read());
        }

        [HttpGet("{id}")]
        public IActionResult ReadById(int id)
        {
            return Ok(_pacienteRepository.ReadById(id));
        }

        [HttpPost]
        public IActionResult Create(Paciente novoPaciente)
        {
            _pacienteRepository.Create(novoPaciente);
            return StatusCode(200);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, Paciente pacienteAtualizado)
        {
            _pacienteRepository.Update(id, pacienteAtualizado);
            return StatusCode(200);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _pacienteRepository.Delete(id);
            return StatusCode(200);
        }
    }
}
