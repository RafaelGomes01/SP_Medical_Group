using SPMedicalGroup.Contexts;
using SPMedicalGroup.Domains;
using SPMedicalGroup.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SPMedicalGroup.Repositories
{
    public class SituacaoRepository : ISituacaoRepository
    {
        SPMedGroupContext ctx = new SPMedGroupContext();

        public void Create(Situacao novaSituacao)
        {
            ctx.Situacaos.Add(novaSituacao);
            ctx.SaveChanges();
        }

        public List<Situacao> Read()
        {
            return ctx.Situacaos.ToList();
        }

        public Situacao ReadById(int id)
        {
            return ctx.Situacaos.FirstOrDefault(e => e.IdSituacao == id);
        }

        public void Update(int id, Situacao situacaoAtualizada)
        {
            Situacao situacaoBuscado = ctx.Situacaos.Find(id);
            if (situacaoBuscado.Situacao1 != null)
            {
                situacaoBuscado.Situacao1 = situacaoAtualizada.Situacao1;
            }
            ctx.Update(situacaoBuscado);
            ctx.SaveChanges();
        }

        public void Delete(int id)
        {
            Situacao situacaoBuscado = ctx.Situacaos.Find(id);
            ctx.Situacaos.Remove(situacaoBuscado);
            ctx.SaveChanges();
        }
    }
}
