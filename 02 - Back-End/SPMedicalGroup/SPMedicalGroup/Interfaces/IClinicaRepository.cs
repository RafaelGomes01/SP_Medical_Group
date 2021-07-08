using SPMedicalGroup.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SPMedicalGroup.Interfaces
{
    interface IClinicaRepository
    {
        void Create(Clinica novaClinica);
        List<Clinica> Read();
        Clinica ReadById(int id);
        void Update(int id, Clinica clinicaAtualizada);
        void Delete(int id);
    }
}
