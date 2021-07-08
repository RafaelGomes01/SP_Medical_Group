using SPMedicalGroup.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SPMedicalGroup.Interfaces
{
    interface IConsultaRepository
    {
        void Create(Consulta novaConsulta);
        List<Consulta> Read();
        List<Consulta> ReadById(int id);
        void Update(int id, Consulta consultaAtualizada);
        void Delete(int id);

    }
}
