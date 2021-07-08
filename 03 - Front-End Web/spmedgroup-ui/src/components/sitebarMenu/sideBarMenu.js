import { Link } from "react-router-dom";

import '../../assets/css/sideBarMenu.css';

import logo from '../../assets/img/logo.png'
import dashboardIcon from '../../assets/img/dashboard-icon.png'
import pacienteIcon from '../../assets/img/paciente-icon.png'
import consultaIcon from '../../assets/img/consulta-icon.png'
import medicoIcon from '../../assets/img/medico-icon.png'
import hospitalIcon from '../../assets/img/hospital-icon.png'
import calendarioIcon from '../../assets/img/calendario-icon.png'

export default function sideBarMenu() {
    return (
            <div className="nav-left-content">

                <div className="icon-header">
                <Link to="/"><img src={logo} alt="dashboard-icon" /></Link>
                    <hr />
                </div>

                <div className="icon">
                    <Link to="/"><img src={dashboardIcon} alt="dashboard-icon" /></Link>
                </div>

                <div className="icon">
                    <a href=''><img src={pacienteIcon} alt="paciente-icon" /></a>
                </div>

                <div className="icon">
                    <Link to="/consulta"><img src={consultaIcon} alt="consulta-icon" /></Link>
                </div>

                <div className="icon">
                    <a href><img src={medicoIcon} alt="medico-icon" /></a>
                </div>

                <div className="icon">
                    <a href><img src={hospitalIcon} alt="hospital-icon" /></a>
                </div>

                <div className="icon">
                    <a href><img src={calendarioIcon} alt="calendario-icon" /></a>
                </div>

            </div>
    )
}