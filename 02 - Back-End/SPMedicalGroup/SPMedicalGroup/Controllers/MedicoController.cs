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
    public class MedicoController : ControllerBase
    {
        private IMedicoRepository _medicoRepository { get; set; }

        public MedicoController()
        {
            _medicoRepository  = new MedicoRepository();
        }

        [HttpGet]
        public IActionResult Read()
        {
            return Ok(_medicoRepository .Read());
        }

        [HttpGet("{id}")]
        public IActionResult ReadById(int id)
        {
            return Ok(_medicoRepository .ReadById(id));
        }

        [HttpPost]
        public IActionResult Create(Medico novoMedico)
        {
            _medicoRepository .Create(novoMedico);
            return StatusCode(200);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, Medico medicoAtualizada)
        {
            _medicoRepository .Update(id, medicoAtualizada);
            return StatusCode(200);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _medicoRepository .Delete(id);
            return StatusCode(200);
        }
    }
}
