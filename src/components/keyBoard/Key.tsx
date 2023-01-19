import { Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

interface IKeyProps {
  keyLetter: string;
}

export const Key = (props: IKeyProps) => {
  const { keyLetter } = props;
  return (
    <Grid xs={1}>
      <Button variant="contained">{keyLetter}</Button>
    </Grid>
  );
};
