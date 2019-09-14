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

const AddTransactionModal = props => {
  const { isOpen, handleClose } = props;
  const classes = useStyles();

  const [values, setValues] = React.useState({
    title: "",
    cost: "",
  });

  const isStateInputsValid = () => {
    const { title, cost } = values;

    // Check the length of inputs
    if (title.length <= 0 || cost.length <= 0 || Number.isInteger(cost)) {
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (isStateInputsValid()) {
      // do stuff...
    } else {
      console.error("Not all inputs are valid!");
    }
  };

  const handleChange = field => evt => {
    setValues({ ...values, [field]: evt.target.value });
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
              <span>Создание новой сделки</span>
            </div>
            <p>Введите данные заказа, чтобы отправить заказчику для безопасной сделки.</p>
            <div>
              <TextField
                id="title"
                label="Название сделки"
                className={classes.textField}
                value={values.title}
                onChange={handleChange("title")}
                margin="none"
                required
              />
            </div>
            <div>
              <TextField
                id="cost"
                label="Сумма сделки"
                className={classes.textField}
                value={values.cost}
                onChange={handleChange("cost")}
                margin="normal"
                required
              />
            </div>
            <div className="add-transaction-modal__button-block">
              <button className="button-rf w-100">Создать сделку</button>
            </div>
          </form>
        </div>
      </Fade>
    </Modal>
  );
};

export default AddTransactionModal;
