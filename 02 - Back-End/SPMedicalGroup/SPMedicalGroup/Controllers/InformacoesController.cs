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
    public class InformacoesController : ControllerBase
    {
        private IMedicoRepository _informacaoesRepository { get; set; }

        public InformacoesController()
        {
            _informacaoesRepository = new MedicoRepository();
        }

        /*[HttpPost]
        public IActionResult infoCard(int teste)
        {
            //return Ok(_informacaoesRepository.infoCard(dataInicio, dataFinal));
            return Ok(teste);
        }*/

        [HttpPost]
        public IActionResult Create(int teste)
        {
            //_informacaoesRepository.infoCard()
            return Ok(teste);
        }
    }
}
