using Microsoft.EntityFrameworkCore;
using SPMedicalGroup.Contexts;
using SPMedicalGroup.Domains;
using SPMedicalGroup.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SPMedicalGroup.Repositories
{
    public class ConsultaRepository : IConsultaRepository
    {
        SPMedGroupContext ctx = new SPMedGroupContext();

        public void Create(Consulta novaConsulta)
        {
            ctx.Consulta.Add(novaConsulta);
            ctx.SaveChanges();
        }

        public List<Consulta> Read()
        {
            return ctx.Consulta
                .Include(e => e.IdMedicoNavigation)
                .Include(e => e.IdPacienteNavigation)
                .Include(e => e.IdSituacaoNavigation)
                .ToList();
        }

        public List<Consulta> ReadById(int id)
        {
            return ctx.Consulta
                .Include(e => e.IdMedicoNavigation)
                .Include(e => e.IdPacienteNavigation)
                .Include(e => e.IdSituacaoNavigation)
                .Where(p => p.Id == id)
                .ToList();

        }

        public void Update(int id, Consulta consultaAtualizada)
        {
            Consulta consultaBuscado = ctx.Consulta.Find(id);
            if (consultaBuscado.Descricao != null)
            {
                consultaBuscado.DataConsulta = consultaAtualizada.DataConsulta;
                consultaBuscado.Descricao = consultaAtualizada.Descricao;
            }
            ctx.Update(consultaBuscado);
            ctx.SaveChanges();
        }

        public void Delete(int id)
        {
            Consulta consultaBuscado = ctx.Consulta.Find(id);
            ctx.Consulta.Remove(consultaBuscado);
            ctx.SaveChanges();
        }
    }
}
