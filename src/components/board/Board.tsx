import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import BoardLetter from "./BoardLetter";
import "./board.css";
const Board = () => {
  return (
    <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
      <div className="board">
        <div className="row">
          <BoardLetter letterPos={0} attemptVal={0} />
          <BoardLetter letterPos={1} attemptVal={0} />
          <BoardLetter letterPos={2} attemptVal={0} />
          <BoardLetter letterPos={3} attemptVal={0} />
          <BoardLetter letterPos={4} attemptVal={0} />
        </div>
        <div className="row">
          <BoardLetter letterPos={0} attemptVal={1} />
          <BoardLetter letterPos={1} attemptVal={1} />
          <BoardLetter letterPos={2} attemptVal={1} />
          <BoardLetter letterPos={3} attemptVal={1} />
          <BoardLetter letterPos={4} attemptVal={1} />
        </div>
        <div className="row">
          <BoardLetter letterPos={0} attemptVal={2} />
          <BoardLetter letterPos={1} attemptVal={2} />
          <BoardLetter letterPos={2} attemptVal={2} />
          <BoardLetter letterPos={3} attemptVal={2} />
          <BoardLetter letterPos={4} attemptVal={2} />
        </div>
        <div className="row">
          <BoardLetter letterPos={0} attemptVal={3} />
          <BoardLetter letterPos={1} attemptVal={3} />
          <BoardLetter letterPos={2} attemptVal={3} />
          <BoardLetter letterPos={3} attemptVal={3} />
          <BoardLetter letterPos={4} attemptVal={3} />
        </div>
        <div className="row">
          <BoardLetter letterPos={0} attemptVal={4} />
          <BoardLetter letterPos={1} attemptVal={4} />
          <BoardLetter letterPos={2} attemptVal={4} />
          <BoardLetter letterPos={3} attemptVal={4} />
          <BoardLetter letterPos={4} attemptVal={4} />
        </div>
        <div className="row">
          <BoardLetter letterPos={0} attemptVal={5} />
          <BoardLetter letterPos={1} attemptVal={5} />
          <BoardLetter letterPos={2} attemptVal={5} />
          <BoardLetter letterPos={3} attemptVal={5} />
          <BoardLetter letterPos={4} attemptVal={5} />
        </div>
      </div>
    </Box>
  );
};

export default Board;
