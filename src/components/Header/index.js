import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Profile } from "./styles";
import logo from '../../assets/logo_purple.svg'
import Notifications from '../Notifications'

export default function Header() {
    return (
        <Container>
            <Content>
                <nav>
                    <img src={logo} alt="GoBarber"/>
                    <Link to='/dashboard'>Dashboard</Link>
                </nav>
                <aside>
                    <Notifications />
                    <Profile>
                        <div>
                            <strong>Rodrigo Grassi</strong>
                            <Link to='/profile'>Meu perfil</Link>
                        </div>
                        <img src='https://api.adorable.io/avatars/55/abott@adorable.png' alt="Rodrigo"/>
                    </Profile>
                </aside>
            </Content>
        </Container>
    )
}