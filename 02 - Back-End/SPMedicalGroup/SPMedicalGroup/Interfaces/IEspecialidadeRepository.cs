using SPMedicalGroup.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SPMedicalGroup.Interfaces
{
    interface IEspecialidadeRepository
    {
        void Create(Especialidade novaEspecialidade);
        List<Especialidade> Read();
        Especialidade ReadById(int id);
        void Update(int id, Especialidade especialidadeAtualizada);
        void Delete(int id);
    }
}
