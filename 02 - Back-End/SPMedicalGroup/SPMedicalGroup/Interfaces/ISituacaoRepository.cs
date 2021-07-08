using SPMedicalGroup.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SPMedicalGroup.Interfaces
{
    interface ISituacaoRepository
    {
        void Create(Situacao novaSituacao);
        List<Situacao> Read();
        Situacao ReadById(int id);
        void Update(int id, Situacao situacaoAtualizada);
        void Delete(int id);
    }
}
