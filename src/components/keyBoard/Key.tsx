import { Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useAppData } from "../../context/app-context";

interface IKeyProps {
  keyLetter: string;
}

export const Key = (props: IKeyProps) => {
  const { keyLetter } = props;
  const { onSelectLetter, onDelete } = useAppData();

  const selectKeyLetter = () => {
    if (keyLetter === "ENTER") {
      console.log("entre");
    } else if (keyLetter === "BACK") {
      console.log("delete")
      onDelete();
    } else {
      onSelectLetter(keyLetter);
    }
  };

  return (
    <Grid xs={1}>
      <Button variant="contained" onClick={selectKeyLetter}>
        {keyLetter}
      </Button>
    </Grid>
  );
};
