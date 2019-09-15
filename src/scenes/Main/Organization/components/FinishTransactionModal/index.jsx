import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Backdrop, Fade, TextField } from "@material-ui/core";
import "./index.scss";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const FinishTransactionModal = props => {
  const { isOpen, handleClose } = props;
  const classes = useStyles();

  const transactionData = {
    title: "qwerty",
    cost: 10000,
  };

  const isStateInputsValid = () => {
    const { title, cost } = transactionData;
    // Check the length of inputs
    if (title.length <= 0 || cost.length <= 0 || !Number.isInteger(cost)) {
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (isStateInputsValid()) {
      alert("Finished!");
    } else {
      console.error("Not all inputs are valid!");
    }
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={isOpen}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpen}>
        <div className="add-transaction-modal">
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="add-transaction-modal__title">
              <span>Завершение сделки</span>
            </div>
            <p>
              Отправьте результат сделки на согласование заказчику, чтобы успешно вывести средства.
            </p>
            <div>
              <TextField
                id="title"
                label="Название сделки"
                className={classes.textField}
                value={transactionData.title}
                margin="none"
                required
                disabled
              />
            </div>
            <div>
              <TextField
                id="cost"
                label="Сумма сделки"
                className={classes.textField}
                value={transactionData.cost}
                margin="normal"
                required
                disabled
              />
            </div>
            <div className="add-transaction-modal__button-block">
              <button className="button-rf w-100">Завершить и отправить заказчику</button>
            </div>
          </form>
        </div>
      </Fade>
    </Modal>
  );
};

export default FinishTransactionModal;
