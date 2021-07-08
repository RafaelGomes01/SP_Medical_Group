using SPMedicalGroup.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SPMedicalGroup.Interfaces
{
    interface IUsuarioRepository
    {
        void Create(Usuario novoUsuario);
        List<Usuario> Read();
        Usuario ReadById(int id);
        void Update(int id, Usuario usuarioAtualizado);
        void Delete(int id);
        Usuario Login(string email, string senha);
    }
}
