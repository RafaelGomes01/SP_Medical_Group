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
    public class SituacaoController : ControllerBase
    {
        private ISituacaoRepository _situacaoRepository { get; set; }

        public SituacaoController()
        {
            _situacaoRepository = new SituacaoRepository();
        }

        [HttpGet]
        public IActionResult Read()
        {
            return Ok(_situacaoRepository.Read());
        }

        [HttpGet("{id}")]
        public IActionResult ReadById(int id)
        {
            return Ok(_situacaoRepository.ReadById(id));
        }

        [HttpPost]
        public IActionResult Create(Situacao novaSituacao)
        {
            _situacaoRepository.Create(novaSituacao);
            return StatusCode(200);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, Situacao situacaoAtualizada)
        {
            _situacaoRepository.Update(id, situacaoAtualizada);
            return StatusCode(200);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _situacaoRepository.Delete(id);
            return StatusCode(200);
        }
    }
}
