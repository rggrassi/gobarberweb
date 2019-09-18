import React, { useState, useEffect, useMemo } from 'react';
import { formatDistance, parseISO } from 'date-fns';
import { Container, Badge, Scroll, NotificationList, Notification } from './styles';
import { MdNotifications } from 'react-icons/md';
import api from '../../services/api';
import ptBr from 'date-fns/locale/pt-BR';
 
export default function Notifications() {

    const [visible, setVisible] = useState(false);
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        async function fetchNotifications() {
            const response = await api.get('/notifications');

            const data = response.data.map(notification => {
                return { 
                    ...notification, 
                    timeDistance: formatDistance(
                        parseISO(notification.createdAt), 
                        new Date(), 
                        { addSuffix: true, locale: ptBr }
                    )
                }
            }) 
            setNotifications(data);
        }
        fetchNotifications();
    }, [])

    const hasUnread = useMemo(
        () => Boolean(notifications.find(notification => notification.read === false)),
        [notifications]
    )

    function handleToggleVisible() {
        setVisible(!visible);
    }

    async function handleMarkAsRead(id) {
        await api.put(`/notifications/${id}`);
        setNotifications(
            notifications.map(notification => 
                notification._id === id ? { ...notification, read: true } : notification
            )
        )
    }

    return (
        <Container>
            <Badge onClick={handleToggleVisible} hasUnread={hasUnread}>
                <MdNotifications color='#7159c1' size={20}/>
            </Badge>
            <NotificationList visible={visible}>
                <Scroll>  
                    { notifications.map(notification => {
                        return (
                            <Notification key={notification._id} unread={!notification.read}>
                                <p>{notification.content}</p>
                                <time>{notification.timeDistance}</time>
                                { !notification.read &&
                                    <button 
                                        type='button' 
                                        onClick={() => handleMarkAsRead(notification._id)}
                                    >
                                        Marcar como lida
                                    </button>
                                }
                            </Notification>
                        )
                    })}  
                </Scroll>
            </NotificationList>
        </Container>
    )
}