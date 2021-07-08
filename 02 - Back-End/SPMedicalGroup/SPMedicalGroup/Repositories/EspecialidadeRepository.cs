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
    public class EspecialidadeRepository : IEspecialidadeRepository
    {
        SPMedGroupContext ctx = new SPMedGroupContext();

        public void Create(Especialidade novaEspecialidade)
        {
            ctx.Especialidades.Add(novaEspecialidade);
            ctx.SaveChanges();
        }

        public List<Especialidade> Read()
        {
            return ctx.Especialidades
                .Include(e => e.Medicos)
                .ToList();
        }

        public Especialidade ReadById(int id)
        {
            return ctx.Especialidades.FirstOrDefault(e => e.IdEspecialidade == id);
        }

        public void Update(int id, Especialidade especialidadeAtualizada)
        {
            Especialidade especialidadeBuscado = ctx.Especialidades.Find(id);
            if (especialidadeBuscado.TituloEspecialidade != null)
            {
                especialidadeBuscado.TituloEspecialidade = especialidadeAtualizada.TituloEspecialidade;
            }
            ctx.Update(especialidadeBuscado);
            ctx.SaveChanges();
        }

        public void Delete(int id)
        {
            Especialidade especialidadeBuscado = ctx.Especialidades.Find(id);
            ctx.Especialidades.Remove(especialidadeBuscado);
            ctx.SaveChanges();
        }
    }
}
