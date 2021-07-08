using Microsoft.EntityFrameworkCore;
using SPMedicalGroup.Contexts;
using SPMedicalGroup.Domains;
using SPMedicalGroup.Interfaces;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace SPMedicalGroup.Repositories
{
    public class MedicoRepository : IMedicoRepository
    {
        SPMedGroupContext ctx = new SPMedGroupContext();

        public void Create(Medico novoMedico)
        {
            ctx.Medicos.Add(novoMedico);
            ctx.SaveChanges();
        }

        public List<Medico> Read()
        {
            return ctx.Medicos
                .Include(e => e.IdClinicaNavigation)
                .Include(e => e.IdEspecialidadeNavigation)
                .Include(e => e.IdUsuarioNavigation)
                .Include(e => e.Consulta)
                .ToList();
        }

        public Medico ReadById(int id)
        {
            return ctx.Medicos.FirstOrDefault(e => e.IdMedico == id);
        }

        public void Update(int id, Medico medicoAtualizado)
        {
            Medico medicoBuscado = ctx.Medicos.Find(id);
            if (medicoBuscado.Crm != null)
            {
                medicoBuscado.Crm = medicoAtualizado.Crm;
                medicoBuscado.DataCadastro = medicoAtualizado.DataCadastro;
            }
            ctx.Update(medicoBuscado);
            ctx.SaveChanges();
        }

        public void Delete(int id)
        {
            Medico medicoBuscado = ctx.Medicos.Find(id);
            ctx.Medicos.Remove(medicoBuscado);
            ctx.SaveChanges();
        }

        public string infoCard(string dataInicio, string dataFinal)
        {
            List<Medico> medicos = new List<Medico>();

            medicos = ctx.Medicos.ToList();

            var filtrada = new List<Medico>();

            //dataInicio = "01/06/2020";
            //dataFinal = "30/06/2020";

            DateTime dtInicial = DateTime.Parse(dataInicio);

            DateTime dtFinal = DateTime.Parse(dataFinal);

            /*foreach (var medico in medicos)
            {
                if (medico.DataCadastro >= dtInicial.Date && medico.DataCadastro <= dtFinal.Date)
                {
                    filtrada.Add(medico);
                }
            }

            return filtrada.Count();*/

            string dtResposta = dtFinal + " " + dtInicial;

            return dtResposta;
        }
    }
}
