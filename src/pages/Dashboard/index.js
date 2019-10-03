import React, { useState, useMemo } from 'react';
import { format, addDays, subDays } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import ScrollBar from 'react-perfect-scrollbar';
import api from '../../services/api';
import { Container, Time } from './styles';

export default function Dashboard() {

    const [ date, setDate ] = useState(new Date());

    const dateFormatted = useMemo(() => {
        return format(date, "dd 'de' MMMM", { locale: pt });
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
                    <Time past>
                        <strong>08:00</strong>
                        <span>Rodrigo Grassi</span>
                    </Time>
                    <Time available>
                        <strong>09:00</strong>
                        <span>Rodrigo Grassi</span>
                    </Time>
                    <Time>
                        <strong>10:00</strong>
                        <span>Rodrigo Grassi</span>
                    </Time>
                    <Time>
                        <strong>11:00</strong>
                        <span>Rodrigo Grassi</span>
                    </Time>
                    <Time past>
                        <strong>08:00</strong>
                        <span>Rodrigo Grassi</span>
                    </Time>
                    <Time available>
                        <strong>09:00</strong>
                        <span>Rodrigo Grassi</span>
                    </Time>
                    <Time>
                        <strong>10:00</strong>
                        <span>Rodrigo Grassi</span>
                    </Time>
                    <Time>
                        <strong>11:00</strong>
                        <span>Rodrigo Grassi</span>
                    </Time>
                    <Time past>
                        <strong>08:00</strong>
                        <span>Rodrigo Grassi</span>
                    </Time>
                    <Time available>
                        <strong>09:00</strong>
                        <span>Rodrigo Grassi</span>
                    </Time>
                    <Time>
                        <strong>10:00</strong>
                        <span>Rodrigo Grassi</span>
                    </Time>
                    <Time>
                        <strong>11:00</strong>
                        <span>Rodrigo Grassi</span>
                    </Time>
                    <Time past>
                        <strong>08:00</strong>
                        <span>Rodrigo Grassi</span>
                    </Time>
                    <Time available>
                        <strong>09:00</strong>
                        <span>Rodrigo Grassi</span>
                    </Time>
                    <Time>
                        <strong>10:00</strong>
                        <span>Rodrigo Grassi</span>
                    </Time>
                    <Time>
                        <strong>11:00</strong>
                        <span>Rodrigo Grassi</span>
                    </Time>
                    <Time past>
                        <strong>08:00</strong>
                        <span>Rodrigo Grassi</span>
                    </Time>
                    <Time available>
                        <strong>09:00</strong>
                        <span>Rodrigo Grassi</span>
                    </Time>
                    <Time>
                        <strong>10:00</strong>
                        <span>Rodrigo Grassi</span>
                    </Time>
                    <Time>
                        <strong>11:00</strong>
                        <span>Rodrigo Grassi</span>
                    </Time>
                    <Time past>
                        <strong>08:00</strong>
                        <span>Rodrigo Grassi</span>
                    </Time>
                    <Time available>
                        <strong>09:00</strong>
                        <span>Rodrigo Grassi</span>
                    </Time>
                    <Time>
                        <strong>10:00</strong>
                        <span>Rodrigo Grassi</span>
                    </Time>
                    <Time>
                        <strong>11:00</strong>
                        <span>Rodrigo Grassi</span>
                    </Time>
                    <Time past>
                        <strong>08:00</strong>
                        <span>Rodrigo Grassi</span>
                    </Time>
                    <Time available>
                        <strong>09:00</strong>
                        <span>Rodrigo Grassi</span>
                    </Time>
                    <Time>
                        <strong>10:00</strong>
                        <span>Rodrigo Grassi</span>
                    </Time>
                    <Time>
                        <strong>11:00</strong>
                        <span>Rodrigo Grassi</span>
                    </Time>
                    <Time past>
                        <strong>08:00</strong>
                        <span>Rodrigo Grassi</span>
                    </Time>
                    <Time available>
                        <strong>09:00</strong>
                        <span>Rodrigo Grassi</span>
                    </Time>
                    <Time>
                        <strong>10:00</strong>
                        <span>Rodrigo Grassi</span>
                    </Time>
                    <Time>
                        <strong>11:00</strong>
                        <span>Rodrigo Grassi</span>
                    </Time>
                    <Time past>
                        <strong>08:00</strong>
                        <span>Rodrigo Grassi</span>
                    </Time>
                    <Time available>
                        <strong>09:00</strong>
                        <span>Rodrigo Grassi</span>
                    </Time>
                    <Time>
                        <strong>10:00</strong>
                        <span>Rodrigo Grassi</span>
                    </Time>
                    <Time>
                        <strong>11:00</strong>
                        <span>Rodrigo Grassi</span>
                    </Time>
                    <Time past>
                        <strong>08:00</strong>
                        <span>Rodrigo Grassi</span>
                    </Time>
                    <Time available>
                        <strong>09:00</strong>
                        <span>Rodrigo Grassi</span>
                    </Time>
                    <Time>
                        <strong>10:00</strong>
                        <span>Rodrigo Grassi</span>
                    </Time>
                    <Time>
                        <strong>11:00</strong>
                        <span>Rodrigo Grassi</span>
                    </Time>
                </ul>
            </ScrollBar>
        </Container>
    )
}