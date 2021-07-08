using SPMedicalGroup.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SPMedicalGroup.Interfaces
{
    interface IMedicoRepository
    {
        void Create(Medico novoMedico);
        List<Medico> Read();
        Medico ReadById(int id);
        void Update(int id, Medico medicoAtualizado);
        void Delete(int id);
        string infoCard(string dataInicio, string dataFinal);
    }
}
