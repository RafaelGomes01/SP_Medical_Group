using SPMedicalGroup.Contexts;
using SPMedicalGroup.Domains;
using SPMedicalGroup.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SPMedicalGroup.Repositories
{
    public class TipoUsuarioRepository : ITipoUsuarioRepository
    {
        SPMedGroupContext ctx = new SPMedGroupContext();

        public void Create(TipoUsuario novoTipoUsuario)
        {
            ctx.TipoUsuarios.Add(novoTipoUsuario);
            ctx.SaveChanges();
        }

        public List<TipoUsuario> Read()
        {
            return ctx.TipoUsuarios.ToList();
        }

        public TipoUsuario ReadById(int id)
        {
            return ctx.TipoUsuarios.FirstOrDefault(e => e.IdTipoUsuario == id);
        }

        public void Update(int id, TipoUsuario tipoUsuarioAtualizado)
        {
            TipoUsuario tipoUsuarioBuscado = ctx.TipoUsuarios.Find(id);
            if(tipoUsuarioBuscado.TituloTipoUsuario != null)
            {
                tipoUsuarioBuscado.TituloTipoUsuario = tipoUsuarioAtualizado.TituloTipoUsuario;
            }
            ctx.Update(tipoUsuarioBuscado);
            ctx.SaveChanges();
        }

        public void Delete(int id)
        {
            TipoUsuario tipoUsuarioBuscado = ctx.TipoUsuarios.Find(id);
            ctx.TipoUsuarios.Remove(tipoUsuarioBuscado);
            ctx.SaveChanges();
        }
    }
}
