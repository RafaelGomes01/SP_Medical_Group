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
    public class PacienteRepository : IPacienteRepository
    {
        SPMedGroupContext ctx = new SPMedGroupContext();

        public void Create(Paciente novoPaciente)
        {
            ctx.Pacientes.Add(novoPaciente);
            ctx.SaveChanges();
        }

        public List<Paciente> Read()
        {
            return ctx.Pacientes
                .Include(e => e.IdUsuarioNavigation)
                .Include(e => e.Consulta)
                .ToList();
        }

        public Paciente ReadById(int id)
        {
            return ctx.Pacientes.FirstOrDefault(e => e.IdPaciente == id);
        }

        public void Update(int id, Paciente pacienteAtualizado)
        {
            Paciente pacienteBuscado = ctx.Pacientes.Find(id);
            if (pacienteBuscado.Rg != null)
            {
                pacienteBuscado.IdadePaciente = pacienteAtualizado.IdadePaciente;
                pacienteBuscado.Rg = pacienteAtualizado.Rg;
                pacienteBuscado.Cpf = pacienteAtualizado.Cpf;
                pacienteBuscado.Telefone = pacienteAtualizado.Telefone;
                pacienteBuscado.DataCadastro = pacienteAtualizado.DataCadastro;
            }
            ctx.Pacientes.Update(pacienteBuscado);
            ctx.SaveChanges();
        }

        public void Delete(int id)
        {
            Paciente pacienteBuscado = ctx.Pacientes.Find(id);
            ctx.Pacientes.Remove(pacienteBuscado);
            ctx.SaveChanges();
        }
    }
}
