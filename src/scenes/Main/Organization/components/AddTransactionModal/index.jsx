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

  const [fetching, setFetching] = React.useState(false);
  const [values, setValues] = React.useState({
    memo: "",
    targetPrice: "",
  });

  const isStateInputsValid = () => {
    const { memo, targetPrice } = values;

    // Check the length of inputs
    if (memo.length <= 0 || targetPrice.length <= 0 || Number.isInteger(targetPrice)) {
      return false;
    }
    return true;
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (isStateInputsValid()) {
      setFetching(true);
      props
        .createTransaction(values)
        .then(() => {
          // do some stuff...
          setFetching(false);
        })
        .catch(() => {
          setFetching(false);
        });
    } else {
      console.error("Not all inputs are valid!");
    }
  };

  const handleChange = field => evt => {
    setValues({ ...values, [field]: evt.target.value });
  };

  return (
    <Modal
      aria-labelledby="transition-modal-memo"
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
                id="memo"
                label="Название сделки"
                className={classes.textField}
                value={values.memo}
                onChange={handleChange("memo")}
                margin="none"
                required
              />
            </div>
            <div>
              <TextField
                id="targetPrice"
                label="Сумма сделки"
                className={classes.textField}
                value={values.targetPrice}
                onChange={handleChange("targetPrice")}
                margin="normal"
                required
              />
            </div>
            <div className="add-transaction-modal__button-block">
              <button className="button-rf w-100" disabled={fetching}>
                Создать сделку
              </button>
            </div>
          </form>
        </div>
      </Fade>
    </Modal>
  );
};

export default AddTransactionModal;
