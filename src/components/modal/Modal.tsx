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
  backgroundColor: "white",
  width: 400,
  boxShadow: 24,
  p: 4,
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
      >
        <Box sx={style}>
          <h3>
            {gameOver.guessedWord
              ? "You Correctly Guessed the Wordle"
              : "You Failed to Guess the Word"}
          </h3>
          {gameOver.guessedWord && (
            <h3>You guessed in {currAttempt.attempt} attempts</h3>
          )}

          <button
            onClick={() => {
              onRetry();
              handleClose();
            }}
          >
            Retry
          </button>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
