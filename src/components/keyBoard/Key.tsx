import { Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useAppData } from "../../context/app-context";

interface IKeyProps {
  keyLetter: string;
  disabled?: any;
}

export const Key = (props: IKeyProps) => {
  const { keyLetter, disabled } = props;
  const { onSelectLetter, onDelete, onEnter } = useAppData();

  const selectKeyLetter = () => {
    if (keyLetter === "ENTER") {
      onEnter();
    } else if (keyLetter === "BACK") {
      onDelete();
    } else {
      onSelectLetter(keyLetter);
    }
  };

  return (
    <Grid xs={1}>
      <Button
        variant="outlined"
        onClick={selectKeyLetter}
        id={disabled ? "disabled" : ""}
        sx={{
          backgroundColor: disabled? "#3a393c": "inherit"
        }}
      >
        {keyLetter}
      </Button>
    </Grid>
  );
};
