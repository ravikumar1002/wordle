import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

import { useEffect, useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const KeyBoard = () => {
  const [letters, setLetters] = useState<
    {
      key: string;
    }[]
  >();

  useEffect(() => {
    fetch("../../../data/letters.json")
      .then((res) => res.json())
      .then((json) => {
        setLetters(json.letters);
      });
  }, []);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {letters &&
            letters.map((letter) => {
              return <Box>{letter?.key}</Box>;
            })}
        </Grid>
      </Box>
    </div>
  );
};

export default KeyBoard;
