import { Key } from "./Key";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const KeyBoard = () => {
  const row1Keys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const row2Keys = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const row3Keys = ["BACK","Z", "X", "C", "V", "B", "N", "M", "ENTER"];

  return (
    // <div>
    //   {row1Keys.map((key) => {
    //     return <Key keyLetter={key} key={key} />;
    //   })}
    // </div>

    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        columns={{ xs: 12, sm: 16, md: 20 }}
        sx={{
          justifyContent: "center",
        }}
      >
        {row1Keys.map((key) => {
          return <Key keyLetter={key} key={key} />;
        })}
      </Grid>
      <Grid
        container
        spacing={2}
        columns={{ xs: 12, sm: 16, md: 20 }}
        sx={{
          justifyContent: "center",
        }}
      >
        {row2Keys.map((key) => {
          return <Key keyLetter={key} key={key} />;
        })}
      </Grid>
      <Grid
        container
        spacing={2}
        columns={{ xs: 12, sm: 16, md: 17 }}
        sx={{
          justifyContent: "center",
        }}
      >
        {row3Keys.map((key) => {
          return <Key keyLetter={key} key={key} />;
        })}
      </Grid>
    </Box>
  );
};

export default KeyBoard;
