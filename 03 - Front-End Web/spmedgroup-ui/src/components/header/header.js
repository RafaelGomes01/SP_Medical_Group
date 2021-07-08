import '../../assets/css/header.css'

import plus from '../../assets/img/plus.png'
import search from '../../assets/img/search.png'
import notification from '../../assets/img/notification.png'
import user from '../../assets/img/user.png'

import Modal from '../../components/modal/modal';
import { useState } from 'react'

export default function Header() {

    const [show, setShow] = useState(false);
    const closeModalHandler = () => setShow(false);

    return (
        <header className="header-page">
            <Modal show={show} closeModalHandler={closeModalHandler} />
            <div className="btn-new" id="btn-new" onClick={() => setShow(true)}>
                <img src={plus} alt="plus" />
                <p>Novo</p>
            </div>
            <div className="header-menu">
                <img src={search} alt="Lupa" />
                <img src={notification} alt="Notificação" />
                <hr />
                <div className="user">
                    <img src={user} alt="Usuario" />
                    <p>Rafael Gomes - Adm</p>
                </div>
            </div>
        </header>
    )
}