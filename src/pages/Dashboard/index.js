import React, { useState, useMemo, useEffect } from 'react';
import { format, addDays, subDays, startOfDay, setHours, isBefore, isEqual, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { utcToZonedTime } from 'date-fns-tz';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import ScrollBar from 'react-perfect-scrollbar';
import api from '../../services/api';
import { Container, Time } from './styles';

const rangeOfHours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export default function Dashboard() {
    const [ date, setDate ] = useState(startOfDay(new Date()));
    const [ schedules, setSchedules ] = useState([]);
    
    const dateFormatted = useMemo(() => {
        return format(date, "dd 'de' MMMM", { locale: pt });
    }, [date]);
    
    useEffect(() => {
        async function fetchSchedule() {
            const response = await api.get('/schedule', {
                params: { date }
            })

            const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

            const schedules = rangeOfHours.map(hour => {
                const checkTime = setHours(date, hour);
                const compareTime = utcToZonedTime(checkTime, timezone);
                return {
                    time: `${hour}:00h`,
                    past: isBefore(compareTime, new Date()),
                    appointment: response.data.find(schedule => (
                        isEqual(parseISO(schedule.date), compareTime)
                    ))
                }
            })

            setSchedules(schedules);
        }
        fetchSchedule();
    }, [date]);

    function handlePrevDay() {
        setDate(subDays(date, 1));
    }

    function handleNextDay() {
        setDate(addDays(date, 1));
    }

    return (
        <Container>
            <header>
                <button type='button' onClick={handlePrevDay}>
                    <MdChevronLeft size={36} color='#fff'/>
                </button>
                <strong>{dateFormatted}</strong>
                <button type='button' onClick={handleNextDay}>
                    <MdChevronRight size={36} color='#fff'/>
                </button>
            </header>

            <ScrollBar options={{ wheelSpeed: 0.15 }} >
                <ul>
                    { schedules.map(schedule => (
                        <Time key={schedule.time} past={schedule.past} available={!schedule.appointment}>
                            <strong>{schedule.time}</strong>
                            <span>{ schedule.appointment ? schedule.appointment.user.name : 'Em aberto' }</span>
                        </Time>
                    )) }
                </ul>
            </ScrollBar>
        </Container>
    )
}