using SPMedicalGroup.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SPMedicalGroup.Interfaces
{
    interface IPacienteRepository
    {
        void Create(Paciente novoPaciente);
        List<Paciente> Read();
        Paciente ReadById(int id);
        void Update(int id, Paciente pacienteAtualizado);
        void Delete(int id);
    }
}
