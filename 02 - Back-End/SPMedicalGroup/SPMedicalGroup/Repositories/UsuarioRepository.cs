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
    public class UsuarioRepository : IUsuarioRepository
    {
        SPMedGroupContext ctx = new SPMedGroupContext();

        public void Create(Usuario novoUsuario)
        {
            ctx.Usuarios.Add(novoUsuario);
            ctx.SaveChanges();
        }

        public List<Usuario> Read()
        {
            return ctx.Usuarios
                .Include(e => e.IdTipoUsuarioNavigation)
                .Include(e => e.Medicos)
                .Include(e => e.Pacientes)
                .ToList();
        }

        public Usuario ReadById(int id)
        {
            return ctx.Usuarios.FirstOrDefault(e => e.IdUsuario == id);
        }

        public void Update(int id, Usuario usuarioAtualizado)
        {
            Usuario usuarioBuscado = ctx.Usuarios.Find(id);
            if (usuarioBuscado.Nome != null)
            {
                usuarioBuscado.IdTipoUsuario = usuarioAtualizado.IdTipoUsuario;
                usuarioBuscado.Nome = usuarioAtualizado.Nome;
                usuarioBuscado.Email = usuarioAtualizado.Email;
                usuarioBuscado.Senha = usuarioAtualizado.Senha;
            }
            ctx.Update(usuarioBuscado);
            ctx.SaveChanges();
        }

        public void Delete(int id)
        {
            Usuario usuarioBuscado = ctx.Usuarios.Find(id);
            ctx.Usuarios.Remove(usuarioBuscado);
            ctx.SaveChanges();
        }

        public Usuario Login(string email, string senha)
        {
            Usuario usuarioBuscado = ctx.Usuarios.FirstOrDefault(e => e.Email == email && e.Senha == senha);

            if (usuarioBuscado != null)
            {
                return usuarioBuscado;
            }

            return null;
        }
    }
}
