import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
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

  const handleSubmit = () => {
    console.log("mfk");
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
              <span>Завершение сделки</span>
            </div>
            <p>
              Отправьте результат сделки на согласование заказчику, чтобы успешно вывести средства
            </p>
            <div>
              <TextField
                id="title"
                label="Название сделки"
                className={classes.textField}
                value={values.title}
                onChange={handleChange("title")}
                margin="0"
              />
            </div>
            <div>
              <TextField
                id="cost"
                label="Стоимость сделки"
                className={classes.textField}
                value={values.cost}
                onChange={handleChange("cost")}
                margin="normal"
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

export default AddTransactionModal;
