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
    public class EspecialidadeController : ControllerBase
    {
        private IEspecialidadeRepository _especialidadeRepository { get; set; }

        public EspecialidadeController()
        {
            _especialidadeRepository = new EspecialidadeRepository();
        }

        [HttpGet]
        public IActionResult Read()
        {
            return Ok(_especialidadeRepository.Read());
        }

        [HttpGet("{id}")]
        public IActionResult ReadById(int id)
        {
            return Ok(_especialidadeRepository.ReadById(id));
        }

        [HttpPost]
        public IActionResult Create(Especialidade novaEspecialidade)
        {
            _especialidadeRepository.Create(novaEspecialidade);
            return StatusCode(200);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, Especialidade especialidadeAtualizada)
        {
            _especialidadeRepository.Update(id, especialidadeAtualizada);
            return StatusCode(200);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _especialidadeRepository.Delete(id);
            return StatusCode(200);
        }
    }
}
