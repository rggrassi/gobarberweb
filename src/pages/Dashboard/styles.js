import styled from 'styled-components';

export const Container = styled.div`
    max-width: 600px;
    margin: 50px auto;   
    height: calc(100% - 194px);

    header {
        display: flex;
        align-items: center;
        justify-content: center;

        button {
            border: 0;
            background: none;
        }

        strong {
            color: #fff;
            font-size: 2rem;
            margin: 0 15px;
        }
    }

    ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 15px;
        padding-right: 12px;
    }

    .scrollbar-container {
        margin-top: 30px;
        padding: 5px;
    }

    .ps__rail-y {
        opacity: 0.6;
    }
`
export const Time = styled.li`
    padding: 20px;
    border-radius: 4px;
    background: #fff;

    opacity: ${props => props.past ? 0.6 : 1}

    strong {
        display: block;
        color: ${props => props.available ? '#999' : '#7159c1'};
        font-size: 1.70rem;
        font-weight: normal;
    }

    span {
        display: block;
        font-size: 1.40rem;
        margin-top: 3px;
        color: ${props => props.available ? '#999' : '#666'}
    }
`