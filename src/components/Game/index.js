import React, { useEffect, useState, Fragment } from "react";
import { Title, Subtitle, Square, DescriptionSquare, BoardRow, Board, HistoryButton, BoardHistory, WinnerButton } from './styles';

function Game() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [boardHistory, setBoardHistory] = useState([Array(9).fill(null)]);
    const [xIsNext, setxIsNext] = useState(true);
    const [winner, setWinner] = useState(null);


    useEffect(() => {
        function verifyWinner() {
            const options = [
                //Horizontal
                [1, 2, 3], [4, 5, 6], [7, 8, 9],
                //Vertical
                [1, 4, 7], [2, 5, 8], [3, 6, 9],
                //Diagonal
                [1, 5, 9], [3, 5, 7]
            ];
    
            for (let i = 0; i < options.length; i++) {
                const [a, b, c] = options[i];
                if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                    setWinner(board[a]);
                    return true;
                }
            }
            setWinner(null);
            return false;
        }
        verifyWinner();
    }, [board])

    function renderSquare(i) {
        let border = '';
        switch(i) {
            case 1: border = "none solid solid none"; break;
            case 2: border = "none solid solid solid"; break;
            case 3: border = "none none solid solid"; break;
            case 4: border = "solid solid solid none"; break;
            case 5: border = "solid solid solid solid"; break;
            case 6: border = "solid none solid solid"; break;
            case 7: border = "solid solid none none"; break;
            case 8: border = "solid solid none solid"; break;
            case 9: border = "solid none none solid"; break;
            default: border = "none none none none";
        }

        return (
            <Square
                onClick={()=> handleSquareClick(i)}
                border={border}
                color={board[i]}>
                {board[i]}
            </Square>
        )
    }

    function handleSquareClick(i) {
        let newBoard = board.slice();

        if (newBoard[i] || winner) {return}

        newBoard[i] = xIsNext ? 'X' : 'O';

        setBoard(newBoard);
        setxIsNext(!xIsNext);

        let newBoardHistory = boardHistory.slice();
        newBoardHistory.push(newBoard);
        setBoardHistory(newBoardHistory);
    }

    function renderHistoryButton(i) {
        return (
            <HistoryButton
                onClick={()=> handleHistoryButtonClick(i)}>
                    {describePlay(i)}
            </HistoryButton>
        )
    }

    function handleHistoryButtonClick(i) {
        let newBoardHistory = boardHistory.slice();
        while (newBoardHistory.length > i + 1) {
            newBoardHistory.pop();
        }
        setBoard(newBoardHistory[newBoardHistory.length - 1]);
        setBoardHistory(newBoardHistory);
        setxIsNext(newBoardHistory.length%2 === 1? true: false);
    }

    function handleNewGameClick() {
        setBoard(Array(9).fill(null));
        setBoardHistory([Array(9).fill(null)]);
        setxIsNext(true);
        setWinner(null);
    }

    function describePlay(i) {
        if (i === 0) {
            return 'Game started'
        } else {
            const currentPlay = boardHistory[i];
            const lastPlay = boardHistory[i - 1];

            for (let j = 0; j < currentPlay.length; j++) {
                if (currentPlay[j] !== lastPlay[j]) {

                    const letter = j <= 3 ? 'A' : j <= 6 ? 'B' : 'C';
                    const number = j%3 === 0 ? '3' : j%3;

                    return `Player ${currentPlay[j]} played ${letter}${number}`;
                }
            }
        }

    }

    function renderScore() {
        if (winner) {
            return (
                <React.Fragment>
                    <Subtitle>Winner: {winner}</Subtitle>
                    <HistoryButton onClick={() => handleNewGameClick()}>Play new game</HistoryButton>
                </React.Fragment>
            )
        } else {
            return (<Subtitle>Next player: {xIsNext ? 'X': 'O'}</Subtitle>)
        }
    }

    

    return (
        <Fragment>
            <Title># Tic Tac Toe #</Title>
            <Board>
                {renderScore()}
                <BoardRow>
                    <DescriptionSquare />
                    <DescriptionSquare>1</DescriptionSquare>
                    <DescriptionSquare>2</DescriptionSquare>
                    <DescriptionSquare>3</DescriptionSquare>
                </BoardRow>
                <BoardRow>
                    <DescriptionSquare>A</DescriptionSquare>
                    {renderSquare(1)}
                    {renderSquare(2)}
                    {renderSquare(3)}
                </BoardRow>
                <BoardRow>
                    <DescriptionSquare>B</DescriptionSquare>
                    {renderSquare(4)}
                    {renderSquare(5)}
                    {renderSquare(6)}
                </BoardRow>
                <BoardRow>
                    <DescriptionSquare>C</DescriptionSquare>
                    {renderSquare(7)}
                    {renderSquare(8)}
                    {renderSquare(9)}
                </BoardRow>
            </Board>
            <BoardHistory>
                <Subtitle>Board History</Subtitle>
                {boardHistory.map((board, index) => (
                    renderHistoryButton(index)
                ))}
                {winner && <WinnerButton>Player {winner} has won!</WinnerButton>}
            </BoardHistory>
        </Fragment>
    )
};

export default Game;