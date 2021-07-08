using SPMedicalGroup.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SPMedicalGroup.Interfaces
{
    interface ITipoUsuarioRepository
    {
        void Create(TipoUsuario novoTipoUsuario);
        List<TipoUsuario> Read();
        TipoUsuario ReadById(int id);
        void Update(int id, TipoUsuario tipoUsuarioAtualizado);
        void Delete(int id);
    }
}
