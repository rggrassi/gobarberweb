import React from 'react';
import { Container, Badge, NotificationList, Notification } from './styles';
import { MdNotifications } from 'react-icons/md';

export default function Notifications() {
    return (
        <Container>
            <Badge hasUnread>
                <MdNotifications color='#7159c1' size={20}/>
            </Badge>
            <NotificationList>
                <Notification>
                    <p>Você possui um novo agendamento para amanhã</p>
                    <time>há 2 dias</time>
                    <button type='button'>Marcar coomo lida</button>
                </Notification>
                <Notification>
                    <p>Você possui um novo agendamento para amanhã</p>
                    <time>há 2 dias</time>
                    <button type='button'>Marcar coomo lida</button>
                </Notification>
                <Notification>
                    <p>Você possui um novo agendamento para amanhã</p>
                    <time>há 2 dias</time>
                    <button type='button'>Marcar coomo lida</button>
                </Notification>
            </NotificationList>
        </Container>
    )
}