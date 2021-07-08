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
    public class ClinicaRepository : IClinicaRepository
    {
        SPMedGroupContext ctx = new SPMedGroupContext();

        public void Create(Clinica novaClinica)
        {
            ctx.Clinicas.Add(novaClinica);
            ctx.SaveChanges();
        }

        public List<Clinica> Read()
        {
            return ctx.Clinicas
                .Include(e => e.Medicos)
                .ToList();
        }

        public Clinica ReadById(int id)
        {
            return ctx.Clinicas.FirstOrDefault(e => e.IdClinica == id);
        }

        public void Update(int id, Clinica clinicaAtualizada)
        {
            Clinica clinicaBuscada = ctx.Clinicas.Find(id);
            if (clinicaBuscada.Cnpj != null)
            {
                clinicaBuscada.Cnpj = clinicaAtualizada.Cnpj;
                clinicaBuscada.NomeFantasia = clinicaAtualizada.NomeFantasia;
                clinicaBuscada.RazaoSocial = clinicaAtualizada.RazaoSocial;
                clinicaBuscada.Endereco = clinicaAtualizada.Endereco;
            }
            ctx.Update(clinicaBuscada);
            ctx.SaveChanges();
        }

        public void Delete(int id)
        {
            Clinica clinicaBuscada = ctx.Clinicas.Find(id);
            ctx.Clinicas.Remove(clinicaBuscada);
            ctx.SaveChanges();
        }
    }
}
