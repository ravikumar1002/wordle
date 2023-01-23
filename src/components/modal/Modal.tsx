import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { useAppData } from "context/app-context";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "2px solid white",
  backgroundColor: "white",
  width: 400,
  padding: "1rem 2rem ",
};

const BasicModal = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  const { gameOver, currAttempt, onRetry } = useAppData();

  useEffect(() => {
    handleOpen();
  }, [gameOver]);
  return (
    <div>
      <Modal
        open={modalOpen}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          background: "#ffffff6e",
        }}
      >
        <Box sx={style}>
          {gameOver.guessedWord && (
            <>
              <Typography variant="h6" align="center">
                You Correctly Guessed the Wordle :)
              </Typography>
              <Typography variant="body1" align="center">
                You guessed in {currAttempt.attempt} attempts
              </Typography>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    margin: "0.5rem",
                  }}
                  onClick={() => {
                    onRetry();
                    handleClose();
                  }}
                >
                  Play again
                </Button>
              </div>
            </>
          )}
          {!gameOver.guessedWord && (
            <>
              <Typography variant="h6" align="center" gutterBottom>
                Better Luck Next Time !!
              </Typography>
              <Typography variant="body1" align="center" gutterBottom>
                You used all your 6 attempts
              </Typography>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    margin: "0.5rem",
                  }}
                  onClick={() => {
                    onRetry();
                    handleClose();
                  }}
                >
                  Retry
                </Button>
              </div>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
