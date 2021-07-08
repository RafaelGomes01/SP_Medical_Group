import React, { Component, useCallback, useState, useEffect } from 'react';
import { parseJwt } from '../../services/auth';
import api from '../../services/api';
import './listaConsultas.css'
import consulta from '../../pages/consulta/consulta';
export default function ListaConsultas() {

    //const [idUsuario, setIdUsuario] = useState(0);
    //const [listaConsultas, setListaConsultas] = useState([]);
    const [listaConsultas, setListaConsultas] = useState([])

    useEffect(() => {
        console.log(localStorage.getItem('usuario-token') );

        console.log(parseJwt().jti);

        api.post('/consulta/minhas' + parseJwt().jti).then(resposta => setListaConsultas(resposta.data));
    }, []);

    return (
        <div className='body-body-consulta'>
            <table>
                <tbody>
                    <tr>
                        <th>RG Paciente</th>
                        <th>Idade Paciente</th>
                        <th>Telefone Paciente</th>
                        <th>CRM</th>
                        <th>Situação</th>
                        <th>Observação</th>
                    </tr>
                    {
                        listaConsultas.map(consulta => {
                            return (
                                <tr key={consulta.idConsulta}>
                                    <td>{consulta.idPacienteNavigation.rg}</td>
                                    <td>{consulta.idPacienteNavigation.idadePaciente}</td>
                                    <td>{consulta.idPacienteNavigation.telefone}</td>
                                    <td>{consulta.idMedicoNavigation.crm}</td>
                                    <td>{consulta.idSituacaoNavigation.situacao1}</td>
                                    <td>{consulta.descricao}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}