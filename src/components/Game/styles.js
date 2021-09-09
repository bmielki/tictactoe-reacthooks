import styled from 'styled-components';

export const Title = styled.h2`
    font-size: 3.2rem;
    font-family: 'BebasNeue', sans-serif;
    margin: 1rem 0 1rem;
`;

export const Subtitle = styled.h2`
    font-size: 1.3rem;
    font-family: 'Urbanist', sans-serif;
    margin: 0.3rem 0 0.3rem 0;
`;

export const Board = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const BoardRow = styled.div`
    display: flex;
    flex-direction: row;
`;
export const Square = styled.button`
    width: 3rem;
    height: 3rem;
    margin: 0;
    font-size: 1.6rem;
    font-family: 'Freedoka One', sans-serif;
    border-color: black;
    border-style: ${props => props.border || "none none none none"};
    color: ${props => props.color === 'X' ? 'red' : 'blue'};
`;

export const DescriptionSquare = styled(Square)`
    background-color: transparent;
    font-size: 1.2rem;
    color: black;
    font-family: 'Urbanist', sans-serif;
`;

export const BoardHistory = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
`;
export const HistoryButton = styled.button`
    width: 11rem;
    height: 2.1rem;
    margin-top: 0.4rem;
    border: 0;
    border-radius: 0.4rem;
    font-size: 0.9rem;
    font-family: 'Urbanist', sans-serif;

    &:hover {
        background-image: linear-gradient(rgba(0, 0, 0, 0.05) 0 0);
      }
`;

export const WinnerButton = styled(HistoryButton)`
    font-size: 1.0rem;
    font-family: 'Urbanist', sans-serif;
    background-color: transparent;

    &:hover {
        background-image: none;
      }
`;




