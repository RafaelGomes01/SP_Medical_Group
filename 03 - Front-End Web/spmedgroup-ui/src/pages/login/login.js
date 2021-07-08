import { useState  } from 'react'
import { Link } from 'react-router-dom'
import './login.css'

import api from '../../services/api'
import loginImage from '../../assets/img/login-image.svg'

import { parseJwt, usuarioAutenticado } from '../../services/auth';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function efetuarLogin(event) {
        event.preventDefault();

        let dados = {
            email: email.setEmail, 
            senha: senha.['']
        }

        api.post('/Login', dados).then(resposta => localStorage.setItem('usuario-token', resposta.data.token))
        console.log(usuarioAutenticado())
        if(parseJwt().role === "1"){
            window.location.href = window.location.origin + '/'
        }

        else if (parseJwt().role === "2") {
            window.location.href = window.location.origin + '/consulta'
        }

        else if(parseJwt().role === "3"){
            window.location.href = window.location.origin + '/consulta'
        }
    }

    function atualizaEmail(campo) {
        setEmail({ setEmail: campo.target.value })
    }

    function atualizaSenha(campo) {
        setSenha({ [campo.target.name]: campo.target.value })
    }

    return (
        // <div className='bodyContent'>
        //     <div className='loginContent'>
        //         <div className='login' onSubmit={efetuarLogin}>
        //             <h1>Login</h1>
        //             <form>
        //                 <label>Email</label>
        //                 <input type='text' onChange={atualizaEmail}/>

        //                 <label>Senha</label>
        //                 <input type='text' onChange={atualizaSenha}/>

        //                 <button type='submit'>Cadastrar</button>
        //             </form>
        //         </div>
        //     </div>
        // </div>

        <div className="body-content">
            <div className="login-content">
                <div className="login-left">
                    <div className="loginLeft-content">
                        <h1>SP Medical Group</h1>
                        <h2>Bem vindo de volta</h2>
                        <p>Aenean luctus lobortis tellus, vel ornare enim molestie condimentum. Curabitur lacinia nisi vitae
                            velit volutpat venenatis. Aenean luctus lobortis tellus, vel ornare enim molestie condimentum.
                            Curabitur lacinia nisi vitae velit volutpat venenatis.</p>
                        <img src={loginImage} alt="imageLogin" />
                        <p>Rafael Gomes © 2021</p>
                    </div>
                </div>
                <div className="login-right">
                    <div className="loginRight-content">
                        <h1>Login</h1>
                        <p>Aenean luctus lobortis tellus, vel ornare enim molestie condimentum. Curabitur lacinia nisi vitae
                            velit volutpat venenatis.</p>
                        <div className="form-content">
                            <form action="login" className="form" onSubmit={efetuarLogin}>
                                <label htmlFor="login">Seu Email</label>
                                <input type="email" onChange={atualizaEmail}/>
                                <label htmlFor="login">Sua Senha</label>
                                <input type="text" onChange={atualizaSenha}/>
                                <div className="manterConectado">
                                    <input type="checkbox" id="manterConectado" name="conectado" />
                                    <label htmlFor="manterConectado">Mantenha-me conectado</label>
                                </div>
                                <button type='submit'>Fazer Login</button>
                            </form>
                        </div>
                        <div className="loginRight-footer">
                            <p>Ainda não tem uma conta ? <span>Cadastre-se</span></p>
                            <p>Esqueceu a senha ?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}