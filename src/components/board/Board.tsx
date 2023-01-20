import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import BoardLetter from "./BoardLetter";
import "./board.css";
const Board = () => {
  return (
    <Box sx={{ flexGrow: 1, display:"flex", justifyContent:"center" }}>
      <div className="board">
        <div className="row">
          <BoardLetter />
          <BoardLetter />
          <BoardLetter />
          <BoardLetter />
          <BoardLetter />
        </div>
        <div className="row">
          <BoardLetter />
          <BoardLetter />
          <BoardLetter />
          <BoardLetter />
          <BoardLetter />
        </div>
        <div className="row">
          <BoardLetter />
          <BoardLetter />
          <BoardLetter />
          <BoardLetter />
          <BoardLetter />
        </div>
        <div className="row">
          <BoardLetter />
          <BoardLetter />
          <BoardLetter />
          <BoardLetter />
          <BoardLetter />
        </div>
        <div className="row">
          <BoardLetter />
          <BoardLetter />
          <BoardLetter />
          <BoardLetter />
          <BoardLetter />
        </div>
        <div className="row">
          <BoardLetter />
          <BoardLetter />
          <BoardLetter />
          <BoardLetter />
          <BoardLetter />
        </div>
      </div>
    </Box>
  );
};

export default Board;
