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
    public class ClinicaController : ControllerBase
    {
        private IClinicaRepository _clinicaRepository { get; set; }

        public ClinicaController()
        {
            _clinicaRepository = new ClinicaRepository();
        }

        [HttpGet]
        public IActionResult Read()
        {
            return Ok(_clinicaRepository.Read());
        }

        [HttpGet("{id}")]
        public IActionResult ReadById(int id)
        {
            return Ok(_clinicaRepository.ReadById(id));
        }

        [HttpPost]
        public IActionResult Create(Clinica novaClinica)
        {
            _clinicaRepository.Create(novaClinica);
            return StatusCode(200);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, Clinica clinicaAtualizada)
        {
            _clinicaRepository.Update(id, clinicaAtualizada);
            return StatusCode(200);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _clinicaRepository.Delete(id);
            return StatusCode(200);
        }
    }
}
