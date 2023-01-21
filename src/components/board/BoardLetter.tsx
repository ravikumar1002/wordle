import { useAppData } from "../../context/app-context";

interface IBoardLetterProps {
  letterPos: number;
  attemptVal: number;
}

const BoardLetter = (props: IBoardLetterProps) => {
  const { board } = useAppData();

  const { letterPos, attemptVal } = props;
  const letter = board[attemptVal][letterPos];
  return <div className="letter"> {letter}</div>;
};

export default BoardLetter;
