import React, { Component, useCallback, useState, useEffect } from 'react';

import './modal.css';

import paciente from '../../assets/img/modal/paciente.png';
import medico from '../../assets/img/modal/medico.png';
import adm from '../../assets/img/modal/adm.png';
import consulta from '../../assets/img/modal/consulta.png';
import hospital from '../../assets/img/modal/hospital.png';
import closeModal from '../../assets/img/close-modal.png';

import api from '../../services/api';

export default function Modal({ show, closeModalHandler }) {
    // Paciente
    const [idUsuario, setIdUsuario] = useState(0);
    const [idade, setIdade] = useState('');
    const [cpf, setCpf] = useState('');
    const [rg, setRg] = useState('');
    const [telefone, setTelefone] = useState('');

    // Medico
    const [idEspecialidade, setIdEspecialidade] = useState(0);
    const [idClinica, setIdClinica] = useState(0);
    const [crm, setCrm] = useState(0);

    // Listas
    const [listaClinicas, setListaClinicas] = useState([]);
    const [listaEspecialidade, setListaEspecialidade] = useState([]); 
    const [listaUsuarios, setListaUsuarios] = useState([]);

    function atualizaCampoUsuario(campo){
        setIdUsuario({ [campo.target.name] : campo.target.value })
    };

    function atualizaCampoEspecialidade(campo){
        setIdEspecialidade({ [campo.target.name] : campo.target.value })
    };

    function atualizaCampoClinica(campo){
        setIdClinica({ [campo.target.name] : campo.target.value })
    };

    useEffect(() => {
        api.get('/Usuario').then(resposta => {setListaUsuarios(resposta.data)});
        api.get('/Especialidade').then(resposta => {setListaEspecialidade(resposta.data)});
        api.get('/clinica').then(resposta => {setListaClinicas(resposta.data)});
    }, []);

    function cadastrarPaciente(event) {
        event.preventDefault();
        let idUsuarioToInt = (idUsuario.idUsuario);
        let paciente  = {
            idUsuario: parseInt(idUsuarioToInt),
            idadePaciente: idade,
            rg: rg,
            cpf: cpf,
            telefone: telefone,
            dataCadastro : '2020-03-22'
        }
        api.post('/paciente', paciente)
    }

    function CadastrarMedico(event) {
        event.preventDefault();
        let idUsuarioPost = parseInt(idUsuario.idUsuario);
        let idEspecialidadePost = parseInt(idEspecialidade.idEspecialidade);
        let idClinicaPost = parseInt(idClinica.idClinica);

        let medicoPost = {
            idEspecialidade : 1,
            idUsuario : 1,
            idClinica : 2,
            crm : 19231,
            dataCadastro : "2020-05-12"
        }

        console.log(medicoPost)

        api.post('/Medico', medicoPost)

    }

    // Paciente
    var pacienteIcon = document.getElementById("paciente");
    var modalPaciente = document.getElementById("paciente-modal-div");

    function pacienteOpen() {
        modalPaciente.style.display = "inline";

        modalMedico.style.display = "none";
        modalAdm.style.display = "none";
        modalConsulta.style.display = "none";
        modalHospital.style.display = "none";

        pacienteIcon.style.borderBottom = "none"; pacienteIcon.style.backgroundColor = "#F3F3F4";

        medicoIcon.style.borderBottom = "0.5px solid rgba(0, 0, 0, 0.1)"; medicoIcon.style.backgroundColor = "#FFFFFF";
        admIcon.style.borderBottom = "0.5px solid rgba(0, 0, 0, 0.1)"; admIcon.style.backgroundColor = "#FFFFFF";
        consultaIcon.style.borderBottom = "0.5px solid rgba(0, 0, 0, 0.1)"; consultaIcon.style.backgroundColor = "#FFFFFF";
        hospitalIcon.style.borderBottom = "0.5px solid rgba(0, 0, 0, 0.1)"; hospitalIcon.style.backgroundColor = "#FFFFFF";
    }

    // Medico
    var medicoIcon = document.getElementById("medico");
    var modalMedico = document.getElementById("medico-modal-div");

    function medicoOpen() {
        modalMedico.style.display = "inline";

        modalPaciente.style.display = "none";
        modalAdm.style.display = "none";
        modalConsulta.style.display = "none";
        modalHospital.style.display = "none";

        medicoIcon.style.borderBottom = "none"; medicoIcon.style.backgroundColor = "#F3F3F4";

        pacienteIcon.style.borderBottom = "0.5px solid rgba(0, 0, 0, 0.1)"; pacienteIcon.style.backgroundColor = "#FFFFFF";
        admIcon.style.borderBottom = "0.5px solid rgba(0, 0, 0, 0.1)"; admIcon.style.backgroundColor = "#FFFFFF";
        consultaIcon.style.borderBottom = "0.5px solid rgba(0, 0, 0, 0.1)"; consultaIcon.style.backgroundColor = "#FFFFFF";
        hospitalIcon.style.borderBottom = "0.5px solid rgba(0, 0, 0, 0.1)"; hospitalIcon.style.backgroundColor = "#FFFFFF";
    }

    // Adm
    var admIcon = document.getElementById("adm");
    var modalAdm = document.getElementById("adm-modal-div");

    function admOpen() {
        modalAdm.style.display = "inline";

        modalPaciente.style.display = "none";
        modalMedico.style.display = "none";
        modalConsulta.style.display = "none";
        modalHospital.style.display = "none";

        admIcon.style.borderBottom = "none"; admIcon.style.backgroundColor = "#F3F3F4";

        pacienteIcon.style.borderBottom = "0.5px solid rgba(0, 0, 0, 0.1)"; pacienteIcon.style.backgroundColor = "#FFFFFF";
        medicoIcon.style.borderBottom = "0.5px solid rgba(0, 0, 0, 0.1)"; medicoIcon.style.backgroundColor = "#FFFFFF";
        consultaIcon.style.borderBottom = "0.5px solid rgba(0, 0, 0, 0.1)"; consultaIcon.style.backgroundColor = "#FFFFFF";
        hospitalIcon.style.borderBottom = "0.5px solid rgba(0, 0, 0, 0.1)"; hospitalIcon.style.backgroundColor = "#FFFFFF";
    }

    // Consulta
    var consultaIcon = document.getElementById("consulta");
    var modalConsulta = document.getElementById("consulta-modal-div");

    function consultaOpen() {
        modalConsulta.style.display = "inline";

        modalPaciente.style.display = "none";
        modalMedico.style.display = "none";
        modalAdm.style.display = "none";
        modalHospital.style.display = "none";

        consultaIcon.style.borderBottom = "none"; consultaIcon.style.backgroundColor = "#F3F3F4";

        pacienteIcon.style.borderBottom = "0.5px solid rgba(0, 0, 0, 0.1)"; pacienteIcon.style.backgroundColor = "#FFFFFF";
        medicoIcon.style.borderBottom = "0.5px solid rgba(0, 0, 0, 0.1)"; medicoIcon.style.backgroundColor = "#FFFFFF";
        admIcon.style.borderBottom = "0.5px solid rgba(0, 0, 0, 0.1)"; admIcon.style.backgroundColor = "#FFFFFF";
        hospitalIcon.style.borderBottom = "0.5px solid rgba(0, 0, 0, 0.1)"; hospitalIcon.style.backgroundColor = "#FFFFFF";
    }

    // Hospital
    var hospitalIcon = document.getElementById("hospital");
    var modalHospital = document.getElementById("hospital-modal-div");

    function hospitalOpen() {
        modalHospital.style.display = "inline";

        modalPaciente.style.display = "none";
        modalMedico.style.display = "none";
        modalAdm.style.display = "none";
        modalConsulta.style.display = "none";

        hospitalIcon.style.borderBottom = "none"; hospitalIcon.style.backgroundColor = "#F3F3F4";

        pacienteIcon.style.borderBottom = "0.5px solid rgba(0, 0, 0, 0.1)"; pacienteIcon.style.backgroundColor = "#FFFFFF";
        medicoIcon.style.borderBottom = "0.5px solid rgba(0, 0, 0, 0.1)"; medicoIcon.style.backgroundColor = "#FFFFFF";
        admIcon.style.borderBottom = "0.5px solid rgba(0, 0, 0, 0.1)"; admIcon.style.backgroundColor = "#FFFFFF";
        consultaIcon.style.borderBottom = "0.5px solid rgba(0, 0, 0, 0.1)"; consultaIcon.style.backgroundColor = "#FFFFFF";
    }

    function CloseModal() {
        modalPaciente.style.display = "none"; pacienteIcon.style.backgroundColor = "#FFFFFF"; pacienteIcon.style.borderBottom = "1px solid rgba(0, 0, 0, 0.1)";
        modalMedico.style.display = "none"; medicoIcon.style.backgroundColor = "#FFFFFF"; medicoIcon.style.borderBottom = "1px solid rgba(0, 0, 0, 0.1)";
        modalAdm.style.display = "none"; admIcon.style.backgroundColor = "#FFFFFF"; admIcon.style.borderBottom = "1px solid rgba(0, 0, 0, 0.1)";
        modalConsulta.style.display = "none"; consultaIcon.style.backgroundColor = "#FFFFFF"; consultaIcon.style.borderBottom = "1px solid rgba(0, 0, 0, 0.1)";
        modalHospital.style.display = "none"; hospitalIcon.style.backgroundColor = "#FFFFFF"; hospitalIcon.style.borderBottom = "1px solid rgba(0, 0, 0, 0.1)";
    }

    return (
        <div className="modal-wrapper"
            style={{
                transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
                opacity: show ? '1' : '0'
            }}
        >
            <div className="modal-header">
                <p>Novo</p>

                <div onClick={CloseModal}>
                    <div className="close-modal" id="close-modal" onClick={closeModalHandler} >
                        <img src={closeModal} alt="fechar" />
                    </div>
                </div>

            </div>

            <div className="modal-body">
                <div className="icons-modal-new">
                    <div id="paciente" onClick={pacienteOpen}><img src={paciente} alt="paciente" /></div>
                    <div id="medico" onClick={medicoOpen}><img src={medico} alt="medico" /></div>
                    <div id="adm" onClick={admOpen}><img src={adm} alt="adm" /></div>
                    <div id="consulta" onClick={consultaOpen}><img src={consulta} alt="Consulta" /></div>
                    <div id="hospital" onClick={hospitalOpen}><img src={hospital} alt="hospital" /></div>
                </div>

                <div className="paciente-modal-new" id="paciente-modal-div">
                    <div className="modal-content">
                        <div className="body-content-body">
                            <div className="body-header">
                                <h1>Cadastrar Paciente</h1>
                                <p>Mas devo explicar-lhe como nasceu toda essa idéia equivocada de denunciar um prazer e louvar a dor, e lhe darei um relato completo do sistema, expondo os ensinamentos reais.</p>
                                <hr />
                            </div>

                            <form className="body-body" id='cadastrarPaciente' onSubmit={cadastrarPaciente}>
                                <div className="linha-body">
                                    <div className="formulario-body">
                                        <label>Usuario</label>
                                        <select name="idUsuario" value={idUsuario} onChange={atualizaCampoUsuario}>
                                            {
                                                listaUsuarios.map(usuario => {
                                                    return(
                                                        <option key={usuario.idUsuario} value={usuario.idUsuario}>
                                                            {usuario.nome}
                                                        </option>
                                                    );
                                                })                                             
                                            }
                                        </select>
                                    </div>
                                    <div className="formulario-body">
                                        <label>Idade</label>
                                        <input type='text' name='idade' value={idade} onChange={(event) => setIdade(event.target.value)} placeholder='18' />
                                    </div>
                                </div>

                                <div className="linha-body">
                                    <div className="formulario-body">
                                        <label>Certidão de Pessoa Fisica (CPF)</label>
                                        <input type='text' name='cpf' value={cpf} onChange={(event) => setCpf(event.target.value)} placeholder='262.357.850-89' />
                                    </div>
                                    <div className="formulario-body">
                                        <label>Registro Geral (RG)</label>
                                        <input type='text' name='rg' value={rg} onChange={(event) => setRg(event.target.value)} placeholder='30.395.046-8' />
                                    </div>
                                </div>

                                <div className="linha-body">
                                    <div className="formulario-body">
                                        <label>Numero de Telefone</label>
                                        <input type='text' name='telefone' value={telefone} onChange={(event) => setTelefone(event.target.value)} placeholder='(37) 20576-2006' />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="body-footer">
                            <button className="cancelar">Cancelar</button>
                            <button className="cadastrar" form="cadastrarPaciente" type='submit'>Cadastrar</button>
                        </div>

                    </div>
                </div>

                <div className="medico-modal-new" id="medico-modal-div">
                    <div className="modal-content">
                        <div className="body-content-body">
                            <div className="body-header">
                                <h1>Cadastrar Médico</h1>
                                <p>Mas devo explicar-lhe como nasceu toda essa idéia equivocada de denunciar um prazer e louvar a dor, e lhe darei um relato completo do sistema, expondo os ensinamentos reais.</p>
                                <hr />
                            </div>

                            <form className="body-body" id='cadastrarMedico' onSubmit={CadastrarMedico}>
                            <div className="linha-body">
                                    <div className="formulario-body">
                                        <label>Usuario</label>
                                        <select name="idUsuario" value={idUsuario} onChange={atualizaCampoUsuario}>
                                            {
                                                listaUsuarios.map(usuario => {
                                                    return(
                                                        <option key={usuario.idUsuario} value={usuario.idUsuario}>
                                                            {usuario.nome}
                                                        </option>
                                                    );
                                                })                                             
                                            }
                                        </select>
                                    </div>
                                    <div className="formulario-body">
                                        <label>CRM</label>
                                        <input type='text' name='crm' value={crm} onChange={(event) => setCrm(event.target.value)} placeholder='17638' />
                                    </div>
                                </div>

                                <div className="linha-body">
                                    <div className="formulario-body">
                                        <label>Especialidade</label>
                                        <select name="idEspecialidade" value={idEspecialidade} onChange={atualizaCampoEspecialidade}>
                                            {
                                                listaEspecialidade.map(especialidade => {
                                                    return(
                                                        <option key={especialidade.idEspecialidade} value={especialidade.idEspecialidade}>
                                                            {especialidade.tituloEspecialidade}
                                                        </option>
                                                    );
                                                })                                             
                                            }
                                        </select>
                                    </div>
                                    <div className="formulario-body">
                                    <label>Clinica</label>
                                        <select name="idClinica" value={idClinica} onChange={atualizaCampoClinica}>
                                            {
                                                listaClinicas.map(clinica => {
                                                    return(
                                                        <option key={clinica.idClinica} value={clinica.idClinica}>
                                                            {clinica.nomeFantasia}
                                                        </option>
                                                    );
                                                })                                             
                                            }
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="body-footer">
                            <button className="cancelar">Cancelar</button>
                            <button className="cadastrar" form="cadastrarMedico" type='submit'>Cadastrar</button>
                        </div>

                    </div>
                </div>

                <div className="adm-modal-new" id="adm-modal-div">
                    <div className="modal-content">
                        <div className="body-content-body">
                            <div className="body-header">
                                <h1>Cadastrar Administrador</h1>
                                <p>Mas devo explicar-lhe como nasceu toda essa idéia equivocada de denunciar um prazer e louvar a dor, e lhe darei um relato completo do sistema, expondo os ensinamentos reais.</p>
                                <hr />
                            </div>

                            <form className="body-body">
                                <div className="linha-body">
                                    <div className="formulario-body">
                                        <label>Nome</label>
                                        <input type='text' placeholder='Rafael Soares Gomes' />
                                    </div>
                                    <div className="formulario-body">
                                        <label>Data de Nascimento</label>
                                        <input type='text' placeholder='22/04/2003' />
                                    </div>
                                </div>

                                <div className="linha-body">
                                    <div className="formulario-body">
                                        <label>Email</label>
                                        <input type='text' placeholder='rafamax@gmail.com' />
                                    </div>
                                    <div className="formulario-body">
                                        <label>Senha</label>
                                        <input type='text' placeholder='12345@Abcd' />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="body-footer">
                            <button className="cancelar">Cancelar</button>
                            <button className="cadastrar">Cadastrar</button>
                        </div>

                    </div>
                </div>

                <div className="consulta-modal-new" id="consulta-modal-div">
                    <div className="modal-content">
                        <div className="body-content-body">
                            <div className="body-header">
                                <h1>Cadastrar Consulta</h1>
                                <p>Mas devo explicar-lhe como nasceu toda essa idéia equivocada de denunciar um prazer e louvar a dor, e lhe darei um relato completo do sistema, expondo os ensinamentos reais.</p>
                                <hr />
                            </div>

                            <form className="body-body">
                                <div className="linha-body">
                                    <div className="formulario-body">
                                        <label>Nome Paciente</label>
                                        <input type='text' placeholder='Rafael Soares Gomes' />
                                    </div>
                                    <div className="formulario-body">
                                        <label>Data da Consulta</label>
                                        <input type='text' placeholder='22/04/2003' />
                                    </div>
                                </div>

                                <div className="linha-body">
                                    <div className="formulario-body">
                                        <label>Situação</label>
                                        <select name="Mes">
                                            <option value="Jan">Teste</option>
                                            <option value="Fev">Fevereiro</option>
                                            <option value="Mar">Março</option>
                                        </select>
                                    </div>
                                    <div className="formulario-body">
                                        <label>Medico Responsavel</label>
                                        <select name="Mes">
                                            <option value="Jan">Teste</option>
                                            <option value="Fev">Fevereiro</option>
                                            <option value="Mar">Março</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="linha-body">
                                    <div className="formulario-body-textarea">
                                        <label>Descrição</label>
                                        <textarea />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="body-footer">
                            <button className="cancelar">Cancelar</button>
                            <button className="cadastrar">Cadastrar</button>
                        </div>

                    </div>
                </div>

                <div className="hospital-modal-new" id="hospital-modal-div">
                    <div className="modal-content">
                        <div className="body-content-body">
                            <div className="body-header">
                                <h1>Cadastrar Clinica</h1>
                                <p>Mas devo explicar-lhe como nasceu toda essa idéia equivocada de denunciar um prazer e louvar a dor, e lhe darei um relato completo do sistema, expondo os ensinamentos reais.</p>
                                <hr />
                            </div>

                            <form className="body-body">
                                <div className="linha-body">
                                    <div className="formulario-body">
                                        <label>CNPJ</label>
                                        <input type='text' placeholder='Rafael Soares Gomes' />
                                    </div>
                                    <div className="formulario-body">
                                        <label>Nome Fantasia</label>
                                        <input type='text' placeholder='22/04/2003' />
                                    </div>
                                </div>

                                <div className="linha-body">
                                    <div className="formulario-body">
                                        <label>Razão Social</label>
                                        <input type='text' placeholder='rafamax@gmail.com' />
                                    </div>
                                </div>

                                <div className='endereco-body'>
                                    <div className='endereco-header'>
                                        <h2>Endereço</h2>
                                        <hr />
                                    </div>

                                    <div className="linha-body">
                                        <div className="formulario-body">
                                            <label>CEP</label>
                                            <input type='text' placeholder='Rafael Soares Gomes' />
                                        </div>
                                    </div>

                                    <div className="linha-body">
                                        <div className="formulario-body">
                                            <label>Rua</label>
                                            <input type='text' placeholder='Rafael Soares Gomes' />
                                        </div>
                                        <div className="formulario-body">
                                            <label>Bairro</label>
                                            <input type='text' placeholder='22/04/2003' />
                                        </div>
                                    </div>

                                    <div className="linha-body">
                                        <div className="formulario-body">
                                            <label>Numero</label>
                                            <input type='text' placeholder='Rafael Soares Gomes' />
                                        </div>
                                        <div className="formulario-body">
                                            <label>Complemento</label>
                                            <input type='text' placeholder='22/04/2003' />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="body-footer">
                            <button className="cancelar">Cancelar</button>
                            <button className="cadastrar">Cadastrar</button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}